(this.webpackJsonpfibit=this.webpackJsonpfibit||[]).push([[44],{1460:function(A,n,t){"use strict";t.r(n);var i,a,o,e,c=t(15),p=t(145),s=t(146),r=t(148),l=t(151),C=(t(158),t(159),t(1)),Q=t(9),d=t(232),g=t(85),f=t(8),E=t(153),h=t(10),j=t(3),b=function(A){Object(r.a)(t,A);var n=Object(l.a)(t);function t(A){var i;return Object(p.a)(this,t),(i=n.call(this,A)).state={},i}return Object(s.a)(t,[{key:"componentDidMount",value:function(){this.props.getNotifications()}},{key:"render",value:function(){var A=this,n=this.props,t=n.notifications,i=n.lng;return Object(j.jsx)(j.Fragment,{children:t?Object(j.jsxs)(B,{children:[Object(j.jsx)(m,{children:Object(j.jsx)(d.a,{id:"notifications",defaultMessage:"Notifications"})}),t.length>0?t.map((function(n){return Object(j.jsxs)("button",{onClick:function(){return A.props.history.push(n.route?n.route:"/")},children:["en"===i&&n.text.en,"tr"===i&&n.text.tu]},n.id)})):Object(j.jsx)("button",{children:Object(j.jsx)(d.a,{id:"no_notifications",defaultMessage:"No Notifications Found"})})]}):Object(j.jsx)(w,{children:Object(j.jsx)("img",{src:"data:image/gif;base64,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",alt:""})})})}}]),t}(C.Component),k=Q.c.div(i||(i=Object(c.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-wrap: wrap;\n"]))),w=Object(Q.c)(k)(a||(a=Object(c.a)(["\n  width: 100%;\n  margin: 50px auto;\n"]))),B=Object(Q.c)(k)(o||(o=Object(c.a)(["\n  align-items: flex-start;\n  justify-content: flex-start;\n\n  button {\n    width: 100%;\n    height: auto;\n    font-size: 14px;\n    font-weight: 600;\n    color: #000;\n    display: block;\n    text-align: left;\n    padding: 15px;\n    border-bottom: 1px solid #eef2f7;\n    // :last-child\n    // {\n    //   "," {\n    //     padding-bottom:40px;\n    //   }\n    // }\n    span {\n      font-size: 10px;\n      font-weight: 400;\n      display: block;\n      width: 100%;\n      margin-top: 5px;\n    }\n    :hover {\n      background-color: #d9f5f5;\n    }\n    "," {\n      padding: 20px 35px 20px 25px;\n    }\n  }\n"])),h.default.md,h.default.md),m=Q.c.div(e||(e=Object(c.a)(["\n  font-size: 24px;\n  color: #000000;\n  letter-spacing: -1.07px;\n  font-weight: 600;\n  margin: 20px 0px 20px;\n  display: none;\n  "," {\n    display: block;\n    padding: 0px 25px;\n  }\n"])),h.default.md);n.default=Object(f.h)(Object(g.b)((function(A){return{notifications:A.fetchNotifications,lng:A.fetchLanguage}}),(function(A){return{getNotifications:function(){return A(E.a.getNotifications())}}}))(b))},158:function(A,n,t){},159:function(A,n,t){}}]);
//# sourceMappingURL=44.55576d47.chunk.js.map