(this.webpackJsonpfibit=this.webpackJsonpfibit||[]).push([[40],{158:function(e,t,n){},159:function(e,t,n){},179:function(e,t,n){e.exports=function(e){"use strict";var t="default"in e?e.default:e;function n(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],i=!0,r=!1,o=void 0;try{for(var c,a=e[Symbol.iterator]();!(i=(c=a.next()).done)&&(n.push(c.value),!t||n.length!==t);i=!0);}catch(e){r=!0,o=e}finally{try{i||null==a.return||a.return()}finally{if(r)throw o}}return n}}(e,t)||function(e,t){if(e){if("string"==typeof e)return s(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?s(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}function l(e){requestAnimationFrame((function(){requestAnimationFrame(e)}))}return function(n){var r=n.children,s=n.transition,d=n.style,p=n.render,j=n.elementType,x=void 0===j?"div":j,u=n.isOpen,h=n.collapseHeight,b=void 0===h?"0px":h,f=n.onInit,O=n.onChange,g=n.className,m=void 0===g?"collapse-css-transition":g,y=n.addState,v=n.noAnim,_=n.overflowOnExpanded,w=c(n,["children","transition","style","render","elementType","isOpen","collapseHeight","onInit","onChange","className","addState","noAnim","overflowOnExpanded"]),S=function(){return"0px"===b?"hidden":""},M=a(e.useReducer((function(e){return e+1}),0),2),A=(M[0],M[1]),C=e.useRef(),k=a(e.useState(0),2),E=k[0],N=k[1],P=e.useRef({collapse:u?"expanded":"collapsed",style:{height:u?"":b,visibility:u?"":S()}}).current;e.useEffect((function(){E&&D(O)}),[E]);var D=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e&&(e.name,e(o({state:P.collapse,style:P.style},t)))};function T(){C.current&&(P.collapse="collapsed",P.style={height:b,visibility:S()},A(),setTimeout((function(){return N(Date.now)}),0))}function F(){C.current&&(P.collapse="expanded",P.style={height:"",visibility:""},A(),setTimeout((function(){return N(Date.now)}),0))}function z(){return"".concat(C.current.scrollHeight,"px")}var I="expanded"===P.collapse||"expanding"===P.collapse;!I&&u&&function(){if(C.current){if(v)return F();P.collapse="expanding",l((function(){C.current&&"expanding"===P.collapse&&(P.style={height:z(),visibility:""},N(Date.now))}))}}(),I&&!u&&function(){if(C.current){if(v)return T();P.collapse="collapsing",P.style={height:z(),visibility:""},A(),l((function(){C.current&&"collapsing"===P.collapse&&(P.style={height:b,visibility:""},N(Date.now))}))}}();var q=o({overflow:"expanded"===P.collapse&&_?"":"hidden",transition:s},d,{},P.style),H=x,R=e.useCallback((function(e){e&&(C.current=e,D(f,{node:e}))}),[x]),B=y?"".concat(m," --c-").concat(P.collapse):m;return t.createElement(H,i({ref:R,style:q,onTransitionEnd:function(e){var t=e.target,n=e.propertyName;if(t===C.current&&"height"===n){var i=t.style.height;switch(P.collapse,P.collapse){case"expanding":""===i||i===b||F();break;case"collapsing":""===i||i!==b||T()}}},className:B},w),"function"==typeof r?r(P.collapse):"function"==typeof p?p(P.collapse):r)}}(n(1))},233:function(e,t,n){"use strict";var i=n(0),r=n(1),o=n(90),c=n(28);function a(e){var t=function(){var e=r.useContext(o.a);return Object(c.c)(e),e}(),n=t.formatMessage,i=t.textComponent,a=void 0===i?r.Fragment:i,s=e.id,l=e.description,d=e.defaultMessage,p=e.values,j=e.children,x=e.tagName,u=void 0===x?a:x,h=n({id:s,description:l,defaultMessage:d},p,{ignoreTag:e.ignoreTag});return"function"===typeof j?j(Array.isArray(h)?h:[h]):u?r.createElement(u,null,r.Children.toArray(h)):r.createElement(r.Fragment,null,h)}a.displayName="FormattedMessage";var s=r.memo(a,(function(e,t){var n=e.values,r=Object(i.f)(e,["values"]),o=t.values,a=Object(i.f)(t,["values"]);return Object(c.d)(o,n)&&Object(c.d)(r,a)}));s.displayName="MemoizedFormattedMessage";t.a=s},722:function(e,t,n){"use strict";n.r(t);var i,r,o,c,a,s,l,d,p=n(15),j=n(88),x=n(145),u=n(146),h=n(148),b=n(151),f=(n(158),n(159),n(1)),O=n(8),g=n(9),m=n(87),y=n(55),v=(n(179),n(233)),_=n(10),w=(n.p,n.p,n(3)),S=function(e){Object(h.a)(n,e);var t=Object(b.a)(n);function n(e){var i;return Object(x.a)(this,n),(i=t.call(this,e)).toggle=function(e){var t="isOpen"+e;i.setState((function(e){return Object(j.a)({},t,!e[t])}))},i.state={isOpen1:!1,tabPanel:"all",searched:!1,filter:[],page:1},i}return Object(u.a)(n,[{key:"componentDidMount",value:function(){window.scrollTo(0,0)}},{key:"render",value:function(){var e=this;return Object(w.jsx)(m.a.MainSection,{children:Object(w.jsxs)(m.a.Container,{children:[Object(w.jsxs)(A,{children:[Object(w.jsxs)(k,{children:[Object(w.jsxs)(E,{children:[Object(w.jsx)("h3",{children:Object(w.jsx)(v.a,{id:"how_to_use_lable_01"})}),Object(w.jsx)("p",{children:Object(w.jsx)(v.a,{id:"how_to_use_text01_1"})}),Object(w.jsx)("p",{children:Object(w.jsx)(v.a,{id:"how_to_use_text01_2"})})]}),Object(w.jsx)(N,{children:Object(w.jsx)(y.b,{to:"/how-to-use",children:Object(w.jsx)("div",{className:"overlay",children:Object(w.jsx)("p",{children:Object(w.jsx)(v.a,{id:"comming_soon",defaultMessage:"Coming Soon"})})})})})]}),Object(w.jsxs)(k,{children:[Object(w.jsxs)(E,{children:[Object(w.jsx)("h3",{children:Object(w.jsx)(v.a,{id:"how_to_use_lable_02"})}),Object(w.jsx)("p",{children:Object(w.jsx)(v.a,{id:"how_to_use_text02_1"})}),Object(w.jsx)("p",{children:Object(w.jsx)(v.a,{id:"how_to_use_text02_2"})})]}),Object(w.jsx)(N,{children:Object(w.jsx)(y.b,{to:"/how-to-use",children:Object(w.jsx)("div",{className:"overlay",children:Object(w.jsx)("p",{children:Object(w.jsx)(v.a,{id:"comming_soon",defaultMessage:"Coming Soon"})})})})})]}),Object(w.jsxs)(k,{children:[Object(w.jsxs)(E,{children:[Object(w.jsx)("h3",{children:Object(w.jsx)(v.a,{id:"how_to_use_lable_03"})}),Object(w.jsx)("p",{children:Object(w.jsx)(v.a,{id:"how_to_use_text03_1"})}),Object(w.jsx)("p",{children:Object(w.jsx)(v.a,{id:"how_to_use_text03_2"})})]}),Object(w.jsx)(N,{children:Object(w.jsx)(y.b,{to:"/how-to-use",children:Object(w.jsx)("div",{className:"overlay",children:Object(w.jsx)("p",{children:Object(w.jsx)(v.a,{id:"comming_soon",defaultMessage:"Coming Soon"})})})})})]}),Object(w.jsxs)(k,{children:[Object(w.jsxs)(E,{children:[Object(w.jsx)("h3",{children:Object(w.jsx)(v.a,{id:"how_to_use_lable_04"})}),Object(w.jsx)("p",{children:Object(w.jsx)(v.a,{id:"how_to_use_text04_1"})}),Object(w.jsx)("p",{children:Object(w.jsx)(v.a,{id:"how_to_use_text04_2"})})]}),Object(w.jsx)(N,{children:Object(w.jsx)(y.b,{to:"/how-to-use",children:Object(w.jsx)("div",{className:"overlay",children:Object(w.jsx)("p",{children:Object(w.jsx)(v.a,{id:"comming_soon",defaultMessage:"Coming Soon"})})})})})]}),Object(w.jsxs)(k,{children:[Object(w.jsxs)(E,{children:[Object(w.jsx)("h3",{children:Object(w.jsx)(v.a,{id:"how_to_use_lable_05"})}),Object(w.jsx)("p",{children:Object(w.jsx)(v.a,{id:"how_to_use_text05_1"})}),Object(w.jsx)("p",{children:Object(w.jsx)(v.a,{id:"how_to_use_text05_2"})}),Object(w.jsx)("p",{children:Object(w.jsx)(v.a,{id:"how_to_use_text05_3"})})]}),Object(w.jsx)(N,{children:Object(w.jsx)(y.b,{to:"/how-to-use",children:Object(w.jsx)("div",{className:"overlay",children:Object(w.jsx)("p",{children:Object(w.jsx)(v.a,{id:"comming_soon",defaultMessage:"Coming Soon"})})})})})]}),Object(w.jsxs)(k,{children:[Object(w.jsxs)(E,{children:[Object(w.jsx)("h3",{children:Object(w.jsx)(v.a,{id:"how_to_use_lable_06"})}),Object(w.jsx)("p",{children:Object(w.jsx)(v.a,{id:"how_to_use_text06_1"})}),Object(w.jsx)("p",{children:Object(w.jsx)(v.a,{id:"how_to_use_text06_2"})})]}),Object(w.jsx)(N,{children:Object(w.jsx)(y.b,{to:"/how-to-use",children:Object(w.jsx)("div",{className:"overlay",children:Object(w.jsx)("p",{children:Object(w.jsx)(v.a,{id:"comming_soon",defaultMessage:"Coming Soon"})})})})})]})]}),Object(w.jsxs)(C,{children:[Object(w.jsx)("button",{onClick:function(){return e.props.history.push("/faq")},children:Object(w.jsx)(v.a,{id:"faq",defaultMessage:"FAQ"})}),Object(w.jsx)("a",{href:"mailto:admin@Fibit.io",children:Object(w.jsx)(v.a,{id:"support",defaultMessage:"Support"})})]})]})})}}]),n}(f.Component),M=g.c.div(i||(i=Object(p.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-wrap: wrap;\n"]))),A=(Object(g.c)(M)(r||(r=Object(p.a)(["\n  width: 100%;\n  margin: 50px auto;\n"]))),g.c.div(o||(o=Object(p.a)(["\n  margin-top: 60px;\n"])))),C=(Object(g.c)(M)(c||(c=Object(p.a)(["\n  margin: 60px 0px 30px;\n  justify-content: flex-start;\n  button {\n    padding: 10px 60px;\n    background-color: #eef2f7;\n    border-radius: 15px;\n    margin: 0px 10px 10px 0px;\n    font-size: 14px;\n    line-height: 22px;\n    color: #000;\n    letter-spacing: -0.2px;\n    font-weight: 500;\n    :hover,\n    &.active {\n      background-color: #00DBAE;\n      color: #fff;\n    }\n    "," {\n      padding: 10px 40px;\n      margin: 0px 5px 5px 0px;\n      width: calc(50% - 5px);\n    }\n    "," {\n      padding: 10px 30px;\n      margin: 0px 5px 5px 0px;\n    }\n  }\n"])),_.default.sm,_.default.xs),g.c.div(a||(a=Object(p.a)(["\n  margin: 50px 0px 120px;\n  justify-content: flex-start;\n  button,\n  a {\n    display: block;\n    width: 190px;\n    height: 44px;\n    background-color: transparent;\n    border: 1px solid #000;\n    border-radius: 15px;\n    margin: 0px 0px 10px 0px;\n    font-size: 14px;\n    line-height: 42px;\n    color: #000;\n    letter-spacing: -0.5px;\n    font-weight: 500;\n    text-align: center;\n    :hover {\n      background-color: #00DBAE;\n      border:none;\n      color: #fff;\n    }\n    "," {\n      margin: 0px auto 10px;\n    }\n  }\n  "," {\n    justify-content: center;\n    margin: 0px 0px 100px;\n  }\n"])),_.default.sm,_.default.sm)),k=Object(g.c)(M)(s||(s=Object(p.a)(["\n  margin-bottom: 30px;\n"]))),E=g.c.div(l||(l=Object(p.a)(["\n  max-width: 785px;\n  width: 100%;\n  h3 {\n    font-size: 24px;\n    letter-spacing: -1.07px;\n    font-weight: bold;\n    color: #000;\n    margin: 0px 0px 20px;\n    line-height: normal;\n  }\n  p {\n    font-size: 16px;\n    line-height: 24px;\n    letter-spacing: -0.8px;\n    color: #000;\n    margin: 0px 0px 30px;\n    :last-child {\n      margin: 0px;\n    }\n  }\n  "," {\n    max-width: 680px;\n  }\n  "," {\n    max-width: 70%;\n  }\n  "," {\n    max-width: 100%;\n  }\n"])),_.default.lg,_.default.md,_.default.sm),N=g.c.div(d||(d=Object(p.a)(["\n  max-width: 255px;\n  max-height: 255px;\n  width: 100%;\n  margin: 0 auto;\n  position: relative;\n  border-radius: 10px;\n  overflow: hidden;\n  "," {\n    max-width: 220px;\n    max-height: 220px;\n  }\n  "," {\n    max-width: 25%;\n    max-height: 100%;\n    height: 190px;\n    margin: 0px 0px 0px auto;\n  }\n  "," {\n    max-width: 255px;\n    max-height: 255px;\n    height: auto;\n    margin: 30px auto;\n  }\n  img {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n  }\n  .overlay {\n    background-color: rgb(0 0 0 / 30%);\n    border-radius: 10px;\n    position: absolute;\n    top: 0px;\n    left: 0px;\n    height: 100%;\n    width: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    p {\n      font-size: 20px;\n      letter-spacing: -0.75px;\n      font-weight: bold;\n      color: #fff;\n      text-shadow: 0px 2px 5px rgb(0 0 0 / 30%);\n      margin: 0px;\n      position: absolute;\n      top: 20px;\n      left: 20px;\n    }\n  }\n"])),_.default.lg,_.default.md,_.default.sm);t.default=Object(O.h)(S)}}]);
//# sourceMappingURL=40.0c54b2ec.chunk.js.map