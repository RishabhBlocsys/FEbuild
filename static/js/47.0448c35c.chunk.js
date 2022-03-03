(this.webpackJsonpfibit=this.webpackJsonpfibit||[]).push([[47],{1180:function(n,t,e){"use strict";e.r(t);var a,c,o,i,r,s,l,p=e(15),u=e(39),b=e(1),d=e(211),f=e(9),x=e(179),g=e.n(x),j=e(89),h=e(10),m=e(85),O=e(153),v=e(3);t.default=Object(m.b)(null,(function(n){return{setLanguage:function(t){return n(O.a.setLanguage(t))}}}))((function(n){var t=Object(b.useContext)(j.a),e=Object(b.useRef)(null),x=Object(b.useState)(!1),m=Object(u.a)(x,2),O=m[0],w=m[1],L=n.header;Object(b.useEffect)((function(){function n(n){e&&e.current&&!e.current.contains(n.target)&&O&&w(!1)}return document.addEventListener("mousedown",n),function(){document.removeEventListener("mousedown",n)}}),[e,O]),Object(b.useEffect)((function(){var e=localStorage.getItem("FibitLanguage")?localStorage.getItem("FibitLanguage"):"en";t.selectLanguage(e),n.setLanguage(e)}),[]);var N=function(e){w((function(n){return!n})),t.selectLanguage(e),localStorage.setItem("FibitLanguage",e),n.setLanguage(e)},k=f.c.div(a||(a=Object(p.a)(["\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-wrap: wrap;\n  "]))),z=Object(f.c)(k)(c||(c=Object(p.a)(["\n    margin-left: 30px;\n    position: relative;\n    button {\n      font-size: 12px;\n      font-weight: 600;\n      color: #000;\n      &.Lang-text {\n        "," {\n          display: none;\n        }\n      }\n    }\n    "," {\n      position: absolute;\n      right: 60px;\n      left: auto;\n      top: 0px;\n      .app__collapse {\n        opacity: 1;\n        overflow: visible !important;\n        visibility: visible !important;\n        height: auto !important;\n      }\n    }\n  "])),h.default.md,h.default.md),C=Object(f.c)(k)(o||(o=Object(p.a)(["\n    position: absolute;\n    background-color: #fff;\n    padding: 15px;\n    border-radius: 20px;\n    box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.3);\n    top: calc(100% + 30px);\n    width: 200px;\n    left: 50%;\n    transform: translateX(-50%);\n    overflow: hidden;\n    z-index: 100;\n    &.ver2 {\n      width: 300px;\n      left: auto;\n      transform: translateX(0);\n      right: 0;\n      top: calc(100% + 20px);\n      padding: 0;\n    }\n    &.ver3 {\n      width: 300px;\n      left: 50%;\n      transform: translateX(-50%);\n      top: calc(100% + 34px);\n      padding: 0;\n    }\n    "," {\n      box-shadow: none;\n      width: max-content;\n      padding: 0px;\n    }\n  "])),h.default.md),E=Object(f.c)(k)(i||(i=Object(p.a)(["\n    font-size: 16px;\n    color: #b3b3b3;\n    font-weight: 600;\n    button {\n      font-size: 16px;\n      padding: 0 10px;\n      margin: 0 6px;\n      color: #b3b3b3;\n      &.active {\n        color: #000;\n      }\n      :hover {\n        color: #000;\n      }\n      "," {\n        font-size: 18px;\n      }\n    }\n  "])),h.default.md),_=Object(f.c)(k)(r||(r=Object(p.a)(["\n    margin-left: 30px;\n    position: relative;\n    margin-top: 50px;\n    button {\n      font-size: 12px;\n      font-weight: 400;\n      color: #fff;\n    }\n    "," {\n      margin-top: 32px;\n    }\n  "])),h.default.sm),y=Object(f.c)(k)(s||(s=Object(p.a)(["\n    position: absolute;\n    background-color: #fff;\n    padding: 15px;\n    border-radius: 20px;\n    box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.3);\n    bottom: calc(100% + 5px);\n    width: 200px;\n    right: 0;\n    overflow: hidden;\n    z-index: 100;\n    &.ver2 {\n      width: 300px;\n      left: auto;\n      transform: translateX(0);\n      right: 0;\n      top: calc(100% + 20px);\n      padding: 0;\n    }\n    &.ver3 {\n      width: 300px;\n      left: 50%;\n      transform: translateX(-50%);\n      top: calc(100% + 34px);\n      padding: 0;\n    }\n  "]))),X=Object(f.c)(k)(l||(l=Object(p.a)(["\n    font-size: 16px;\n    color: #b3b3b3;\n    font-weight: 600;\n    button {\n      font-size: 16px;\n      padding: 0 10px;\n      margin: 0 6px;\n      color: #b3b3b3;\n      &.active {\n        color: #000;\n      }\n      :hover {\n        color: #000;\n      }\n    }\n  "])));return Object(v.jsx)(v.Fragment,{children:L?Object(v.jsxs)(z,{ref:e,children:[Object(v.jsxs)("button",{className:"Lang-text",onClick:function(){w((function(n){return!n}))},children:[Object(v.jsx)(d.a,{id:"language",defaultMessage:"LANG"}),Object(v.jsx)("i",{className:"fas fa-chevron-down"})]}),Object(v.jsx)(g.a,{isOpen:O,className:"app__collapse collapse-css-transition  "+(O?"collapse-active":""),children:Object(v.jsx)(C,{children:Object(v.jsxs)(E,{children:[Object(v.jsx)("button",{className:t.locale.includes("en")?"active":"",onClick:function(){return N("en")},children:"ENG"}),"|"," ",Object(v.jsx)("button",{className:"tr"===t.locale?"active":"",onClick:function(){return N("tr")},children:"TU"})]})})})]}):Object(v.jsxs)(_,{ref:e,children:[Object(v.jsxs)("button",{className:"Lang-text",onClick:function(){w((function(n){return!n}))},children:[Object(v.jsx)(d.a,{id:"language",defaultMessage:"LANG"}),Object(v.jsx)("i",{className:"fas fa-chevron-down"})]}),Object(v.jsx)(g.a,{isOpen:O,className:"app__collapse collapse-css-transition  "+(O?"collapse-active":""),children:Object(v.jsx)(y,{children:Object(v.jsxs)(X,{children:[Object(v.jsx)("button",{className:t.locale.includes("en")?"active":"",onClick:function(){return N("en")},children:"ENG"}),"|"," ",Object(v.jsx)("button",{className:"tr"===t.locale?"active":"",onClick:function(){return N("tr")},children:"TU"})]})})})]})})}))}}]);
//# sourceMappingURL=47.0448c35c.chunk.js.map