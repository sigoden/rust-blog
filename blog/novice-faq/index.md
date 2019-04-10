---
title: 初学者 FAQ？
date: "2019-04-10T03:43:49.463Z"
description: "Rust 初学者常会碰到的一些问题的归纳和解答"
---

Rust 初学者常会碰到的一些问题的归纳和解答。

> 注意: 此文会不定期更新。

<details>
<summary>
如何安装 Rust ?
</summary>

```sh
curl https://sh.rustup.rs -sSf | sh 
```
</details>

<details>
<summary>
如何更新 Rust ?
</summary>

```sh
rustup update # 更新
```

> `rustup self update` 更新 rustup 工具自身
</details>

<details>
<summary>
什么是 toolchain, target, component？
</summary>

- toolchain: Rust 发布频道，如 `stable`，`beta`, `nightly` 。
- target: Rust 支持的平台，如 `x86_64-unknown-linux-gnu` 和 `wasm32-unknown-unknown`,点击[platform-support](https://forge.rust-lang.org/platform-support.html)获取查看所有支持的平台
- component: Rust 工具箱组件，常见有 `cargo`(包管理), `rustc`(编译器) `rust-src`(rust源码)，`rust-std`(std库)，`clippy`(lint),`rustfmt`(格式工具)。
</details>

<details>
<summary>
如何安装并使用 nightly ?
</summary>

安装
```
rustup install nightly
rustup component add --toolchain nightly clippy rust-src rustfmt
```

配置项目使用 nightly
```
rustup override set nightly
```

使用 nightly 版本的命令
```
cargo +nightly build
```
</details>

<details>
<summary>
Cargo下载太慢，如何加速?
</summary>

- Cargo 换源

修改 `$HOME/.cargo/config` 文件
```
[source.crates-io]
replace-with = 'ustc'

[source.ustc]
registry = "git://mirrors.ustc.edu.cn/crates.io-index"
```

- Cargo 代理

修改 `$HOME/.cargo/config` 文件

```
[http]
proxy = "127.0.0.1:8080"

[https]
proxy = "127.0.0.1:8080"
```

> 将替换 `127.0.0.1:8080` 成你的代理服务器地址
</details>


<details>
<summary>
rust开发使用什么 IDE？
</summary>

- clion + [IntelliJ Rust plugin](https://plugins.jetbrains.com/plugin/8182-rust/)
- vscode + [ra-lsp](https://github.com/rust-analyzer/rust-analyzer)

> 安装 `ra-lsp`

```
git clone https://github.com/rust-analyzer/rust-analyzer
cd rust-analyzer
cargo install-code
```
</details>


<details>
<summary>
为什么学习 Rust 要先从书籍而不是代码开始？
</summary>

Rust 引入了很多独特的概念（Trait, 所有权与借用，生命周期)，加上编译器十分严格，所以建议从阅读书籍理解基础概念入手。

如果不理解这些直接写代码，就是和编译器战斗了，学习效率及其低下且痛苦。

下面列出了一些重要的书籍。

#### 必读

- [The Rust Programing Language](https://doc.rust-lang.org/book/)
- [The Edition Guide](https://doc.rust-lang.org/edition-guide/rust-2018/index.html)

#### 强烈推荐

- [Rust by Example](https://doc.rust-lang.org/stable/rust-by-example/)
- [The Rustonomicon](https://doc.rust-lang.org/stable/nomicon/README.html)
- [The Cargo Book](https://doc.rust-lang.org/cargo/guide/)

</details>


<details>
<summary>
如何查询 Rust 语法规范？
</summary>

[The Rust Reference](https://doc.rust-lang.org/reference/introduction.html)
</details>

<details>
<summary>
Rust 的 Features 清单?
</summary>

[The Unstable Book](https://doc.rust-lang.org/unstable-book/index.html)
</details>


<details>
<summary>
Rust 程序员自称？
</summary>

rustacean
</details>

<details>
<summary>
Rust 术语中英文对照词典？
</summary>

[Rust Glossary](https://github.com/rust-lang-cn/english-chinese-glossary-of-rust/blob/master/rust-glossary.md)
</details>


<details>
<summary>
为什么要多使用 `cargo check` 少使用 `cargo build`?
</summary>

`cargo check` 专为加速工作流而开发的命令，它不产生二进制，只确保代码能够编译通过，**更快**。

推荐开发流程：
1. 编写代码
2. 运行 `cargo check` 判断是否编译通过
3. 重复步骤 1-2
4. 运行 `cargo test`，确保通过所有测试
5. 运行 `cargo build` 生成可执行文件
6. 执行步骤 1
</details>


<details>
<summary>
`#![..]` vs `#[..]` ?
</summary>

`#[..]` 仅作用于它后面的代码。`#![..]` 作用于整个文件。

```rs
#[allow(non_camel_case_types)]
type int8_t = i8;

type int16_t = i16; // 警告
```

```rs
#![allow(non_camel_case_types)]
type int8_t = i8;

type int16_t = i16; // 不再警告
```
</details>


<details>
<summary>
如何一键屏蔽所有 unused 警告？
</summary>

添加代码
```
#![allow(unused)]
```
</details>

<details>
<summary>
如何减小可执行文件体积？
</summary>

- 构建时使用 release 选项
```
cargo build --release
```
- 剔除二进制中包含的全部调试用信息
```
strip target/release/$command
```
- 配置 panic 处理策略

Cargo.toml
```
[profile.release]
panic = "abort"
```
- 启用 LTO

Cargo.toml
```
[profile.release]
lto = true
codegen-units = 1
incremental = false
```

- 调整优化级别

Cargo.toml
```
[profile.release]
opt-level = "z"
```
- 移除 `std` 仅使用 `core`

- 使用 upx 压缩二进制
```
upx --ultra-brute target/release/$command
```

效果:

| build   | modifications         | size (bytes) | size (human) | % change |
| ------- | --------------------- | ------------ | ------------ | -------- |
| release | none                  | 6706984      | 6.4M         | 0%       |
| release | stripped              | 1749216      | 1.7M         | -73.9%   |
| release | malloc                | 4293464      | 4.1M         | -36.0%   |
| release | panic abort           | 6674328      | 6.4M         | -0.5%    |
| release | No ThinLTO            | 4885384      | 4.7M         | -27.2%   |
| release | -Oz                   | 6631248      | 6.4M         | -1.1%    |
| release | all above             | 1019704      | 996K         | -84.8%   |
| release | above + xargo - strip | 1181920      | 1154K        | -82.4%   |
| release | everything            | 835320       | 816K         | -87.5%   |
| release | everything + upx      | 247840       | 243K         | -96.3%   |
</details>

<details>
<summary>
Rust 中宏的种类？
</summary>

### `macro_rules` 宏
```
macro_rules! say_hello {
    () => (
        println!("Hello!");
    )
}

say_hello!()
```

### `proc_macro` 宏

- **#[derive] mode macros**

```rs
use proc_macro::TokenStream;

#[proc_macro_derive(HelloWorld)]
pub fn hello_world(input: TokenStream) -> TokenStream {
    // ...
}
```

```rs
#[derive(HelloWorld)]
struct Pancakes;
```

- **Function-like macros**

```rs
use proc_macro::TokenStream;

#[proc_macro]
pub fn make_pub(item: TokenStream) -> TokenStream {
    // ..
}
```

```rs
make_pub! {
    static X: u32 = "foo";
}
```

- **Attribute macros**

```rs
use proc_macro::TokenStream;

#[proc_macro_attribute]
pub fn hello(attr: TokenStream, item: TokenStream) -> TokenStream {
    // ...
}
```

```rs
#[hello]
fn foo() {}
```
</details>