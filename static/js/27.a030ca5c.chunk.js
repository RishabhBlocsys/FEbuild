(this.webpackJsonpavangart=this.webpackJsonpavangart||[]).push([[27],{158:function(t,e,n){},159:function(t,e,n){},166:function(t,e,n){"use strict";n.d(e,"a",(function(){return g}));var o=n(1),r=n.n(o),i=n(55),a=function(){return a=Object.assign||function(t){for(var e,n=1,o=arguments.length;n<o;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t},a.apply(this,arguments)};var l="",s=null,c=null,p=null;function u(){l="",null!==s&&s.disconnect(),null!==c&&(window.clearTimeout(c),c=null)}function h(t){return["BUTTON","INPUT","SELECT","TEXTAREA"].includes(t.tagName)&&!t.hasAttribute("disabled")||["A","AREA"].includes(t.tagName)&&t.hasAttribute("href")}function d(){var t=null;if("#"===l)t=document.body;else{var e=l.replace("#","");null===(t=document.getElementById(e))&&"#top"===l&&(t=document.body)}if(null!==t){p(t);var n=t.getAttribute("tabindex");return null!==n||h(t)||t.setAttribute("tabindex",-1),t.focus({preventScroll:!0}),null!==n||h(t)||(t.blur(),t.removeAttribute("tabindex")),u(),!0}return!1}function f(t){return r.a.forwardRef((function(e,n){var o="";"string"===typeof e.to&&e.to.includes("#")?o="#"+e.to.split("#").slice(1).join("#"):"object"===typeof e.to&&"string"===typeof e.to.hash&&(o=e.to.hash);var h={};t===i.c&&(h.isActive=function(t,e){return t&&t.isExact&&e.hash===o});var f=function(t,e){var n={};for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&e.indexOf(o)<0&&(n[o]=t[o]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(t);r<o.length;r++)e.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(t,o[r])&&(n[o[r]]=t[o[r]])}return n}(e,["scroll","smooth","timeout","elementId"]);return r.a.createElement(t,a({},h,f,{onClick:function(t){var n;u(),l=e.elementId?"#"+e.elementId:o,e.onClick&&e.onClick(t),""===l||t.defaultPrevented||0!==t.button||e.target&&"_self"!==e.target||t.metaKey||t.altKey||t.ctrlKey||t.shiftKey||(p=e.scroll||function(t){return e.smooth?t.scrollIntoView({behavior:"smooth"}):t.scrollIntoView()},n=e.timeout,window.setTimeout((function(){!1===d()&&(null===s&&(s=new MutationObserver(d)),s.observe(document,{attributes:!0,childList:!0,subtree:!0}),c=window.setTimeout((function(){u()}),n||1e4))}),0))},ref:n}),e.children)}))}var g=f(i.b);f(i.c)},212:function(t,e,n){"use strict";var o=n(0),r=n(1),i=n(90),a=n(28);function l(t){var e=function(){var t=r.useContext(i.a);return Object(a.c)(t),t}(),n=e.formatMessage,o=e.textComponent,l=void 0===o?r.Fragment:o,s=t.id,c=t.description,p=t.defaultMessage,u=t.values,h=t.children,d=t.tagName,f=void 0===d?l:d,g=n({id:s,description:c,defaultMessage:p},u,{ignoreTag:t.ignoreTag});return"function"===typeof h?h(Array.isArray(g)?g:[g]):f?r.createElement(f,null,r.Children.toArray(g)):r.createElement(r.Fragment,null,g)}l.displayName="FormattedMessage";var s=r.memo(l,(function(t,e){var n=t.values,r=Object(o.f)(t,["values"]),i=e.values,l=Object(o.f)(e,["values"]);return Object(a.d)(i,n)&&Object(a.d)(r,l)}));s.displayName="MemoizedFormattedMessage";e.a=s},284:function(t,e,n){"use strict";e.a=n.p+"static/media/searchICO.276b50c6.svg"},290:function(t,e,n){"use strict";e.a=n.p+"static/media/nft2.5216e419.jpg"},340:function(t,e,n){"use strict";var o=n(1),r=n.n(o),i=function(t,e){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])},i(t,e)};var a=function(){return a=Object.assign||function(t){for(var e,n=1,o=arguments.length;n<o;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t},a.apply(this,arguments)};var l="Pixel",s="Percent",c={unit:s,value:.8};function p(t){return"number"===typeof t?{unit:s,value:100*t}:"string"===typeof t?t.match(/^(\d*(\.\d+)?)px$/)?{unit:l,value:parseFloat(t)}:t.match(/^(\d*(\.\d+)?)%$/)?{unit:s,value:parseFloat(t)}:(console.warn('scrollThreshold format is invalid. Valid formats: "120px", "50%"...'),c):(console.warn("scrollThreshold should be string or number"),c)}var u=function(t){function e(e){var n=t.call(this,e)||this;return n.lastScrollTop=0,n.actionTriggered=!1,n.startY=0,n.currentY=0,n.dragging=!1,n.maxPullDownDistance=0,n.getScrollableTarget=function(){return n.props.scrollableTarget instanceof HTMLElement?n.props.scrollableTarget:"string"===typeof n.props.scrollableTarget?document.getElementById(n.props.scrollableTarget):(null===n.props.scrollableTarget&&console.warn("You are trying to pass scrollableTarget but it is null. This might\n        happen because the element may not have been added to DOM yet.\n        See https://github.com/ankeetmaini/react-infinite-scroll-component/issues/59 for more info.\n      "),null)},n.onStart=function(t){n.lastScrollTop||(n.dragging=!0,t instanceof MouseEvent?n.startY=t.pageY:t instanceof TouchEvent&&(n.startY=t.touches[0].pageY),n.currentY=n.startY,n._infScroll&&(n._infScroll.style.willChange="transform",n._infScroll.style.transition="transform 0.2s cubic-bezier(0,0,0.31,1)"))},n.onMove=function(t){n.dragging&&(t instanceof MouseEvent?n.currentY=t.pageY:t instanceof TouchEvent&&(n.currentY=t.touches[0].pageY),n.currentY<n.startY||(n.currentY-n.startY>=Number(n.props.pullDownToRefreshThreshold)&&n.setState({pullToRefreshThresholdBreached:!0}),n.currentY-n.startY>1.5*n.maxPullDownDistance||n._infScroll&&(n._infScroll.style.overflow="visible",n._infScroll.style.transform="translate3d(0px, "+(n.currentY-n.startY)+"px, 0px)")))},n.onEnd=function(){n.startY=0,n.currentY=0,n.dragging=!1,n.state.pullToRefreshThresholdBreached&&(n.props.refreshFunction&&n.props.refreshFunction(),n.setState({pullToRefreshThresholdBreached:!1})),requestAnimationFrame((function(){n._infScroll&&(n._infScroll.style.overflow="auto",n._infScroll.style.transform="none",n._infScroll.style.willChange="unset")}))},n.onScrollListener=function(t){"function"===typeof n.props.onScroll&&setTimeout((function(){return n.props.onScroll&&n.props.onScroll(t)}),0);var e=n.props.height||n._scrollableNode?t.target:document.documentElement.scrollTop?document.documentElement:document.body;n.actionTriggered||((n.props.inverse?n.isElementAtTop(e,n.props.scrollThreshold):n.isElementAtBottom(e,n.props.scrollThreshold))&&n.props.hasMore&&(n.actionTriggered=!0,n.setState({showLoader:!0}),n.props.next&&n.props.next()),n.lastScrollTop=e.scrollTop)},n.state={showLoader:!1,pullToRefreshThresholdBreached:!1,prevDataLength:e.dataLength},n.throttledOnScrollListener=function(t,e,n,o){var r,i=!1,a=0;function l(){r&&clearTimeout(r)}function s(){var s=this,c=Date.now()-a,p=arguments;function u(){a=Date.now(),n.apply(s,p)}function h(){r=void 0}i||(o&&!r&&u(),l(),void 0===o&&c>t?u():!0!==e&&(r=setTimeout(o?h:u,void 0===o?t-c:t)))}return"boolean"!==typeof e&&(o=n,n=e,e=void 0),s.cancel=function(){l(),i=!0},s}(150,n.onScrollListener).bind(n),n.onStart=n.onStart.bind(n),n.onMove=n.onMove.bind(n),n.onEnd=n.onEnd.bind(n),n}return function(t,e){function n(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}(e,t),e.prototype.componentDidMount=function(){if("undefined"===typeof this.props.dataLength)throw new Error('mandatory prop "dataLength" is missing. The prop is needed when loading more content. Check README.md for usage');if(this._scrollableNode=this.getScrollableTarget(),this.el=this.props.height?this._infScroll:this._scrollableNode||window,this.el&&this.el.addEventListener("scroll",this.throttledOnScrollListener),"number"===typeof this.props.initialScrollY&&this.el&&this.el instanceof HTMLElement&&this.el.scrollHeight>this.props.initialScrollY&&this.el.scrollTo(0,this.props.initialScrollY),this.props.pullDownToRefresh&&this.el&&(this.el.addEventListener("touchstart",this.onStart),this.el.addEventListener("touchmove",this.onMove),this.el.addEventListener("touchend",this.onEnd),this.el.addEventListener("mousedown",this.onStart),this.el.addEventListener("mousemove",this.onMove),this.el.addEventListener("mouseup",this.onEnd),this.maxPullDownDistance=this._pullDown&&this._pullDown.firstChild&&this._pullDown.firstChild.getBoundingClientRect().height||0,this.forceUpdate(),"function"!==typeof this.props.refreshFunction))throw new Error('Mandatory prop "refreshFunction" missing.\n          Pull Down To Refresh functionality will not work\n          as expected. Check README.md for usage\'')},e.prototype.componentWillUnmount=function(){this.el&&(this.el.removeEventListener("scroll",this.throttledOnScrollListener),this.props.pullDownToRefresh&&(this.el.removeEventListener("touchstart",this.onStart),this.el.removeEventListener("touchmove",this.onMove),this.el.removeEventListener("touchend",this.onEnd),this.el.removeEventListener("mousedown",this.onStart),this.el.removeEventListener("mousemove",this.onMove),this.el.removeEventListener("mouseup",this.onEnd)))},e.prototype.componentDidUpdate=function(t){this.props.dataLength!==t.dataLength&&(this.actionTriggered=!1,this.setState({showLoader:!1}))},e.getDerivedStateFromProps=function(t,e){return t.dataLength!==e.prevDataLength?a(a({},e),{prevDataLength:t.dataLength}):null},e.prototype.isElementAtTop=function(t,e){void 0===e&&(e=.8);var n=t===document.body||t===document.documentElement?window.screen.availHeight:t.clientHeight,o=p(e);return o.unit===l?t.scrollTop<=o.value+n-t.scrollHeight+1:t.scrollTop<=o.value/100+n-t.scrollHeight+1},e.prototype.isElementAtBottom=function(t,e){void 0===e&&(e=.8);var n=t===document.body||t===document.documentElement?window.screen.availHeight:t.clientHeight,o=p(e);return o.unit===l?t.scrollTop+n>=t.scrollHeight-o.value:t.scrollTop+n>=o.value/100*t.scrollHeight},e.prototype.render=function(){var t=this,e=a({height:this.props.height||"auto",overflow:"auto",WebkitOverflowScrolling:"touch"},this.props.style),n=this.props.hasChildren||!!(this.props.children&&this.props.children instanceof Array&&this.props.children.length),o=this.props.pullDownToRefresh&&this.props.height?{overflow:"auto"}:{};return r.a.createElement("div",{style:o,className:"infinite-scroll-component__outerdiv"},r.a.createElement("div",{className:"infinite-scroll-component "+(this.props.className||""),ref:function(e){return t._infScroll=e},style:e},this.props.pullDownToRefresh&&r.a.createElement("div",{style:{position:"relative"},ref:function(e){return t._pullDown=e}},r.a.createElement("div",{style:{position:"absolute",left:0,right:0,top:-1*this.maxPullDownDistance}},this.state.pullToRefreshThresholdBreached?this.props.releaseToRefreshContent:this.props.pullDownToRefreshContent)),this.props.children,!this.state.showLoader&&!n&&this.props.hasMore&&this.props.loader,this.state.showLoader&&this.props.hasMore&&this.props.loader,!this.props.hasMore&&this.props.endMessage))},e}(o.Component);e.a=u},341:function(t,e,n){"use strict";var o,r,i=n(15),a=(n(1),n(9)),l=n(166),s=n(1450),c=n(290),p=n(10),u=n(3);a.c.div(o||(o=Object(i.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-wrap: wrap;\n  .JCSB {\n    justify-content: space-between;\n  }\n"])));var h=a.c.div(r||(r=Object(i.a)(["\n  width:calc(25% - 20px);\n  margin:0px 10px 20px 10px;\n  position:relative;\n  ","{\n    width:calc(33.33% - 20px);\n  }\n  ","{\n      width:calc(50% - 20px);\n  }\n  ","{\n      width:295px;\n      height:295px;\n      margin:0px auto 20px;\n  }\n  .CIbox\n  {\n    width: 100%;\n    height: 255px;\n    border-radius: 10px;\n    overflow: hidden;\n    img {\n      width: 100%;\n      height: 100%;\n      object-fit: cover;\n    }\n    ","{\n      height:295px;\n    }\n  }\n  .collbox-desc\n  {\n    position:absolute;\n    top:0px;\n    left:0px;\n    width:100%;\n    height:100%;\n    background-color:rgb(0 0 0 / 70%);\n    border-radius:10px;\n    padding:20px 10px 0px 20px;\n    opacity:0;\n    :hover\n    {\n      opacity:1;\n    }\n    .coll-title\n    {\n      font-size:20px;\n      color:#fff;\n      letter-spacing:-0.75px;\n      font-weight:700;\n      margin:0px 0px 2px;\n    }\n    .creator-name\n    {\n      font-size:16px;\n      color:rgb(255 255 255 / 50%);\n      letter-spacing:-0.8px;\n      font-weight:600;\n      margin:0px;\n    }\n  }\n"])),p.default.md,p.default.sm,p.default.xs,p.default.xs);e.a=function(t){var e=t.id,n=t.collImg,o=t.collName,r=t.creatorName;return Object(u.jsx)(h,{children:Object(u.jsxs)(l.a,{to:"/collection-detail/".concat(e),children:[Object(u.jsx)("div",{className:"CIbox",children:Object(u.jsx)(s.a.img,{initial:{opacity:.2},animate:{opacity:1},transition:{delay:.4},src:n||c.a,exit:{opacity:0}},n||c.a)}),Object(u.jsxs)("div",{className:"collbox-desc",children:[Object(u.jsx)("p",{className:"coll-title",children:o||"Collection Name"}),Object(u.jsxs)("p",{className:"creator-name",children:["by ",r||"Creator Name"]})]})]})},e)}},710:function(t,e,n){"use strict";n.r(e);var o,r,i,a,l,s,c,p,u,h,d,f=n(15),g=n(143),m=n(88),b=n(145),x=n(146),v=n(148),j=n(151),y=n(16),w=n(138),O=n.n(w),T=(n(158),n(159),n(1)),C=n(85),E=n(9),S=n(212),L=n(340),M=n(87),N=n(153),D=n(89),_=n(341),k=n(86),P=n(284),A=n(10),Y=n(184),I=n(3);function R(t){return Object(I.jsx)(Y.Scrollbars,{renderTrackHorizontal:function(t){return Object(I.jsx)("div",Object(y.a)(Object(y.a)({},t),{},{className:"track-horizontal"}))},renderThumbHorizontal:function(t){return Object(I.jsx)("div",Object(y.a)(Object(y.a)({},t),{},{className:"thumb-horizontal"}))},renderView:function(t){return Object(I.jsx)("div",Object(y.a)(Object(y.a)({},t),{},{className:"view"}))},autoHide:!0,style:t.style,children:t.children})}var H=function(t){Object(v.a)(n,t);var e=Object(j.a)(n);function n(t){var o;return Object(b.a)(this,n),(o=e.call(this,t)).fetchMore=function(){var t=o.state,e=t.searched,n=t.tabPanel,r=t.page;o.setState({page:r+1});var i={page:r+1,search:e||null,category:"all"!==n?n:[]};o.props.getMoreCollections(i)},o.clearPreviousCollections=function(){o.props.clearCollections(),o.props.clearMoreCollections(),o.props.clearPagination()},o.onSearchKeyUp=function(t){"Enter"!==t.key&&13!==t.keyCode||(o.clearPreviousCollections(),o.setState({page:1}),o.props.getCollections({search:t.target.value}))},o.onCategoryChange=function(t){o.clearPreviousCollections(),"all"===t?o.props.getCollections():o.props.getCollections({category:[t]}),o.setState({tabPanel:t,page:1})},o.toggle=function(t){var e="isOpen"+t;o.setState((function(t){return Object(m.a)({},e,!t[e])}))},o.state={isOpen1:!1,tabPanel:"all",searched:!1,page:1,collections:[]},o}return Object(x.a)(n,[{key:"componentDidMount",value:function(){var t=Object(g.a)(O.a.mark((function t(){var e,n,o;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:window.scrollTo(0,0),e=this.props,n=e.categories,(o=e.collections)?this.setState({collections:o}):this.props.getCollections(),n||this.props.getCategories();case 4:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(){var t=Object(g.a)(O.a.mark((function t(e,n){var o,r,i;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:o=this.props,r=o.collections,(i=o.moreCollections)!==e.moreCollections&&this.setState({collections:this.state.collections.concat(i)}),r!==e.collections&&this.setState({collections:r});case 3:case"end":return t.stop()}}),t,this)})));return function(e,n){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=this,e=this.props,n=e.pagination,o=e.categories,r=this.state,i=r.tabPanel,a=(r.page,r.collections),l=this.context;return Object(I.jsx)(M.a.MainSection,{children:Object(I.jsxs)(M.a.Container,{children:[Object(I.jsxs)(U,{children:[Object(I.jsx)(K,{children:Object(I.jsxs)(R,{autoHide:!0,autoHideTimeout:1e3,style:{width:"100%",height:"70px",position:"relative"},children:[Object(I.jsx)("button",{className:"all"===i?"active":"",id:"all",onClick:function(){t.onCategoryChange("all")},children:Object(I.jsx)(S.a,{id:"all",defaultMessage:"All"})}),o?o.map((function(e,n){return Object(I.jsx)("button",{id:e.id,className:i===e.id?"active":"",onClick:function(){t.onCategoryChange(e.id)},children:"tr"===l.locale?e.categoryName.tu:e.categoryName.en},n)})):""]})}),Object(I.jsx)(V,{children:Object(I.jsxs)(J,{children:[Object(I.jsx)(S.a,{id:"search",defaultMessage:"Search",children:function(e){return Object(I.jsx)("input",{placeholder:e,onKeyUp:function(e){return t.onSearchKeyUp(e)}})}}),Object(I.jsx)(W,{children:Object(I.jsx)("img",{src:P.a,alt:""})})]})})]}),Object(I.jsx)($,{children:a?0===a.length?Object(I.jsx)(B,{children:Object(I.jsx)(S.a,{id:"coll_empty",defaultMessage:"No Collections Found"})}):Object(I.jsx)(L.a,{dataLength:a.length,next:this.fetchMore,hasMore:n.pageNo<n.totalPages,loader:Object(I.jsxs)(z,{children:[" ",Object(I.jsx)("img",{src:k.a,alt:""})," "]}),children:Object(I.jsx)(q,{children:a.map((function(t,e){var n;return Object(I.jsx)(_.a,{id:t.id,collImg:t.logo,collName:t.name,creatorName:null===(n=t.ownerId)||void 0===n?void 0:n.username},e)}))})}):Object(I.jsxs)(z,{children:[" "," "," ",Object(I.jsx)("img",{src:k.a,alt:""})," "," "]})})]})})}}]),n}(T.Component);H.contextType=D.a;var F=E.c.div(o||(o=Object(f.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-wrap: wrap;\n"]))),z=Object(E.c)(F)(r||(r=Object(f.a)(["\n  width: 100%;\n  margin: 50px auto;\n"]))),B=Object(E.c)(F)(i||(i=Object(f.a)(["\n  width: 100%;\n  text-align:center;\n  font-size:16px;\n  color:#000;\n  margin:100px 0px;\n"]))),U=Object(E.c)(F)(a||(a=Object(f.a)(["\n  width: 100%;\n  justify-content: space-between;\n  max-width: 1080px;\n  margin: 50px auto 0 auto;\n  ","{\n    max-width:100%;\n  }\n  ","{\n    margin:40px auto 0 auto;\n  }\n"])),A.default.lg,A.default.md),K=Object(E.c)(F)(l||(l=Object(f.a)(["\n  width: 75%;\n  justify-content: flex-start;\n  .view{\n    display:flex;\n    align-items:center;\n    padding-right:20px;\n  }\n  button {\n    display: inline-block;\n    padding: 10px 25px;\n    font-size: 14px;\n    font-weight: 600;\n    color: #000000;\n    border-radius: 15px;\n    background-color: #eef2f7;\n    margin:0px 6px 0px 0px;\n    &.active {\n      background-color: #00babc;\n      color: #fff;\n    }\n    :hover {\n      background-color: #00babc;\n      color: #fff;\n      box-shadow: 0 10px 10px 0 rgba(0, 0, 0, 0.2);\n    }\n    :last-child\n    {\n      margin:0px;\n    }\n    ","{\n      padding: 10px 19px;\n    }\n  }\n  ","{\n    width:70%;\n  }\n  ","{\n    width:100%;\n  }\n"])),A.default.sm,A.default.lg,A.default.md),V=Object(E.c)(F)(s||(s=Object(f.a)(["\n  width: 25%;\n  justify-content: flex-end;\n  ","{\n    width:30%;\n  }\n  ","{\n    width:100%;\n    justify-content: flex-start;\n    margin-top:15px;\n  }\n"])),A.default.lg,A.default.md),J=Object(E.c)(F)(c||(c=Object(f.a)(["\n  width: 100%;\n  max-width: 220px;\n  position: relative;\n  margin-right: 9px;\n\n  input {\n    background-color: #eef2f7;\n    font-size: 14px;\n    border-radius: 15px;\n    border: 1px solid transparent;\n    outline: none;\n    height: 38px;\n    width: 100%;\n    padding: 3px 3px 3px 40px;\n    :focus {\n      background-color: #fff;\n      border: 1px solid #00babc;\n      box-shadow: 0 10px 10px 0 rgba(0, 0, 0, 0.2);\n    }\n  }\n  ","{\n    max-width:100%;\n    margin-right:0px;\n  }\n"])),A.default.md),W=Object(E.c)(F)(p||(p=Object(f.a)(["\n  width: 21px;\n  height: 21px;\n  position: absolute;\n  left: 11px;\n  top: 9px;\n"]))),$=E.c.div(u||(u=Object(f.a)(["\n  margin:20px -10px 120px;\n  ","{\n    margin:40px -10px 60px;\n  }\n"])),A.default.md),q=Object(E.c)(F)(h||(h=Object(f.a)(["\n  justify-content:flex-start;\n"])));E.c.div(d||(d=Object(f.a)(["\n  width:calc(25% - 20px);\n  margin:0px 10px 20px 10px;\n  position:relative;\n  .CIbox\n  {\n    width: 100%;\n    height: 255px;\n    border-radius: 10px;\n    overflow: hidden;\n    img {\n      width: 100%;\n      height: 100%;\n      object-fit: cover;\n    }\n  }\n  .collbox-desc\n  {\n    position:absolute;\n    top:0px;\n    left:0px;\n    width:100%;\n    height:100%;\n    background-color:rgb(0 0 0 / 70%);\n    border-radius:10px;\n    padding:20px 10px 0px 20px;\n    opacity:0;\n    :hover\n    {\n      opacity:1;\n    }\n    .coll-title\n    {\n      font-size:20px;\n      color:#fff;\n      letter-spacing:-0.75px;\n      font-weight:700;\n      margin:0px 0px 2px;\n      text-transform:capitalize;\n    }\n    .creator-name\n    {\n      font-size:16px;\n      color:rgb(255 255 255 / 50%);\n      letter-spacing:-0.8px;\n      font-weight:600;\n      margin:0px;\n    }\n  }\n"])));e.default=Object(C.b)((function(t){return{collections:t.fetchCollections,categories:t.fetchCategory,pagination:t.fetchPagination,moreCollections:t.fetchMoreCollections}}),(function(t){return{getCollections:function(e){return t(N.a.getCollections(e))},getCategories:function(){return t(N.a.fetchCategories())},getMoreCollections:function(e){return t(N.a.getMoreCollections(e))},clearPagination:function(){return t({type:"FETCHED_PAGINATION",data:[]})},clearMoreCollections:function(){return t({type:"FETCHED_MORE_COLLECTIONS",data:[]})},clearCollections:function(){return t({type:"FETCHED_COLLECTIONS",data:[]})}}}))(H)}}]);
//# sourceMappingURL=27.a030ca5c.chunk.js.map