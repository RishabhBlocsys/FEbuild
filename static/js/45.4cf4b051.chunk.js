(this.webpackJsonpfibit=this.webpackJsonpfibit||[]).push([[45],{1424:function(n,e,t){"use strict";t.r(e);var a,i,r=t(15),o=t(143),s=t(145),c=t(146),l=t(148),p=t(151),u=t(58),d=t(138),b=t.n(d),m=(t(158),t(159),t(1)),h=t.n(m),x=t(1425),g=t.n(x),f=t(85),v=t(1442),j=t(166),k=t(9),w=t(191),y=t.n(w),O=t(1452),C=t(10),_=t(484),N=t(485),S=t(153),B=t(89),D=t(172),T=t(3),J=["onClick"],E={desktop:{breakpoint:{max:3e3,min:1024},items:1,slidesToSlide:1},tablet:{breakpoint:{max:1024,min:464},items:1,slidesToSlide:1},mobile:{breakpoint:{max:464,min:0},items:1,slidesToSlide:1}},H=function(n){var e=n.onClick,t=Object(u.a)(n,J),a=(t.onMove,t.index),i=t.active,r=t.carouselState;r.currentSlide,r.deviceType;return Object(T.jsx)("button",{className:i?"active":"inactive",onClick:function(){return e()},children:h.a.Children.toArray([1,2,3,4,5,6])[a]})},z=function(n){Object(l.a)(t,n);var e=Object(p.a)(t);function t(n){var a;Object(s.a)(this,t),(a=e.call(this,n)).setCookie=function(n){var e=new Date;e.setHours(e.getHours()+Number(D.b)),localStorage.setItem("banners",JSON.stringify({banners:n,stamp:e}))},a.getCookie=function(){var n=localStorage.getItem("banners"),e=JSON.parse(n);return!(e&&new Date(e.stamp)<new Date)&&(e?e.banners:null)};n.cookies;return a.state={loading:!1,banners:a.getCookie()||null},a}return Object(c.a)(t,[{key:"componentDidMount",value:function(){var n=Object(o.a)(b.a.mark((function n(){var e;return b.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:e=this.props.banners,this.state.banners||e?this.props.setBanners(this.getCookie()):this.props.getBanners();case 2:case"end":return n.stop()}}),n,this)})));return function(){return n.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(){var n=this.props.banners;n&&!this.getCookie()&&this.setCookie(n)}},{key:"renderedBanner",value:function(n,e){var t="",a="";return"tr"===this.context.locale?(t=n.banner.tu,a=n.mobile.tu):(t=n.banner.en,a=n.mobile.en),Object(T.jsx)("div",{className:"item",children:Object(T.jsxs)(j.a,{to:n.url,children:[Object(T.jsx)(O.a.img,{initial:{opacity:.2},animate:{opacity:1},transition:{delay:.4},src:t,exit:{opacity:0},className:"desktop-img"},e),Object(T.jsx)(O.a.img,{initial:{opacity:.2},animate:{opacity:1},transition:{delay:.4},src:a,exit:{opacity:0},className:"mobile-img"},e)]})},e)}},{key:"render",value:function(){var n=this;return Object(T.jsx)(y.a,{children:Object(T.jsx)(A,{children:this.props.banners?Object(T.jsx)(g.a,{responsive:E,showDots:!0,infinite:!0,customDot:Object(T.jsx)(H,{}),children:this.props.banners.map((function(e,t){return n.renderedBanner(e,t)}))}):"loading.."})})}}]),t}(m.Component);z.contextType=B.a;k.c.div(a||(a=Object(r.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-wrap: wrap;\n"])));var A=k.c.div(i||(i=Object(r.a)(["\n  min-height: calc(100vh - 100px);\n  width: 100%;\n  overflow:hidden;\n  ","{\n    min-height:auto;\n    margin-top:80px;\n  }\n  // ","{\n  //   max-height: 550px;\n  // }\n  .item {\n    img {\n      width: 100%;\n      height:100%;\n      object-fit:cover;\n      min-height: 100vh;\n      // margin-top:100px;\n      &.desktop-img\n      {\n        ","{\n          display:none;\n        }\n      }\n      &.mobile-img\n      { display:none;\n        ","{\n          display:block;\n        }\n      }\n      ","{\n        min-height:auto;\n        margin-top:0px;\n      }\n    }\n  }\n  .react-multi-carousel-track\n  {\n    height: 100vh;\n    ","{\n      height:auto;\n    }\n    // ","{\n    //   max-height: 550px;\n    // }\n  }\n  .react-multiple-carousel__arrow {\n    background: transparent;\n    min-width: 20px;\n    min-height: 20px;\n    padding: 0px;\n    border-radius: 0px;\n    z-index:1;\n    :hover {\n      background: transparent;\n    }\n  }\n  .react-multiple-carousel__arrow--left::before {\n    background: url(",") no-repeat;\n    color: transparent;\n  }\n  .react-multiple-carousel__arrow--right::before {\n    background: url(",") no-repeat;\n    color: transparent;\n  }\n  .react-multiple-carousel__arrow--left {\n    left: calc(50% - 140px);\n    bottom: 33px;\n  }\n  .react-multiple-carousel__arrow--right {\n    right: calc(50% - 140px);\n    bottom: 33px;\n  }\n  .react-multi-carousel-dot-list {\n    background-color: rgba(255, 255, 255, 0.85);\n    width: 320px;\n    height: 52px;\n    border-radius: 20px;\n    margin: 0 auto 20px;\n    button {\n      position: relative;\n      margin: 0px 10px;\n      padding: 0px 0px 0px 10px;\n      font-size: 14px;\n      color: rgb(0 0 0 / 20%);\n      &.active {\n        color: #000;\n      }\n      :before {\n        content: '0';\n        position: absolute;\n        left: 0px;\n      }\n    }\n    ","{\n      width:300px;\n    }\n  }\n"])),C.default.md,C.default.xs,C.default.xs,C.default.xs,C.default.md,C.default.md,C.default.xs,_.a,N.a,C.default.sm);e.default=Object(v.a)(Object(f.b)((function(n){return{banners:n.fetchDashboardBanners}}),(function(n){return{getBanners:function(){return n(S.a.fetchBanners())},setBanners:function(e){return n({type:"FETCHED_NFT_BANNERS",data:e})}}}))(z))},484:function(n,e,t){"use strict";e.a=t.p+"static/media/banner-larrow.e28db673.svg"},485:function(n,e,t){"use strict";e.a=t.p+"static/media/banner-rarrow.733c2133.svg"}}]);
//# sourceMappingURL=45.4cf4b051.chunk.js.map