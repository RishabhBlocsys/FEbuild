(this.webpackJsonpfibit=this.webpackJsonpfibit||[]).push([[49],{704:function(e,t,n){"use strict";n.r(t);var a,r=n(15),o=n(143),i=n(145),s=n(146),c=n(148),u=n(151),b=n(138),d=n.n(b),l=n(1),h=n.n(l),p=n(46),f=n(85),j=n(191),O=n.n(j),m=n(1447),v=n(87),D=n(153),k=n(172),x=n(9),g=n(3),w=Object(p.a)((function(){return Promise.all([n.e(1),n.e(24),n.e(45)]).then(n.bind(null,1429))})),A=Object(p.a)((function(){return Promise.all([n.e(1),n.e(2),n.e(3),n.e(4),n.e(23)]).then(n.bind(null,1443))})),C=Object(p.a)((function(){return Promise.all([n.e(1),n.e(3),n.e(42),n.e(10),n.e(38)]).then(n.bind(null,1444))})),P=Object(p.a)((function(){return Promise.all([n.e(1),n.e(37)]).then(n.bind(null,1445))})),y=Object(p.a)((function(){return Promise.all([n.e(1),n.e(30)]).then(n.bind(null,1451))})),H=Object(p.a)((function(){return Promise.all([n.e(1),n.e(29)]).then(n.bind(null,1446))})),M=function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(e){var a;Object(i.a)(this,n),(a=t.call(this,e)).setCookie=function(e){var t=a.props.cookies,n=new Date(Date.now()+60*k.b*60*1e3);t.set("dashboard",e,{path:"/",expires:n})};var r=e.cookies;return a.state={loading:!1,dashboard:r.get("dashboard")||null},a}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=Object(o.a)(d.a.mark((function e(){var t,n,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:window.scrollTo(0,0),t=this.props,n=t.dashboard,a=t.cookies,this.state.dashboard||n?this.props.setDashboard(a.get("dashboard")):this.props.getDashboard();case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(){var e=this.props,t=e.dashboard,n=e.cookies;t&&!n.get("dashboard")&&this.setCookie(t)}},{key:"render",value:function(){return Object(g.jsx)(v.a.MainSection,{className:"mt-0",children:Object(g.jsx)(O.a,{children:this.props.dashboard?this.props.dashboard.map((function(e,t){return"Banner"===e.name&&e.isActive?Object(g.jsx)(w,{},t):"Top Nft"===e.name&&e.isActive?Object(g.jsx)(A,{},t):"Hall Of Frame"===e.name&&e.isActive?Object(g.jsx)(C,{},t):"Hall Of Frame"!==e.name||e.isActive?"Collections"===e.name&&e.isActive?Object(g.jsx)(P,{},t):"Info"===e.name&&e.isActive?Object(g.jsx)(y,{},t):"":Object(g.jsx)(H,{},t)})):"loading"})})}}]),n}(h.a.Component);v.a.MainSection=Object(x.c)(v.a.MainSection)(a||(a=Object(r.a)(["\n  &.mt-0{\n    margin-top:0px;\n  }\n"])));t.default=Object(m.a)(Object(f.b)((function(e){return{dashboard:e.fetchDashboard}}),(function(e){return{getDashboard:function(){return e(D.a.fetchDashboardConfig())},setDashboard:function(t){return e({type:"FETCHED_DASHBOARD",data:t})}}}))(M))}}]);
//# sourceMappingURL=49.d72498c9.chunk.js.map