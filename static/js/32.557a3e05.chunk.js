(this.webpackJsonpfibit=this.webpackJsonpfibit||[]).push([[32],{158:function(e,t,n){},159:function(e,t,n){},179:function(e,t,n){e.exports=function(e){"use strict";var t="default"in e?e.default:e;function n(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?c(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):c(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function r(e,t){if(null==e)return{};var n,i,c=function(e,t){if(null==e)return{};var n,i,c={},s=Object.keys(e);for(i=0;i<s.length;i++)n=s[i],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)n=s[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],i=!0,c=!1,s=void 0;try{for(var r,a=e[Symbol.iterator]();!(i=(r=a.next()).done)&&(n.push(r.value),!t||n.length!==t);i=!0);}catch(e){c=!0,s=e}finally{try{i||null==a.return||a.return()}finally{if(c)throw s}}return n}}(e,t)||function(e,t){if(e){if("string"==typeof e)return l(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?l(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}function o(e){requestAnimationFrame((function(){requestAnimationFrame(e)}))}return function(n){var c=n.children,l=n.transition,d=n.style,j=n.render,b=n.elementType,x=void 0===b?"div":b,h=n.isOpen,u=n.collapseHeight,p=void 0===u?"0px":u,m=n.onInit,O=n.onChange,f=n.className,g=void 0===f?"collapse-css-transition":f,v=n.addState,N=n.noAnim,y=n.overflowOnExpanded,w=r(n,["children","transition","style","render","elementType","isOpen","collapseHeight","onInit","onChange","className","addState","noAnim","overflowOnExpanded"]),T=function(){return"0px"===p?"hidden":""},F=a(e.useReducer((function(e){return e+1}),0),2),P=(F[0],F[1]),C=e.useRef(),k=a(e.useState(0),2),S=k[0],V=k[1],G=e.useRef({collapse:h?"expanded":"collapsed",style:{height:h?"":p,visibility:h?"":T()}}).current;e.useEffect((function(){S&&L(O)}),[S]);var L=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e&&(e.name,e(s({state:G.collapse,style:G.style},t)))};function W(){C.current&&(G.collapse="collapsed",G.style={height:p,visibility:T()},P(),setTimeout((function(){return V(Date.now)}),0))}function A(){C.current&&(G.collapse="expanded",G.style={height:"",visibility:""},P(),setTimeout((function(){return V(Date.now)}),0))}function E(){return"".concat(C.current.scrollHeight,"px")}var D="expanded"===G.collapse||"expanding"===G.collapse;!D&&h&&function(){if(C.current){if(N)return A();G.collapse="expanding",o((function(){C.current&&"expanding"===G.collapse&&(G.style={height:E(),visibility:""},V(Date.now))}))}}(),D&&!h&&function(){if(C.current){if(N)return W();G.collapse="collapsing",G.style={height:E(),visibility:""},P(),o((function(){C.current&&"collapsing"===G.collapse&&(G.style={height:p,visibility:""},V(Date.now))}))}}();var z=s({overflow:"expanded"===G.collapse&&y?"":"hidden",transition:l},d,{},G.style),H=x,I=e.useCallback((function(e){e&&(C.current=e,L(m,{node:e}))}),[x]),B=v?"".concat(g," --c-").concat(G.collapse):g;return t.createElement(H,i({ref:I,style:z,onTransitionEnd:function(e){var t=e.target,n=e.propertyName;if(t===C.current&&"height"===n){var i=t.style.height;switch(G.collapse,G.collapse){case"expanding":""===i||i===p||A();break;case"collapsing":""===i||i!==p||W()}}},className:B},w),"function"==typeof c?c(G.collapse):"function"==typeof j?j(G.collapse):c)}}(n(1))},285:function(e,t,n){"use strict";t.a=n.p+"static/media/searchICO.276b50c6.svg"},498:function(e,t,n){"use strict";t.a=n.p+"static/media/nft1.4a8fd7b5.jpg"},712:function(e,t,n){"use strict";n.r(t);var i,c,s,r,a,l,o,d,j,b,x=n(15),h=n(145),u=n(146),p=n(148),m=n(151),O=n(16),f=(n(158),n(159),n(1)),g=(n(85),n(9)),v=n(87),N=n(55),y=(n(179),n(10)),w=n(285),T=n(498),F=n(183),P=n(3);function C(e){return Object(P.jsx)(F.Scrollbars,{renderTrackHorizontal:function(e){return Object(P.jsx)("div",Object(O.a)(Object(O.a)({},e),{},{className:"track-horizontal"}))},renderThumbHorizontal:function(e){return Object(P.jsx)("div",Object(O.a)(Object(O.a)({},e),{},{className:"thumb-horizontal"}))},renderView:function(e){return Object(P.jsx)("div",Object(O.a)(Object(O.a)({},e),{},{className:"view"}))},autoHide:!0,style:e.style,children:e.children})}var k=function(e){Object(p.a)(n,e);var t=Object(m.a)(n);function n(e){var i;return Object(h.a)(this,n),(i=t.call(this,e)).state={isOpen1:!1,tabPanel:"all",searched:!1,filter:[],page:1},i}return Object(u.a)(n,[{key:"render",value:function(){return Object(P.jsx)(v.a.MainSection,{children:Object(P.jsxs)(v.a.Container,{children:[Object(P.jsx)(V,{children:"Fibit Pro Blog"}),Object(P.jsxs)(G,{children:[Object(P.jsx)(L,{children:Object(P.jsxs)(C,{autoHide:!0,autoHideTimeout:1e3,style:{width:"100%",height:"70px",position:"relative"},children:[Object(P.jsx)("button",{className:"active",id:"all",children:"All"}),Object(P.jsx)("button",{className:"",children:"Art"}),Object(P.jsx)("button",{className:"",children:"Celebrity"}),Object(P.jsx)("button",{className:"",children:"Sport"})]})}),Object(P.jsx)(W,{children:Object(P.jsxs)(A,{children:[Object(P.jsx)("input",{placeholder:"Search"}),Object(P.jsx)(E,{children:Object(P.jsx)("img",{src:w.a,alt:""})})]})})]}),Object(P.jsxs)(z,{children:[Object(P.jsx)(v.a.W25V2,{children:Object(P.jsx)(v.a.TenpxGutter,{children:Object(P.jsx)(N.b,{to:"/",children:Object(P.jsxs)("div",{className:"NFT-home-box",children:[Object(P.jsx)(D,{children:Object(P.jsx)("img",{src:T.a,alt:""})}),Object(P.jsxs)("div",{className:"NFT-home-box-inner",children:[Object(P.jsx)("h4",{children:"Content name / title dolor lorem ipsum sit adipiscing"}),Object(P.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur ascing elit. Phasellus at dui imperdiet, eleifend lacus gravida, accumsan arcu."}),Object(P.jsx)("p",{className:"date",children:"13.07.2021"})]})]})})})}),Object(P.jsx)(v.a.W25V2,{children:Object(P.jsx)(v.a.TenpxGutter,{children:Object(P.jsx)(N.b,{to:"/",children:Object(P.jsxs)("div",{className:"NFT-home-box",children:[Object(P.jsx)(D,{children:Object(P.jsx)("img",{src:T.a,alt:""})}),Object(P.jsxs)("div",{className:"NFT-home-box-inner",children:[Object(P.jsx)("h4",{children:"Content name / title dolor lorem ipsum sit adipiscing"}),Object(P.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur ascing elit. Phasellus at dui imperdiet, eleifend lacus gravida, accumsan arcu."}),Object(P.jsx)("p",{className:"date",children:"13.07.2021"})]})]})})})}),Object(P.jsx)(v.a.W25V2,{children:Object(P.jsx)(v.a.TenpxGutter,{children:Object(P.jsx)(N.b,{to:"/",children:Object(P.jsxs)("div",{className:"NFT-home-box",children:[Object(P.jsx)(D,{children:Object(P.jsx)("img",{src:T.a,alt:""})}),Object(P.jsxs)("div",{className:"NFT-home-box-inner",children:[Object(P.jsx)("h4",{children:"Content name / title dolor lorem ipsum sit adipiscing"}),Object(P.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur ascing elit. Phasellus at dui imperdiet, eleifend lacus gravida, accumsan arcu."}),Object(P.jsx)("p",{className:"date",children:"13.07.2021"})]})]})})})}),Object(P.jsx)(v.a.W25V2,{children:Object(P.jsx)(v.a.TenpxGutter,{children:Object(P.jsx)(N.b,{to:"/",children:Object(P.jsxs)("div",{className:"NFT-home-box",children:[Object(P.jsx)(D,{children:Object(P.jsx)("img",{src:T.a,alt:""})}),Object(P.jsxs)("div",{className:"NFT-home-box-inner",children:[Object(P.jsx)("h4",{children:"Content name / title dolor lorem ipsum sit adipiscing"}),Object(P.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur ascing elit. Phasellus at dui imperdiet, eleifend lacus gravida, accumsan arcu."}),Object(P.jsx)("p",{className:"date",children:"13.07.2021"})]})]})})})}),Object(P.jsx)(v.a.W25V2,{children:Object(P.jsx)(v.a.TenpxGutter,{children:Object(P.jsx)(N.b,{to:"/",children:Object(P.jsxs)("div",{className:"NFT-home-box",children:[Object(P.jsx)(D,{children:Object(P.jsx)("img",{src:T.a,alt:""})}),Object(P.jsxs)("div",{className:"NFT-home-box-inner",children:[Object(P.jsx)("h4",{children:"Content name / title dolor lorem ipsum sit adipiscing"}),Object(P.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur ascing elit. Phasellus at dui imperdiet, eleifend lacus gravida, accumsan arcu."}),Object(P.jsx)("p",{className:"date",children:"13.07.2021"})]})]})})})}),Object(P.jsx)(v.a.W25V2,{children:Object(P.jsx)(v.a.TenpxGutter,{children:Object(P.jsx)(N.b,{to:"/",children:Object(P.jsxs)("div",{className:"NFT-home-box",children:[Object(P.jsx)(D,{children:Object(P.jsx)("img",{src:T.a,alt:""})}),Object(P.jsxs)("div",{className:"NFT-home-box-inner",children:[Object(P.jsx)("h4",{children:"Content name / title dolor lorem ipsum sit adipiscing"}),Object(P.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur ascing elit. Phasellus at dui imperdiet, eleifend lacus gravida, accumsan arcu."}),Object(P.jsx)("p",{className:"date",children:"13.07.2021"})]})]})})})}),Object(P.jsx)(v.a.W25V2,{children:Object(P.jsx)(v.a.TenpxGutter,{children:Object(P.jsx)(N.b,{to:"/",children:Object(P.jsxs)("div",{className:"NFT-home-box",children:[Object(P.jsx)(D,{children:Object(P.jsx)("img",{src:T.a,alt:""})}),Object(P.jsxs)("div",{className:"NFT-home-box-inner",children:[Object(P.jsx)("h4",{children:"Content name / title dolor lorem ipsum sit adipiscing"}),Object(P.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur ascing elit. Phasellus at dui imperdiet, eleifend lacus gravida, accumsan arcu."}),Object(P.jsx)("p",{className:"date",children:"13.07.2021"})]})]})})})}),Object(P.jsx)(v.a.W25V2,{children:Object(P.jsx)(v.a.TenpxGutter,{children:Object(P.jsx)(N.b,{to:"/",children:Object(P.jsxs)("div",{className:"NFT-home-box",children:[Object(P.jsx)(D,{children:Object(P.jsx)("img",{src:T.a,alt:""})}),Object(P.jsxs)("div",{className:"NFT-home-box-inner",children:[Object(P.jsx)("h4",{children:"Content name / title dolor lorem ipsum sit adipiscing"}),Object(P.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur ascing elit. Phasellus at dui imperdiet, eleifend lacus gravida, accumsan arcu."}),Object(P.jsx)("p",{className:"date",children:"13.07.2021"})]})]})})})}),Object(P.jsx)(v.a.W25V2,{children:Object(P.jsx)(v.a.TenpxGutter,{children:Object(P.jsx)(N.b,{to:"/",children:Object(P.jsxs)("div",{className:"NFT-home-box",children:[Object(P.jsx)(D,{children:Object(P.jsx)("img",{src:T.a,alt:""})}),Object(P.jsxs)("div",{className:"NFT-home-box-inner",children:[Object(P.jsx)("h4",{children:"Content name / title dolor lorem ipsum sit adipiscing"}),Object(P.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur ascing elit. Phasellus at dui imperdiet, eleifend lacus gravida, accumsan arcu."}),Object(P.jsx)("p",{className:"date",children:"13.07.2021"})]})]})})})}),Object(P.jsx)(v.a.W25V2,{children:Object(P.jsx)(v.a.TenpxGutter,{children:Object(P.jsx)(N.b,{to:"/",children:Object(P.jsxs)("div",{className:"NFT-home-box",children:[Object(P.jsx)(D,{children:Object(P.jsx)("img",{src:T.a,alt:""})}),Object(P.jsxs)("div",{className:"NFT-home-box-inner",children:[Object(P.jsx)("h4",{children:"Content name / title dolor lorem ipsum sit adipiscing"}),Object(P.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur ascing elit. Phasellus at dui imperdiet, eleifend lacus gravida, accumsan arcu."}),Object(P.jsx)("p",{className:"date",children:"13.07.2021"})]})]})})})}),Object(P.jsx)(v.a.W25V2,{children:Object(P.jsx)(v.a.TenpxGutter,{children:Object(P.jsx)(N.b,{to:"/",children:Object(P.jsxs)("div",{className:"NFT-home-box",children:[Object(P.jsx)(D,{children:Object(P.jsx)("img",{src:T.a,alt:""})}),Object(P.jsxs)("div",{className:"NFT-home-box-inner",children:[Object(P.jsx)("h4",{children:"Content name / title dolor lorem ipsum sit adipiscing"}),Object(P.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur ascing elit. Phasellus at dui imperdiet, eleifend lacus gravida, accumsan arcu."}),Object(P.jsx)("p",{className:"date",children:"13.07.2021"})]})]})})})}),Object(P.jsx)(v.a.W25V2,{children:Object(P.jsx)(v.a.TenpxGutter,{children:Object(P.jsx)(N.b,{to:"/",children:Object(P.jsxs)("div",{className:"NFT-home-box",children:[Object(P.jsx)(D,{children:Object(P.jsx)("img",{src:T.a,alt:""})}),Object(P.jsxs)("div",{className:"NFT-home-box-inner",children:[Object(P.jsx)("h4",{children:"Content name / title dolor lorem ipsum sit adipiscing"}),Object(P.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur ascing elit. Phasellus at dui imperdiet, eleifend lacus gravida, accumsan arcu."}),Object(P.jsx)("p",{className:"date",children:"13.07.2021"})]})]})})})}),Object(P.jsx)(v.a.W25V2,{children:Object(P.jsx)(v.a.TenpxGutter,{children:Object(P.jsx)(N.b,{to:"/",children:Object(P.jsxs)("div",{className:"NFT-home-box",children:[Object(P.jsx)(D,{children:Object(P.jsx)("img",{src:T.a,alt:""})}),Object(P.jsxs)("div",{className:"NFT-home-box-inner",children:[Object(P.jsx)("h4",{children:"Content name / title dolor lorem ipsum sit adipiscing"}),Object(P.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur ascing elit. Phasellus at dui imperdiet, eleifend lacus gravida, accumsan arcu."}),Object(P.jsx)("p",{className:"date",children:"13.07.2021"})]})]})})})}),Object(P.jsx)(v.a.W25V2,{children:Object(P.jsx)(v.a.TenpxGutter,{children:Object(P.jsx)(N.b,{to:"/",children:Object(P.jsxs)("div",{className:"NFT-home-box",children:[Object(P.jsx)(D,{children:Object(P.jsx)("img",{src:T.a,alt:""})}),Object(P.jsxs)("div",{className:"NFT-home-box-inner",children:[Object(P.jsx)("h4",{children:"Content name / title dolor lorem ipsum sit adipiscing"}),Object(P.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur ascing elit. Phasellus at dui imperdiet, eleifend lacus gravida, accumsan arcu."}),Object(P.jsx)("p",{className:"date",children:"13.07.2021"})]})]})})})}),Object(P.jsx)(v.a.W25V2,{children:Object(P.jsx)(v.a.TenpxGutter,{children:Object(P.jsx)(N.b,{to:"/",children:Object(P.jsxs)("div",{className:"NFT-home-box",children:[Object(P.jsx)(D,{children:Object(P.jsx)("img",{src:T.a,alt:""})}),Object(P.jsxs)("div",{className:"NFT-home-box-inner",children:[Object(P.jsx)("h4",{children:"Content name / title dolor lorem ipsum sit adipiscing"}),Object(P.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur ascing elit. Phasellus at dui imperdiet, eleifend lacus gravida, accumsan arcu."}),Object(P.jsx)("p",{className:"date",children:"13.07.2021"})]})]})})})}),Object(P.jsx)(v.a.W25V2,{children:Object(P.jsx)(v.a.TenpxGutter,{children:Object(P.jsx)(N.b,{to:"/",children:Object(P.jsxs)("div",{className:"NFT-home-box",children:[Object(P.jsx)(D,{children:Object(P.jsx)("img",{src:T.a,alt:""})}),Object(P.jsxs)("div",{className:"NFT-home-box-inner",children:[Object(P.jsx)("h4",{children:"Content name / title dolor lorem ipsum sit adipiscing"}),Object(P.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur ascing elit. Phasellus at dui imperdiet, eleifend lacus gravida, accumsan arcu."}),Object(P.jsx)("p",{className:"date",children:"13.07.2021"})]})]})})})})]})]})})}}]),n}(f.Component),S=g.c.div(i||(i=Object(x.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-wrap: wrap;\n"]))),V=(Object(g.c)(S)(c||(c=Object(x.a)(["\n  width: 100%;\n  margin: 50px auto;\n"]))),g.c.div(s||(s=Object(x.a)(["\n  font-size: 32px;\n  letter-spacing: -1.52px;\n  font-weight: 700;\n  color: #000;\n  margin: 60px 0px 20px;\n  "," {\n    font-size: 24px;\n  }\n"])),y.default.sm)),G=Object(g.c)(S)(r||(r=Object(x.a)(["\n  width: 100%;\n  justify-content: space-between;\n  max-width: 1080px;\n  margin: 30px auto 20px;\n  "," {\n    max-width: 100%;\n  }\n  "," {\n    margin: 0px auto 20px;\n  }\n"])),y.default.lg,y.default.md),L=Object(g.c)(S)(a||(a=Object(x.a)(["\n  width: 45%;\n  justify-content: flex-start;\n  .view {\n    display: flex;\n    align-items: center;\n    padding-right: 20px;\n  }\n  button {\n    display: inline-block;\n    padding: 10px 25px;\n    font-size: 14px;\n    font-weight: 600;\n    color: #000000;\n    border-radius: 15px;\n    background-color: #eef2f7;\n    margin: 0px 6px 0px 0px;\n    &.active {\n      background-color: #00DBAE;\n      color: #fff;\n    }\n    :hover {\n      background-color: #00DBAE;\n      color: #fff;\n      box-shadow: 0 10px 10px 0 rgba(0, 0, 0, 0.2);\n    }\n    :last-child {\n      margin: 0px;\n    }\n    "," {\n      padding: 10px 19px;\n    }\n  }\n  "," {\n    width: 100%;\n  }\n"])),y.default.sm,y.default.md),W=Object(g.c)(S)(l||(l=Object(x.a)(["\n  width: 55%;\n  justify-content: flex-end;\n  "," {\n    width: 100%;\n    justify-content: flex-start;\n    margin-top: 20px;\n  }\n"])),y.default.md),A=Object(g.c)(S)(o||(o=Object(x.a)(["\n  width: 100%;\n  max-width: 220px;\n  position: relative;\n  margin-right: 9px;\n  input {\n    background-color: #eef2f7;\n    font-size: 14px;\n    border-radius: 15px;\n    border: 1px solid transparent;\n    outline: none;\n    height: 38px;\n    width: 100%;\n    padding: 3px 3px 3px 40px;\n    :focus {\n      background-color: #fff;\n      border: 1px solid #00DBAE;\n      box-shadow: 0 10px 10px 0 rgba(0, 0, 0, 0.2);\n    }\n  }\n  "," {\n    max-width: 100%;\n    margin-right: 0px;\n  }\n"])),y.default.md),E=Object(g.c)(S)(d||(d=Object(x.a)(["\n  width: 21px;\n  height: 21px;\n  position: absolute;\n  left: 11px;\n  top: 9px;\n"]))),D=g.c.div(j||(j=Object(x.a)(["\n  width: 100%;\n  height: 255px;\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n  overflow: hidden;\n  img {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n  }\n"]))),z=Object(g.c)(S)(b||(b=Object(x.a)(["\n  justify-content: flex-start;\n  margin: 0px -10px 120px;\n  .row {\n    margin: 0px -10px;\n  }\n  a {\n    .NFT-home-box {\n      border-radius: 10px;\n      border: 1px solid #dddddd;\n      .NFT-home-box-inner {\n        padding: 20px 15px;\n        h4 {\n          margin: 0px 0px 10px;\n          font-size: 18px;\n          color: #000000;\n          font-weight: 600;\n          line-height: 22px;\n          letter-spacing: -0.67px;\n          overflow: hidden;\n          text-overflow: ellipsis;\n          -webkit-line-clamp: 2;\n          display: -webkit-box;\n          -webkit-box-orient: vertical;\n          min-height: 44px;\n        }\n        p {\n          margin: 0px 0px 20px;\n          font-size: 12px;\n          color: #000000;\n          line-height: 16px;\n          letter-spacing: -0.3px;\n          overflow: hidden;\n          text-overflow: ellipsis;\n          -webkit-line-clamp: 3;\n          display: -webkit-box;\n          -webkit-box-orient: vertical;\n          min-height: 48px;\n          &.date {\n            font-weight: 600;\n            color: #8e9194;\n            margin: 0px;\n            min-height: auto;\n          }\n        }\n      }\n      :hover {\n        box-shadow: 0 10px 10px 0 rgb(0 0 0 / 20%);\n      }\n    }\n  }\n"])));t.default=k}}]);
//# sourceMappingURL=32.557a3e05.chunk.js.map