(this.webpackJsonpfibit=this.webpackJsonpfibit||[]).push([[7],{285:function(e,t,n){var r,o,a;o=[t,n(1),n(32),n(286),n(288),n(289)],r=function(e,t,n,r,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=l(t),i=l(n),s=l(r),u=l(o);function l(e){return e&&e.__esModule?e:{default:e}}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var f=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();function d(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function p(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var h=function(e){function t(e){c(this,t);var n=d(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={showThumb:!1},n.videoRef={},n}return p(t,e),f(t,[{key:"thumbLoaded",value:function(){this.setState({showThumb:!0})}},{key:"videoPlay",value:function(e){e.preventDefault(),this.setState({showVideo:!0,showThumb:!1}),this.videoRef.play()}},{key:"render",value:function(){var e=this;return a.default.createElement("div",{className:"video-player"},a.default.createElement("video",{className:"video-player__video",controls:!0,ref:function(t){return e.videoRef=t},preload:"metadata",playsInline:!0},a.default.createElement("source",{src:this.props.videoUrl,type:"video/mp4"}),"your browser does not support the video tag."),a.default.createElement("a",{href:"#",onClick:function(t){return e.videoPlay(t)}},a.default.createElement("div",{className:"video-player__thumbnail-container",style:{display:this.state.showThumb?"block":"none"}},a.default.createElement("div",{className:"video-player__thumbnail-container__thumbnail",onLoad:function(t){return e.thumbLoaded(t)}},a.default.createElement(u.default,{videoUrl:this.props.videoUrl,snapshotAtTime:this.props.snapshotAt}),a.default.createElement("div",{className:"video-player__icon-container"},a.default.createElement(s.default,{className:"video-player__icon-container__play-icon"}))))))}}]),t}(t.Component);e.default=h,h.propTypes={videoUrl:i.default.string,snapshotAt:i.default.number}},void 0===(a="function"===typeof r?r.apply(t,o):r)||(e.exports=a)},286:function(e,t,n){var r,o,a;o=[t,n(287)],r=function(e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(t);function r(e){return e&&e.__esModule?e:{default:e}}e.default=n.default},void 0===(a="function"===typeof r?r.apply(t,o):r)||(e.exports=a)},287:function(e,t,n){var r,o,a;o=[t,n(1)],r=function(e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=a;var n=r(t);function r(e){return e&&e.__esModule?e:{default:e}}var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};function a(e){return n.default.createElement("svg",o({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24"},e),n.default.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),n.default.createElement("path",{d:"M10 16.5l6-4.5-6-4.5v9zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"}))}},void 0===(a="function"===typeof r?r.apply(t,o):r)||(e.exports=a)},288:function(e,t,n){"use strict";var r,o=(r=n(1))&&"object"===typeof r&&"default"in r?r.default:r;function a(e){return function(){return e}}var i=function(){};i.thatReturns=a,i.thatReturnsFalse=a(!1),i.thatReturnsTrue=a(!0),i.thatReturnsNull=a(null),i.thatReturnsThis=function(){return this},i.thatReturnsArgument=function(e){return e};var s=i,u=Object.freeze({default:s,__moduleExports:s});var l=function(e,t,n,r,o,a,i,s){if(!e){var u;if(void 0===t)u=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var l=[n,r,o,a,i,s],c=0;(u=new Error(t.replace(/%s/g,(function(){return l[c++]})))).name="Invariant Violation"}throw u.framesToPop=1,u}},c=Object.freeze({default:l,__moduleExports:l}),f=u&&s||u,d=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable;function m(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(o){return!1}})()&&Object.assign;var v="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",b=Object.freeze({default:v,__moduleExports:v}),y=c&&l||c,_=b?v:b;var g=function(){function e(e,t,n,r,o,a){a!==_&&y(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return n.checkPropTypes=f,n.PropTypes=n,n},O=Object.freeze({default:g,__moduleExports:g}),w=O&&g||O,E=function(e,t){return e(t={exports:{}},t.exports),t.exports}((function(e){e.exports=w()})),j=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),T=function(e){var t=e.snapshot;return o.createElement("div",{className:"react-thumbnail-generator"},o.createElement("img",{src:t,alt:"my video thumbnail"}))},P=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.getSnapShot=function(){try{var e=n.props,t=e.width,r=e.height,o=n.refs.videoEl,a=n.refs.canvas;a.height=o.videoHeight,a.width=o.videoWidth,t&&r?a.getContext("2d").drawImage(o,0,0,t,r):a.getContext("2d").drawImage(o,0,0);var i=a.toDataURL("image/png");o.src="",o.remove(),a.remove(),n.setState({snapshot:i}),n.state.thumbnailHandler&&n.state.thumbnailHandler(i)}catch(s){console.error(s)}},n.state={dataLoaded:!1,metadataLoaded:!1,seeked:!1,snapshot:!1,suspended:!1,cors:e.cors,width:e.width,height:e.height,renderThumbnail:e.renderThumbnail,snapshotAtTime:e.snapshotAtTime,thumbnailHandler:e.thumbnailHandler,videoUrl:e.videoUrl},n}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),j(t,[{key:"render",value:function(){var e=this,t=this.state,n=t.renderThumbnail,r=t.snapshot,a=t.videoUrl;return r?n?o.createElement(T,{snapshot:r}):null:o.createElement("div",{className:"react-thumbnail-generator"},o.createElement("canvas",{className:"snapshot-generator",ref:"canvas"}),o.createElement("video",{muted:!0,className:"snapshot-generator",ref:"videoEl",src:a,onLoadedMetadata:function(){return e.setState({metadataLoaded:!0})},onLoadedData:function(){return e.setState({dataLoaded:!0})},onSuspend:function(){return e.setState({suspended:!0})},onSeeked:function(){return e.setState({seeked:!0})}}))}},{key:"componentWillReceiveProps",value:function(e){var t=!1,n={};for(var r in e)e[r]!==this.props[r]&&(n[r]=e[r],t||(t=!0));t&&this.setState(n)}},{key:"componentDidMount",value:function(){this.state.cors||this.refs.videoEl.setAttribute("crossOrigin","Anonymous")}},{key:"componentDidUpdate",value:function(e,t){if(!this.state.snapshot){var n=this.state,r=n.metadataLoaded,o=n.dataLoaded,a=n.suspended,i=n.seeked,s=n.snapshot,u=n.snapshotAtTime;r&&o&&a&&((!this.refs.videoEl.currentTime||this.refs.videoEl.currentTime<this.state.snapshotAtTime)&&(this.refs.videoEl.currentTime=u),i&&!s&&this.getSnapShot())}}}]),t}(o.Component);P.propTypes={cors:E.bool,width:E.number,height:E.number,renderThumbnail:E.bool,snapshotAtTime:E.number,thumbnailHandler:E.func,videoUrl:E.string.isRequired},P.defaultProps={cors:!1,renderThumbnail:!0,snapshotAtTime:2},e.exports=P},289:function(e,t,n){}}]);
//# sourceMappingURL=7.065c79e3.chunk.js.map