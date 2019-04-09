---
title: Cow 是干嘛的？
date: "2019-04-03T03:29:49.463Z"
description: "Cow 是一款写时克隆(clone-on-write)的智能指针。它有什么用呢？"
---

[std::borrow::Cow](https://doc.rust-lang.org/std/borrow/enum.Cow.html) 是一款写时克隆的智能指针。
它最大的价值就是**写时克隆**，如果用好，能很大程度提高性能并减少内存消耗。

## 类型

```rs
pub enum Cow<'a, B: ?Sized + 'a>
    where B: ToOwned
{
    /// Borrowed data.
    Borrowed(&'a B),
    /// Owned data.
    Owned(<B as ToOwned>::Owned),
}
```

`Cow` 是个 `Enum` 类型的数据。`Borrowed` 子类型容纳引用的数据，`Owned` 子类型容纳拥有的数据。

```rs
let slice = [0, 1, 2];
let mut input = Cow::Borrowed(&slice[..]); // Borrowed 容纳引用的数据

let mut input = Cow::Owned(vec![-1, 0, 1]); // Owned 容纳拥有的数据
```

`?Sized` 表示数据可以是大小未知的，可以容纳 `Trait Object`，`[T]`，`String` 等。
> Rust 中所有的类型参数默认是 `Sized`，我们如要取消这种限制，必须显示添加 `?Sized` 标记。


`ToOwned` 是一种更通用的 `Clone`，不限于仅克隆到同类型，而支持克隆到 `own` 类型（如`str` -> `String`，`[T]` -> `Vec<T>`）。


## 智能指针

`Cow` 是实现了 `Deref`，是一种智能指针。我们可以直接使用内部数据的方法。

```rs
let slice = [0, 1, 2];
let mut input = Cow::Borrowed(&slice[..]);
let v = input[0] // Deref
```

## 写时克隆

如果数据是只读了，不需要克隆。如果数据是可变的，对 `Owned` 型数据来说，可以直接修改，故不需要克隆，对 `Borrowed` 型数据，则可以通过`to_mut` 克隆并转换成 `Owned` 数据以进行修改操作。

如有这样一个函数。
```rs
fn abs_all(input: &mut Cow<[i32]>) {
    for i in 0..input.len() {
        let v = input[i];
        if v < 0 {
            // 仅 v < 0 且 input 是 Borrowd，才需要克隆
            input.to_mut()[i] = -v;
        }
    }
}
```

下面的 `input` 中所有元素均 `>= 0`，数据是只读了，执行时不会发生克隆。
```rs
let slice = [0, 1, 2];
let mut input = Cow::from(&slice[..]);
abs_all(&mut input);
```

下面的 `input` 就需要克隆了，因为 `input` 中有元素 `< 0`。
```rs
let slice = [-1, 0, 1];
let mut input = Cow::from(&slice[..]);
abs_all(&mut input);
```

下面的 `input` 不需要克隆，应为 `input` 是 Owned 型的数据。
```rs
let mut input = Cow::from(vec![-1, 0, 1]);
abs_all(&mut input);
```

结合 `Cow`，`abs_all` 对只读引用的，且存在元素 `>= 0` 的 `input` 数据进行了克隆。

## 意义

如果数据是 `Owned` 类型，不需要 `Cow` 封装。如果数据是引用的，但又注定会修改，还不如提前转换成 `Owned` 型的。
如果数据可能是引用的，即可能被修改，也可能不会被修改，且性能特别关键，那 `Cow` 就是必须的了。
