(this.webpackJsonpfibit=this.webpackJsonpfibit||[]).push([[6],{189:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.forceVisible=t.forceCheck=t.lazyload=void 0;var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),o=n(1),r=u(o),s=u(n(32)),a=n(270),c=u(n(271)),l=u(n(272)),d=u(n(273));function u(e){return e&&e.__esModule?e:{default:e}}function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function h(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var b=0,m=0,v=0,j=0,x="data-lazyload-listened",g=[],y=[],O=!1;try{var w=Object.defineProperty({},"passive",{get:function(){O=!0}});window.addEventListener("test",null,w)}catch(C){}var E=!!O&&{capture:!1,passive:!0},T=function(e){var t=e.ref;if(t instanceof HTMLElement){var n=(0,c.default)(t),i=e.props.overflow&&n!==t.ownerDocument&&n!==document&&n!==document.documentElement?function(e,t){var n=e.ref,i=void 0,o=void 0,r=void 0,s=void 0;try{var a=t.getBoundingClientRect();i=a.top,o=a.left,r=a.height,s=a.width}catch(C){i=b,o=m,r=j,s=v}var c=window.innerHeight||document.documentElement.clientHeight,l=window.innerWidth||document.documentElement.clientWidth,d=Math.max(i,0),u=Math.max(o,0),f=Math.min(c,i+r)-d,p=Math.min(l,o+s)-u,h=void 0,x=void 0,g=void 0,y=void 0;try{var O=n.getBoundingClientRect();h=O.top,x=O.left,g=O.height,y=O.width}catch(C){h=b,x=m,g=j,y=v}var w=h-d,E=x-u,T=Array.isArray(e.props.offset)?e.props.offset:[e.props.offset,e.props.offset];return w-T[0]<=f&&w+g+T[1]>=0&&E-T[0]<=p&&E+y+T[1]>=0}(e,n):function(e){var t=e.ref;if(!(t.offsetWidth||t.offsetHeight||t.getClientRects().length))return!1;var n=void 0,i=void 0;try{var o=t.getBoundingClientRect();n=o.top,i=o.height}catch(C){n=b,i=j}var r=window.innerHeight||document.documentElement.clientHeight,s=Array.isArray(e.props.offset)?e.props.offset:[e.props.offset,e.props.offset];return n-s[0]<=r&&n+i+s[1]>=0}(e);i?e.visible||(e.props.once&&y.push(e),e.visible=!0,e.forceUpdate()):e.props.once&&e.visible||(e.visible=!1,e.props.unmountIfInvisible&&e.forceUpdate())}},_=function(){y.forEach((function(e){var t=g.indexOf(e);-1!==t&&g.splice(t,1)})),y=[]},N=function(){for(var e=0;e<g.length;++e){var t=g[e];T(t)}_()},M=void 0,k=null,L=function(e){function t(e){f(this,t);var n=p(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.visible=!1,n.setRef=n.setRef.bind(n),n}return h(t,e),i(t,[{key:"componentDidMount",value:function(){var e=window,t=this.props.scrollContainer;t&&"string"===typeof t&&(e=e.document.querySelector(t));var n=void 0!==this.props.debounce&&"throttle"===M||"debounce"===M&&void 0===this.props.debounce;if(n&&((0,a.off)(e,"scroll",k,E),(0,a.off)(window,"resize",k,E),k=null),k||(void 0!==this.props.debounce?(k=(0,l.default)(N,"number"===typeof this.props.debounce?this.props.debounce:300),M="debounce"):void 0!==this.props.throttle?(k=(0,d.default)(N,"number"===typeof this.props.throttle?this.props.throttle:300),M="throttle"):k=N),this.props.overflow){var i=(0,c.default)(this.ref);if(i&&"function"===typeof i.getAttribute){var o=+i.getAttribute(x)+1;1===o&&i.addEventListener("scroll",k,E),i.setAttribute(x,o)}}else if(0===g.length||n){var r=this.props,s=r.scroll,u=r.resize;s&&(0,a.on)(e,"scroll",k,E),u&&(0,a.on)(window,"resize",k,E)}g.push(this),T(this)}},{key:"shouldComponentUpdate",value:function(){return this.visible}},{key:"componentWillUnmount",value:function(){if(this.props.overflow){var e=(0,c.default)(this.ref);if(e&&"function"===typeof e.getAttribute){var t=+e.getAttribute(x)-1;0===t?(e.removeEventListener("scroll",k,E),e.removeAttribute(x)):e.setAttribute(x,t)}}var n=g.indexOf(this);-1!==n&&g.splice(n,1),0===g.length&&"undefined"!==typeof window&&((0,a.off)(window,"resize",k,E),(0,a.off)(window,"scroll",k,E))}},{key:"setRef",value:function(e){e&&(this.ref=e)}},{key:"render",value:function(){var e=this.props,t=e.height,n=e.children,i=e.placeholder,o=e.className,s=e.classNamePrefix,a=e.style;return r.default.createElement("div",{className:s+"-wrapper "+o,ref:this.setRef,style:a},this.visible?n:i||r.default.createElement("div",{style:{height:t},className:s+"-placeholder"}))}}]),t}(o.Component);L.propTypes={className:s.default.string,classNamePrefix:s.default.string,once:s.default.bool,height:s.default.oneOfType([s.default.number,s.default.string]),offset:s.default.oneOfType([s.default.number,s.default.arrayOf(s.default.number)]),overflow:s.default.bool,resize:s.default.bool,scroll:s.default.bool,children:s.default.node,throttle:s.default.oneOfType([s.default.number,s.default.bool]),debounce:s.default.oneOfType([s.default.number,s.default.bool]),placeholder:s.default.node,scrollContainer:s.default.oneOfType([s.default.string,s.default.object]),unmountIfInvisible:s.default.bool,style:s.default.object},L.defaultProps={className:"",classNamePrefix:"lazyload",once:!1,offset:0,overflow:!1,resize:!1,scroll:!0,unmountIfInvisible:!1};var z=function(e){return e.displayName||e.name||"Component"};t.lazyload=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(t){return function(n){function o(){f(this,o);var e=p(this,(o.__proto__||Object.getPrototypeOf(o)).call(this));return e.displayName="LazyLoad"+z(t),e}return h(o,n),i(o,[{key:"render",value:function(){return r.default.createElement(L,e,r.default.createElement(t,this.props))}}]),o}(o.Component)}},t.default=L,t.forceCheck=N,t.forceVisible=function(){for(var e=0;e<g.length;++e){var t=g[e];t.visible=!0,t.forceUpdate()}_()}},193:function(e,t,n){"use strict";n.r(t);var i,o,r,s,a,c=n(15),l=n(39),d=n(1),u=n(9),f=n(227),p=n(167),h=n(1387),b=n(189),m=n.n(b),v=n(172),j=n(210),x=n(87),g=n(200),y=n(168),O=n(293),w=(n(275),n(3)),E=u.c.div(i||(i=Object(c.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-wrap: wrap;\n  .JCSB {\n    justify-content: space-between;\n  }\n"]))),T=Object(u.c)(E)(o||(o=Object(c.a)(["\n  justify-content: space-between;\n  background-color: #eef2f7;\n  border-radius: 10px;\n  padding: 10px 15px;\n  margin: 0px 0px 20px;\n  .ed-box {\n    p {\n      color: #8e9194;\n      font-size: 10px;\n      letter-spacing: -0.6px;\n      font-weight: 600;\n      margin: 0px 0px 5px;\n    }\n    h3 {\n      color: #000;\n      font-size: 16px;\n      letter-spacing: -0.89px;\n      font-weight: 700;\n      margin: 0px;\n      span {\n        font-size: 10px;\n        font-weight: 300;\n        letter-spacing: -0.44px;\n      }\n    }\n  }\n"]))),_=Object(u.c)(E)(r||(r=Object(c.a)(["\n  width: 100%;\n  height: 253px;\n  border-radius: 10px 10px 0 0;\n  overflow: hidden;\n  position: relative;\n  .react-thumbnail-generator {\n    width: 100%;\n    height: 253px;\n    canvas {\n      width: 100%;\n      height: -webkit-fill-available;\n      object-fit: cover;\n    }\n  }\n  .lazyload-wrapper {\n    width: 100%;\n    height: 100%;\n  }\n  img {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n  }\n  .video-icon {\n    position: absolute;\n    top: 0px;\n    left: 0px;\n    width: 100%;\n    height: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    span {\n      background: #fff;\n      box-shadow: 0px 0px 5px 6px rgb(0 0 0 / 10%);\n      width: 44px;\n      height: 44px;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      border-radius: 50%;\n      svg {\n        color: #999;\n        padding-left: 2px;\n      }\n    }\n  }\n"]))),N=Object(u.c)(E)(s||(s=Object(c.a)(["\n  justify-content: flex-start;\n  color: #000;\n  font-size: 14px;\n  letter-spacing: -0.7px;\n  font-weight: 600;\n  margin: 0px;\n  img {\n    border-radius: 50%;\n    margin-right: 10px;\n    width: 32px;\n    height: 32px;\n  }\n"]))),M=Object(u.c)(E)(a||(a=Object(c.a)(["\n  justify-content: space-between;\n  margin-bottom: 20px;\n  p {\n    font-size: 14px;\n    letter-spacing: -0.62px;\n    font-weight: 600;\n    margin: 0px;\n    color: #000;\n    span {\n      font-size: 12px;\n      letter-spacing: -0.53px;\n      font-weight: 300;\n    }\n    a {\n      font-size: 10px;\n      letter-spacing: -0.5px;\n      font-weight: 600;\n      color: #000;\n      :hover {\n        color: #555;\n        text-decoration: underline;\n      }\n    }\n  }\n"])));t.default=function(e){var t=e.edit,n=void 0!==t&&t,i=e.nftSold,o=e.name,r=e.nftId,s=e.collectionId,a=e.auctionEndDate,c=e.nftImg,u=e.title,b=e.edition,E=e.price,k=(e.auctionTime,e.userImg),L=e.username,z=e.format,C=e.previewCard,D=Object(d.useState)(z),P=Object(l.a)(D,2),S=P[0],H=P[1];return Object(d.useEffect)((function(){z||Object(y.f)(c).then((function(e){H(e)}))}),[]),Object(w.jsx)(x.a.W25V2,{children:Object(w.jsx)(x.a.TenpxGutter,{children:Object(w.jsx)(p.a,{to:n?"/user/nftEdit/".concat(r):"/nftDetails/".concat(r),children:Object(w.jsxs)("div",{className:"NFT-home-box",children:[Object(w.jsxs)(_,{children:[S&&"image"===S&&Object(w.jsx)(m.a,{children:Object(w.jsx)(h.a.img,{initial:{opacity:.2},animate:{opacity:1},transition:{delay:.4},src:c,exit:{opacity:0}},c)}),S&&"audio"===S&&Object(w.jsx)(m.a,{children:Object(w.jsx)(h.a.img,{initial:{opacity:.2},animate:{opacity:1},transition:{delay:.4},src:j.a,exit:{opacity:0}},j.a)}),S&&"video"===S&&Object(w.jsxs)(m.a,{children:[Object(w.jsx)(h.a.img,{initial:{opacity:.2},animate:{opacity:1},transition:{delay:.4},src:c,exit:{opacity:0}},c),Object(w.jsx)("div",{className:"video-icon",children:Object(w.jsx)("span",{children:Object(w.jsx)(O.b,{})})})]})]}),Object(w.jsxs)("div",{className:"NFT-home-box-inner",children:[Object(w.jsx)("h4",{children:u||"Artwork name / title dolor lorem ipsum sit adipiscing"}),Object(w.jsxs)(M,{children:[Object(w.jsxs)("p",{children:[b||0," ",Object(w.jsx)(f.a,{id:"editions",defaultMessage:"Editions"})]}),s?Object(w.jsx)("p",{children:Object(w.jsxs)(p.a,{to:"/collection-detail/".concat(s),children:[Object(w.jsx)(f.a,{id:"see_the_collections",defaultMessage:"See the collection"}),Object(w.jsx)("i",{className:"fas fa-angle-right"})]})}):""]}),Object(w.jsxs)(T,{className:"edition2 JCSB",children:[Object(w.jsxs)("div",{className:"ed-box",children:[Object(w.jsx)("p",{children:a&&a>(new Date).getTime()/1e3?Object(w.jsx)(f.a,{id:"current_bid",defaultMessage:"Current bid"}):Object(w.jsx)(f.a,{id:"price",defaultMessage:"Price"})}),Object(w.jsxs)("h3",{children:[parseFloat(+E.toFixed(5))," FBT "]})]}),Object(w.jsx)("div",{className:"ed-box",children:C?a?Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)("p",{children:Object(w.jsx)(f.a,{id:"ending_in",defaultMessage:"Ending in"})})," ",Object(w.jsxs)("h3",{children:[a,"h 00m 00s"]})]}):Object(w.jsx)("button",{children:Object(w.jsx)(f.a,{id:"buy_now",defaultMessage:"Buy now"})}):a&&a>(new Date).getTime()/1e3?Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)("p",{children:Object(w.jsx)(f.a,{id:"ending_in",defaultMessage:"Ending in"})}),Object(w.jsx)("h3",{children:Object(w.jsx)(g.a,{timeLeft:a,onlyHours:!0})})]}):i===b?Object(w.jsx)("button",{className:"disabled",disabled:!0,children:Object(w.jsx)(f.a,{id:"sold",defaultMessage:"Sold"})}):Object(w.jsx)("button",{children:Object(w.jsx)(f.a,{id:"buy_now",defaultMessage:"Buy now"})})})]}),Object(w.jsxs)(N,{children:[Object(w.jsx)("img",{src:k||v.a,alt:""}),L?"@".concat(L):o]})]})]})})})})}},200:function(e,t,n){"use strict";var i=n(145),o=n(146),r=n(65),s=n(147),a=n(150),c=n(1),l=n.n(c),d=n(3),u=function(e){Object(s.a)(n,e);var t=Object(a.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).state={time:{},timeLeft:0,onlyHours:!1},e.timer=0,e.startTimer=e.startTimer.bind(Object(r.a)(e)),e.countDown=e.countDown.bind(Object(r.a)(e)),e}return Object(o.a)(n,[{key:"secondsToTime",value:function(e,t){var n=e-(new Date).getTime()/1e3,i=Math.floor(n/86400),o=Math.floor((n-86400*i)/3600);t&&(o=Math.floor((n-86400*i)/3600)+24*i);var r=n%3600,s=Math.floor(r/60),a=r%60,c=Math.ceil(a);return{d:i>=10?i:"0".concat(i),h:o>=10?o:"0".concat(o),m:s>=10?s:"0".concat(s),s:c>=10?c:"0".concat(c)}}},{key:"componentDidUpdate",value:function(e,t){var n=this;if(this.props.timeLeft!==e.timeLeft){var i=this.props.timeLeft,o=this.props.onlyHours;this.setState({timeLeft:i,onlyHours:o});var r=this.secondsToTime(i,o);this.setState({time:r},(function(){n.startTimer()}))}}},{key:"componentDidMount",value:function(){var e=this,t=this.props.timeLeft,n=this.props.onlyHours;this.setState({timeLeft:t,onlyHours:n});var i=this.secondsToTime(t,n);this.setState({time:i},(function(){e.startTimer()}))}},{key:"componentWillUnmount",value:function(){clearInterval(this.timer),this.setState({time:{},timeLeft:0})}},{key:"startTimer",value:function(){0===this.timer&&this.state.timeLeft>0&&(this.timer=setInterval(this.countDown,1e3))}},{key:"countDown",value:function(){var e=this.state.timeLeft;this.setState({time:this.secondsToTime(e,this.state.onlyHours),timeLeft:e}),0===e&&clearInterval(this.timer)}},{key:"render",value:function(){return this.props.isDetailed?Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("div",{className:"time-block",children:[Object(d.jsx)("h3",{children:this.state.time.h}),Object(d.jsx)("p",{className:"gray-t",children:"hours"})]}),Object(d.jsxs)("div",{className:"time-block",children:[Object(d.jsx)("h3",{children:this.state.time.m}),Object(d.jsx)("p",{className:"gray-t",children:"minutes"})]}),Object(d.jsxs)("div",{className:"time-block",children:[Object(d.jsx)("h3",{children:this.state.time.s}),Object(d.jsx)("p",{className:"gray-t",children:"seconds"})]})]}):Object(d.jsxs)(d.Fragment,{children:[this.state.time.h,"h ",this.state.time.m,"m ",this.state.time.s,"s"]})}}]),n}(l.a.Component);t.a=u},210:function(e,t,n){"use strict";t.a=n.p+"static/media/audio-square.105d17d2.jpg"},270:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.on=function(e,t,n,i){i=i||!1,e.addEventListener?e.addEventListener(t,n,i):e.attachEvent&&e.attachEvent("on"+t,(function(t){n.call(e,t||window.event)}))},t.off=function(e,t,n,i){i=i||!1,e.removeEventListener?e.removeEventListener(t,n,i):e.detachEvent&&e.detachEvent("on"+t,n)}},271:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){if(!(e instanceof HTMLElement))return document.documentElement;for(var t="absolute"===e.style.position,n=/(scroll|auto)/,i=e;i;){if(!i.parentNode)return e.ownerDocument||document.documentElement;var o=window.getComputedStyle(i),r=o.position,s=o.overflow,a=o["overflow-x"],c=o["overflow-y"];if("static"===r&&t)i=i.parentNode;else{if(n.test(s)&&n.test(a)&&n.test(c))return i;i=i.parentNode}}return e.ownerDocument||e.documentElement||document.documentElement}},272:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n){var i=void 0,o=void 0,r=void 0,s=void 0,a=void 0,c=function c(){var l=+new Date-s;l<t&&l>=0?i=setTimeout(c,t-l):(i=null,n||(a=e.apply(r,o),i||(r=null,o=null)))};return function(){r=this,o=arguments,s=+new Date;var l=n&&!i;return i||(i=setTimeout(c,t)),l&&(a=e.apply(r,o),r=null,o=null),a}}},273:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n){var i,o;return t||(t=250),function(){var r=n||this,s=+new Date,a=arguments;i&&s<i+t?(clearTimeout(o),o=setTimeout((function(){i=s,e.apply(r,a)}),t)):(i=s,e.apply(r,a))}}}}]);
//# sourceMappingURL=6.80de0f86.chunk.js.map