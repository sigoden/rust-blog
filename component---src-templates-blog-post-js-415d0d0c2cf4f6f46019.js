(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{149:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return p});a(34);var r=a(7),i=a.n(r),n=a(0),s=a.n(n),o=a(153),l=a(160),d=a(157),c=a(158),u=a(154),f=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){var e=this.props.data.markdownRemark,t=this.props.data.site.siteMetadata.title,a=this.props.pageContext,r=a.previous,i=a.next;return s.a.createElement(d.a,{location:this.props.location,title:t},s.a.createElement(c.a,{title:e.frontmatter.title,description:e.frontmatter.description||e.excerpt}),s.a.createElement("h1",null,e.frontmatter.title),s.a.createElement("p",{style:Object.assign({},Object(u.b)(-.2),{display:"block",marginBottom:Object(u.a)(1),marginTop:Object(u.a)(-1)})},e.frontmatter.date),s.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.html}}),s.a.createElement("hr",{style:{marginBottom:Object(u.a)(1)}}),s.a.createElement(l.a,null),s.a.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},s.a.createElement("li",null,r&&s.a.createElement(o.a,{to:r.fields.slug,rel:"prev"},"← ",r.frontmatter.title)),s.a.createElement("li",null,i&&s.a.createElement(o.a,{to:i.fields.slug,rel:"next"},i.frontmatter.title," →"))))},t}(s.a.Component);t.default=f;var p="3654438753"},153:function(e,t,a){"use strict";a.d(t,"b",function(){return c});var r=a(0),i=a.n(r),n=a(4),s=a.n(n),o=a(33),l=a.n(o);a.d(t,"a",function(){return l.a});a(155);var d=i.a.createContext({}),c=function(e){return i.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};c.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func}},154:function(e,t,a){"use strict";a.d(t,"a",function(){return l}),a.d(t,"b",function(){return d});var r=a(165),i=a.n(r),n=a(166),s=a.n(n);s.a.overrideThemeStyles=function(){return{"a.gatsby-resp-image-link":{boxShadow:"none"}}},delete s.a.googleFonts;var o=new i.a(s.a);var l=o.rhythm,d=o.scale},155:function(e,t,a){var r;e.exports=(r=a(156))&&r.default||r},156:function(e,t,a){"use strict";a.r(t);a(34);var r=a(0),i=a.n(r),n=a(4),s=a.n(n),o=a(55),l=a(2),d=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return i.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json))};d.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},t.default=d},157:function(e,t,a){"use strict";a(34);var r=a(7),i=a.n(r),n=a(0),s=a.n(n),o=a(153),l=a(154),d=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){var e,t=this.props,a=t.location,r=t.title,i=t.children;return e="/rust-blog/"===a.pathname?s.a.createElement("h1",{style:Object.assign({},Object(l.b)(1.5),{marginBottom:Object(l.a)(1.5),marginTop:0})},s.a.createElement(o.a,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},r)):s.a.createElement("h3",{style:{fontFamily:"Montserrat, sans-serif",marginTop:0}},s.a.createElement(o.a,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},r)),s.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(l.a)(30),padding:Object(l.a)(1.5)+" "+Object(l.a)(.75)}},s.a.createElement("header",null,e),s.a.createElement("main",null,i),s.a.createElement("footer",null,"© ",(new Date).getFullYear(),", Powered with"," ",s.a.createElement("a",{href:"https://pages.github.com"},"Github Pages")," ",s.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby")))},t}(s.a.Component);t.a=d},158:function(e,t,a){"use strict";var r=a(159),i=a(0),n=a.n(i),s=a(4),o=a.n(s),l=a(167),d=a.n(l);function c(e){var t=e.description,a=e.lang,i=e.meta,s=e.keywords,o=e.title,l=r.data.site,c=t||l.siteMetadata.description;return n.a.createElement(d.a,{htmlAttributes:{lang:a},title:o,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:c},{property:"og:title",content:o},{property:"og:description",content:c},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:c}].concat(s.length>0?{name:"keywords",content:s.join(", ")}:[]).concat(i)})}c.defaultProps={lang:"en",meta:[],keywords:[],description:""},c.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.arrayOf(o.a.object),keywords:o.a.arrayOf(o.a.string),title:o.a.string.isRequired},t.a=c},159:function(e){e.exports={data:{site:{siteMetadata:{title:"Rust 博客",description:"Rust 系列博客文章",author:"sigoden huang"}}}}},160:function(e,t,a){"use strict";a(161);var r=a(163),i=a(0),n=a.n(i),s=a(153),o=a(164),l=a.n(o),d=a(154);var c="2020792114";t.a=function(){return n.a.createElement(s.b,{query:c,render:function(e){var t=e.site.siteMetadata,a=t.author,r=t.social;return n.a.createElement("div",{style:{display:"flex",marginBottom:Object(d.a)(2.5)}},n.a.createElement(l.a,{fixed:e.avatar.childImageSharp.fixed,alt:a,style:{marginRight:Object(d.a)(.5),marginBottom:0,minWidth:50,borderRadius:"100%"},imgStyle:{borderRadius:"50%"}}),n.a.createElement("p",null,"作者: ",a,n.a.createElement("br",null)," ","欢迎进入",n.a.createElement("a",{href:"https://github.com/"+r.github+"/rust-blog"},"Github"),"参与讨论和评论"))},data:r})}},161:function(e,t,a){"use strict";a(162)("fixed",function(e){return function(){return e(this,"tt","","")}})},162:function(e,t,a){var r=a(11),i=a(18),n=a(19),s=/"/g,o=function(e,t,a,r){var i=String(n(e)),o="<"+t;return""!==a&&(o+=" "+a+'="'+String(r).replace(s,"&quot;")+'"'),o+">"+i+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(o),r(r.P+r.F*i(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",a)}},163:function(e){e.exports={data:{avatar:{childImageSharp:{fixed:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAAFCklEQVQ4y3WUW2xURRjHD4QGAZEHDKAmRoyw7W731r3vdsue68ycy166vXdbumXbsm13e2+xVC4LAirEAlEMaCAURIghvEB8UDAhIWoivhBivURfSAV9sLRUaCifs9uy8uIk/3yzO+f/m/93zpzDfFRnY7IDAJjDUdMiZmH8fipecKrR/uoHleboaMQYHw0XJ0erSkLHG506gEuL4PFY7rq9YdPisaQ3Nz8QtcybxxKepxzmZMK39nC58Y33NP1XGVR4Y7+shz2S7s4OqWgio5lgRDZ+kwmar++LWIyj9Y61T33v184HY74cRrl6KGJadq3fU3BA0e/PiBunMnIx7FRMMISNDwex6VAfthzsx6aZIdkMI6oVthHT9Fuq6cPPYxsKdgfNy7OMa29T1ruaId/mbqT7YoTbOL2TGGGAmC/0YrOjG1uWp5D1GNXxlGRZ0YUtljS2jA2qNujFlikKvgH3SI6xHS2wjlUYVu0QdYe3cbq/tiEjUEgb88xoJs6CJsW95Nn/2lFJJEVs0IWtD/t5w9ERsfDl3MKJtMYMi4W6Ia5wYgiboBOX3E8i2802ZBtvRfafW5B9nOr2gn6k+onqSNbbiu2RNIX2cYbpFKs3joRs8wmHhKLL/ZweOnnjXBLboFNxQpI4YStVu+KGTs0LHUEftNPaQlyQDnohgexns97sBr3YCh2s4eqeSusSZkA0rO/h9D/0soWn2wTLkVbJ9nECOb5rxU5IEDfEketoM3Z649gZaMDeE41yKTQRLzQh9y/NyNG9BTsPtnGm01s543gXq9czfYK+rFswQDtrGG8RS87RNi3NyHk1ofigUSmDGlx2rJxwZVRCBQl8UqOwUK+yUIv979DNAk3YfWGLYL3VIVogzeo1pkcsrktx+lm6w7246FydbYMmudmgBqCSBGZrgxI0lCtQF5GhUpWgQhGBwr+vIoHcQ2pRvUubBHp/BSskOWOC6eUNpIMzzLayxl+fPkGa6tsalYeoLECY8FeDsrBLk8VPqR5RQViRIESE6uy1lTgQrxU9k02cNRuqkumWzLiTL4YEa7y/WXSEq+WArgIHbkcVAco1DKosjfBEW5k1ywSd0VQCIY2ARsSvNVkyRDH7Wz32Q4xzzMUFey3TI9teTHHFV1KCCWKSG2pklibjIUSTUBhQyKyikGy1E4LrwuFgdj6XA6uYJuWf1Eh+qOVd19tE6yu5FtN88cUkV/woxtnnKjA7Q9v8k8ImFRmBLOMnqiZnIZtkGb1ACLpDZPwP/X2Xrj/QsDBXLpQ+bhBcV/ZGLEvngaL5pSRvutuCnFAubbpEW8moROyiiV6jxo1UG6hWLLS9kipF4dupzkYJD1WCd6ZZcq7Pv0a9qm1Vh2geaOTsE3X0fgSJMEyTnWL+Z9C1k0gmu1TEQzXvmdosuYbixLsut9hNSvIfh4RoP7eZt/8R56znVYkbxxgdQIpsJqqyTlXIGtpqESY4g5F0K8L7ztfy7gkKu5z3E/c8a9D/OrMV2Z/LnSvRPhAXHJPVoo+eOQk0JABB4jSRhPuKxEFUQVCFAxATXJMJwbEv62mS3Mviouu/FvrqWGZ4Yf5mjX/lYD3/fIvsOROTPBcaJfeDCtH/d1QonYoJ7pkG3nmxGbk+S4V8a9rDpSvyX5+wb37Sozny4LTmztX+ZHgeHuNWp8v9nmTYzyZDfpIKlzp6a7jc0ehvCy/O1jbVm/e3KB7mX92F/eYbt+isAAAAAElFTkSuQmCC",width:50,height:50,src:"/rust-blog/static/d5fecb8dec83c7d87df23656f61a51e5/58398/rust-logo.png",srcSet:"/rust-blog/static/d5fecb8dec83c7d87df23656f61a51e5/58398/rust-logo.png 1x,\n/rust-blog/static/d5fecb8dec83c7d87df23656f61a51e5/fd23f/rust-logo.png 1.5x,\n/rust-blog/static/d5fecb8dec83c7d87df23656f61a51e5/fc368/rust-logo.png 2x,\n/rust-blog/static/d5fecb8dec83c7d87df23656f61a51e5/521d9/rust-logo.png 3x"}}},site:{siteMetadata:{author:"sigoden huang",social:{github:"sigoden"}}}}}},164:function(e,t,a){"use strict";var r=a(8);t.__esModule=!0,t.default=void 0;var i,n=r(a(7)),s=r(a(35)),o=r(a(75)),l=r(a(76)),d=r(a(0)),c=r(a(4)),u=function(e){var t=(0,l.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},f=Object.create({}),p=function(e){var t=u(e),a=t.fluid?t.fluid.src:t.fixed.src;return f[a]||!1},g=new WeakMap;var h=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver(function(e){e.forEach(function(e){if(g.has(e.target)){var t=g.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),g.delete(e.target),t())}})},{rootMargin:"200px"})),i);return a&&(a.observe(e),g.set(e,t)),function(){a.unobserve(e),g.delete(e)}},m=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSetWebp?"<source type='image/webp' srcset=\""+e.srcSetWebp+'" '+a+"/>":"",i=e.srcSet?'srcset="'+e.srcSet+'" ':"",n=e.title?'title="'+e.title+'" ':"",s=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",d=e.opacity?e.opacity:"1",c=e.transitionDelay?e.transitionDelay:"0.5s";return"<picture>"+r+"<img "+o+l+a+i+t+s+n+(e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"")+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+c+";opacity:"+d+';width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},b=d.default.forwardRef(function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,n=e.style,s=e.onLoad,c=e.onError,u=(0,o.default)(e,["sizes","srcSet","src","style","onLoad","onError"]);return d.default.createElement("img",(0,l.default)({sizes:a,srcSet:r,src:i},u,{onLoad:s,onError:c,ref:t,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))});b.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var y=function(e){function t(t){var a;a=e.call(this,t)||this;var r=!0,i=!1,n=t.fadeIn,o=p(t);!o&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=!1,i=!0),"undefined"==typeof window&&(r=!1),t.critical&&(r=!0,i=!1);var l=!(t.critical&&!t.fadeIn);return a.state={isVisible:r,imgLoaded:!1,IOSupported:i,fadeIn:n,hasNoScript:l,seenBefore:o},a.imageRef=d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,s.default)((0,s.default)(a))),a.handleRef=a.handleRef.bind((0,s.default)((0,s.default)(a))),a}(0,n.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.state.IOSupported&&e&&(this.cleanUpListeners=h(e,function(){var e=p(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0,imgLoaded:e})}))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=t.fluid?t.fluid.src:t.fixed.src,f[a]=!0,this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,s=e.imgStyle,o=void 0===s?{}:s,c=e.placeholderStyle,f=void 0===c?{}:c,p=e.placeholderClassName,g=e.fluid,h=e.fixed,y=e.backgroundColor,S=e.Tag,v=e.itemProp,E="boolean"==typeof y?"lightgray":y,w=(0,l.default)({opacity:this.state.imgLoaded?0:1,transition:"opacity 0.5s",transitionDelay:this.state.imgLoaded?"0.5s":"0.25s"},o,f),R=(0,l.default)({opacity:this.state.imgLoaded||!1===this.state.fadeIn?1:0,transition:!0===this.state.fadeIn?"opacity 0.5s":"none"},o),L={title:t,alt:this.state.isVisible?"":a,style:w,className:p};if(g){var x=g;return d.default.createElement(S,{className:(r||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(x.srcSet)},d.default.createElement(S,{style:{width:"100%",paddingBottom:100/x.aspectRatio+"%"}}),E&&d.default.createElement(S,{title:t,style:{backgroundColor:E,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",right:0,left:0}}),x.base64&&d.default.createElement(b,(0,l.default)({src:x.base64},L)),x.tracedSVG&&d.default.createElement(b,(0,l.default)({src:x.tracedSVG},L)),this.state.isVisible&&d.default.createElement("picture",null,x.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:x.srcSetWebp,sizes:x.sizes}),d.default.createElement(b,{alt:a,title:t,sizes:x.sizes,src:x.src,crossOrigin:this.props.crossOrigin,srcSet:x.srcSet,style:R,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v})),this.state.hasNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:m((0,l.default)({alt:a,title:t},x))}}))}if(h){var A=h,I=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:A.width,height:A.height},n);return"inherit"===n.display&&delete I.display,d.default.createElement(S,{className:(r||"")+" gatsby-image-wrapper",style:I,ref:this.handleRef,key:"fixed-"+JSON.stringify(A.srcSet)},E&&d.default.createElement(S,{title:t,style:{backgroundColor:E,width:A.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:A.height}}),A.base64&&d.default.createElement(b,(0,l.default)({src:A.base64},L)),A.tracedSVG&&d.default.createElement(b,(0,l.default)({src:A.tracedSVG},L)),this.state.isVisible&&d.default.createElement("picture",null,A.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:A.srcSetWebp,sizes:A.sizes}),d.default.createElement(b,{alt:a,title:t,width:A.width,height:A.height,sizes:A.sizes,src:A.src,crossOrigin:this.props.crossOrigin,srcSet:A.srcSet,style:R,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v})),this.state.hasNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:m((0,l.default)({alt:a,title:t,width:A.width,height:A.height},A))}}))}return null},t}(d.default.Component);y.defaultProps={critical:!1,fadeIn:!0,alt:"",Tag:"div"};var S=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string}),v=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string});y.propTypes={resolutions:S,sizes:v,fixed:S,fluid:v,fadeIn:c.default.bool,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string};var E=y;t.default=E}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-415d0d0c2cf4f6f46019.js.map