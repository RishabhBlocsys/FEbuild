(this.webpackJsonpfibit=this.webpackJsonpfibit||[]).push([[30],{1446:function(n,t,e){"use strict";e.r(t);var o,i,r=e(15),a=e(143),s=e(145),c=e(146),l=e(148),u=e(151),p=e(138),f=e.n(p),d=(e(158),e(159),e(1)),b=e(85),h=e(1442),x=e(167),m=e(9),g=e(191),v=e.n(g),y=e(1452),j=e(176),O=e(185),w=e(177),k=(e.p,e(153)),I=e(89),A=e(172),E=e(10),T=e(3),C=function(n){Object(l.a)(e,n);var t=Object(u.a)(e);function e(n){var o;Object(s.a)(this,e),(o=t.call(this,n)).setCookie=function(n){var t=o.props.cookies,e=new Date(Date.now()+60*A.b*60*1e3);t.set("infos",n,{path:"/",expires:e})};var i=n.cookies;return o.state={loading:!1,infos:i.get("infos")||null},o}return Object(c.a)(e,[{key:"componentDidMount",value:function(){var n=Object(a.a)(f.a.mark((function n(){var t,e,o;return f.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:t=this.props,e=t.infos,o=t.cookies,this.state.infos||e?this.props.setInfos(o.get("infos")):this.props.getInfo();case 2:case"end":return n.stop()}}),n,this)})));return function(){return n.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(){var n=this.props,t=n.infos,e=n.cookies;t&&!e.get("infos")&&this.setCookie(t)}},{key:"renderedInfo",value:function(n,t){var e="",o="",i="";return"tr"===this.context.locale?(e=n.banner.tu,o=n.mobile.tu,i=n.button_text.tu):(e=n.banner.en,o=n.mobile.en,i=n.button_text.en),Object(T.jsxs)(D,{children:[Object(T.jsxs)(x.a,{to:n.url,children:[Object(T.jsx)(y.a.img,{initial:{opacity:.2},animate:{opacity:1},transition:{delay:.4},src:e,exit:{opacity:0},className:"desk-img"},e),Object(T.jsx)("img",{src:o,className:"mobile-img",alt:""})]}),Object(T.jsx)(x.a,{to:n.button_url,children:Object(T.jsx)("button",{className:"ani-1",children:i})})]},t)}},{key:"render",value:function(){var n=this;return Object(T.jsx)(N,{children:Object(T.jsx)(v.a,{children:this.props.infos?this.props.infos.map((function(t,e){return n.renderedInfo(t,e)})):"loading.."})})}}]),e}(d.Component);C.contextType=I.a;var N=m.c.div(o||(o=Object(r.a)(["\n  width: 100%;\n  .home-title {\n    border-bottom: 1px solid #dddddd;\n    text-align: left;\n    margin-bottom: 30px;\n    h3 {\n      color: #000000;\n      font-size: 32px;\n      position: relative;\n      line-height: 32px;\n      margin: 0px 0px 15px;\n      padding-left: 20px;\n      letter-spacing: -1px;\n      :before {\n        content: '';\n        position: absolute;\n        left: 0px;\n        top: 12px;\n        width: 10px;\n        height: 10px;\n        background: url(",") no-repeat;\n      }\n    }\n  }\n  .star-title {\n    text-align: left;\n    margin-bottom: 18px;\n    h3 {\n      color: #000000;\n      font-size: 32px;\n      position: relative;\n      line-height: 32px;\n      margin: 0px;\n      padding-left: 20px;\n      letter-spacing: -1px;\n      :before {\n        content: '';\n        position: absolute;\n        left: 0px;\n        top: 12px;\n        width: 12px;\n        height: 12px;\n        background: url(",") no-repeat;\n      }\n    }\n  }\n  .heart-title {\n    border-bottom: 1px solid #dddddd;\n    text-align: left;\n    margin-bottom: 30px;\n    h3 {\n      color: #000000;\n      font-size: 32px;\n      position: relative;\n      line-height: 32px;\n      margin: 0px 0px 15px;\n      padding-left: 20px;\n      letter-spacing: -1px;\n      :before {\n        content: '';\n        position: absolute;\n        left: 0px;\n        top: 12px;\n        width: 12px;\n        height: 11px;\n        background: url(",") no-repeat;\n      }\n    }\n  }\n"])),w.a,O.a,j.a),D=m.c.div(i||(i=Object(r.a)(["\n  height:540px;\n  width:100%;\n  overflow:hidden;\n  position:relative;\n  // ","{\n  //   height:auto;\n  // }\n  ","{\n    height:486px;\n  }\n  a{\n    margin-bottom:-4px; display:block; width:100%; height:100%;\n    img{width: 100%; height: 100%; object-fit: cover;\n      // ","{\n      //   object-fit:contain;\n      // }\n      ","{\n        object-fit:cover;\n      }\n      &.desk-img\n      {\n        ","{\n          display:none;\n        }\n      }\n      &.mobile-img\n      {\n        display:none;\n        ","{\n          display:block;\n        }\n      }\n    }\n  }\n  button {\n    position:absolute;\n    bottom:50px;\n    left:calc(50% - 95px);\n    background-color: #00DBAE;\n    color: #fff;\n    font-size: 14px;\n    letter-spacing: -0.5px;\n    font-weight: 700;\n    border-radius: 15px;\n    width: 190px;\n    height: 44px;\n    :hover {\n      background-color: #000;\n      box-shadow: 2px 5px 10px 0px rgb(0 0 0 / 30%);\n    }\n    ","{\n      bottom:20px;\n    }\n    ","{\n      bottom:70px;\n    }\n  }\n"])),E.default.md,E.default.sm,E.default.md,E.default.sm,E.default.xs,E.default.xs,E.default.md,E.default.sm);t.default=Object(h.a)(Object(b.b)((function(n){return{infos:n.fetchDashboardInfo}}),(function(n){return{getInfo:function(){return n(k.a.fetcInfo())},setInfos:function(t){return n({type:"FETCHED_INFO",data:t})}}}))(C))},158:function(n,t,e){},159:function(n,t,e){},167:function(n,t,e){"use strict";e.d(t,"a",(function(){return h}));var o=e(1),i=e.n(o),r=e(55),a=function(){return a=Object.assign||function(n){for(var t,e=1,o=arguments.length;e<o;e++)for(var i in t=arguments[e])Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i]);return n},a.apply(this,arguments)};var s="",c=null,l=null,u=null;function p(){s="",null!==c&&c.disconnect(),null!==l&&(window.clearTimeout(l),l=null)}function f(n){return["BUTTON","INPUT","SELECT","TEXTAREA"].includes(n.tagName)&&!n.hasAttribute("disabled")||["A","AREA"].includes(n.tagName)&&n.hasAttribute("href")}function d(){var n=null;if("#"===s)n=document.body;else{var t=s.replace("#","");null===(n=document.getElementById(t))&&"#top"===s&&(n=document.body)}if(null!==n){u(n);var e=n.getAttribute("tabindex");return null!==e||f(n)||n.setAttribute("tabindex",-1),n.focus({preventScroll:!0}),null!==e||f(n)||(n.blur(),n.removeAttribute("tabindex")),p(),!0}return!1}function b(n){return i.a.forwardRef((function(t,e){var o="";"string"===typeof t.to&&t.to.includes("#")?o="#"+t.to.split("#").slice(1).join("#"):"object"===typeof t.to&&"string"===typeof t.to.hash&&(o=t.to.hash);var f={};n===r.c&&(f.isActive=function(n,t){return n&&n.isExact&&t.hash===o});var b=function(n,t){var e={};for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&t.indexOf(o)<0&&(e[o]=n[o]);if(null!=n&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(o=Object.getOwnPropertySymbols(n);i<o.length;i++)t.indexOf(o[i])<0&&Object.prototype.propertyIsEnumerable.call(n,o[i])&&(e[o[i]]=n[o[i]])}return e}(t,["scroll","smooth","timeout","elementId"]);return i.a.createElement(n,a({},f,b,{onClick:function(n){var e;p(),s=t.elementId?"#"+t.elementId:o,t.onClick&&t.onClick(n),""===s||n.defaultPrevented||0!==n.button||t.target&&"_self"!==t.target||n.metaKey||n.altKey||n.ctrlKey||n.shiftKey||(u=t.scroll||function(n){return t.smooth?n.scrollIntoView({behavior:"smooth"}):n.scrollIntoView()},e=t.timeout,window.setTimeout((function(){!1===d()&&(null===c&&(c=new MutationObserver(d)),c.observe(document,{attributes:!0,childList:!0,subtree:!0}),l=window.setTimeout((function(){p()}),e||1e4))}),0))},ref:e}),t.children)}))}var h=b(r.b);b(r.c)},176:function(n,t,e){"use strict";t.a=e.p+"static/media/heart-icon.42d793f9.svg"},177:function(n,t,e){"use strict";t.a=e.p+"static/media/round-icon.21d7ae7e.svg"},185:function(n,t,e){"use strict";t.a=e.p+"static/media/star-icon.a0ea2603.svg"}}]);
//# sourceMappingURL=30.2be080c6.chunk.js.map