(this.webpackJsonpfibit=this.webpackJsonpfibit||[]).push([[12],{178:function(e,n,t){"use strict";n.a=t.p+"static/media/closeBTN01.bef0773d.svg"},721:function(e,n,t){"use strict";t.r(n);var a,c,r,i,s,o,l,u,d,b=t(15),g=t(143),x=t(39),f=t(138),h=t.n(f),j=t(1),m=t(9),p=t(55),O=t(232),k=t(703),w=t(10),v=t(178),C=t.p+"static/media/wallet-connect.c0072cb0.svg",E=t(86),y=t(85),L=t(154),N=t(153),A=t(3);var I=m.c.div(a||(a=Object(b.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-wrap: wrap;\n"]))),T=Object(m.c)(I)(c||(c=Object(b.a)(["\n  flex-direction: column;\n  width: 100%;\n  margin-top: 25px;\n  button {\n    width: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: flex-start;\n    background-color: #eef2f7;\n    border-radius: 10px;\n    height: 58px;\n    margin-bottom: 8px;\n    i {\n      width: 32px;\n      height: 32px;\n      display: flex;\n      margin-right: 12px;\n      margin-left: 4px;\n    }\n    :hover {\n      filter: brightness(0.97);\n    }\n  }\n"]))),M=Object(m.c)(I)(r||(r=Object(b.a)(["\n  width: 100%;\n  margin: 30px auto 0 auto;\n"]))),B=m.c.div(i||(i=Object(b.a)(["\n  font-size: 24px;\n  font-weight: 600;\n  color: #000;\n  margin-bottom: 15px;\n  letter-spacing: -1px;\n  &.v2 {\n    max-width: 220px;\n    margin: 0 auto;\n    text-align: center;\n    line-height: 28px;\n  }\n"]))),S=m.c.div(s||(s=Object(b.a)(["\n  font-size: 14px;\n  font-weight: 400;\n  color: #000;\n  letter-spacing: -0.5px;\n  &.text-center {\n    text-align: center;\n    width: 100%;\n    margin: 20px 0px 40px;\n  }\n  a {\n    color: #00DBAE;\n  }\n"]))),H=m.c.button(o||(o=Object(b.a)(["\n  background-color: #000000;\n  border: 1px solid #000;\n  color: #fff;\n  font-size: 16px;\n  letter-spacing: -0.5px;\n  font-weight: 700;\n  border-radius: 15px;\n  margin: 0 auto;\n  padding: 17px 15px;\n  width: 100%;\n  :hover {\n    background-color: #fff;\n    color: #000;\n  }\n"]))),J=Object(m.c)(I)(l||(l=Object(b.a)(["\n  position: fixed;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.6);\n  z-index: 101;\n  backdrop-filter: blur(2px);\n"]))),Y=Object(m.c)(I)(u||(u=Object(b.a)(["\n  width: 100%;\n  position: relative;\n  max-width: 400px;\n  margin: 0 15px;\n  min-height: 418px;\n  padding: 50px;\n  background-color: #fff;\n  border-radius: 30px;\n  justify-content: flex-start;\n  align-content: center;\n  "," {\n    padding: 50px 25px;\n  }\n"])),w.default.xs),D=m.c.button(d||(d=Object(b.a)(["\n  width: 20px;\n  height: 20px;\n  position: absolute;\n  right: 20px;\n  top: 27px;\n  padding: 0;\n  margin: 0px;\n  :hover {\n    transform: rotate(90deg);\n  }\n  "," {\n    right: 15px;\n    top: 15px;\n  }\n"])),w.default.xs);n.default=Object(y.b)((function(e){return{web3Data:e.fetchWeb3Data,networkId:e.fetchNetworkId,isMetamaskEnabled:e.fetchMetamask,nonce:e.fetchNonce,authData:e.fetchAuthData}}),(function(e){return{getWeb3:function(){return e(N.a.getWeb3())},enableMetamask:function(){return e(N.a.enableMetamask())},enabledWalletConnect:function(){return e(N.a.enabledWalletConnect())},generateNonce:function(n){return e(N.a.generateNonce(n))},authLogin:function(n,t){return e(N.a.authLogin(n,t))},authenticateUser:function(){return e(N.a.authenticateUser())},getUserDetails:function(){return e(N.a.getUserDetails())},authLogout:function(){return e({type:"AUTH_LOGOUT",data:null})},web3Logout:function(){return e({type:"FETCH_WEB3_DATA",data:{isLoggedIn:!1,accounts:[]}})}}}))((function(e){var n=Object(j.useState)(!1),t=Object(x.a)(n,2),a=t[0],c=t[1],r=Object(j.useState)(!1),i=Object(x.a)(r,2),s=i[0],o=i[1],l=Object(j.useState)({isError:!1,msg:"",code:0}),u=Object(x.a)(l,2),d=u[0],b=u[1],f=e.web3Data,m=e.generateNonce,w=e.enableMetamask,y=e.authLogin,N=e.toggle,I=e.nonce,U=e.authData,F=e.enabledWalletConnect;Object(j.useEffect)((function(){e.getWeb3()}),[]),Object(j.useEffect)((function(){if(f.error)return b({isError:!0,msg:"User denied sign in..",code:1});f.accounts[0]&&s&&(c(!0),f.accounts[0]&&!I?W(void 0,!0):f.accounts[0]?f.accounts[0]&&I&&W(I,!1):b({isError:!0,msg:"User denied sign in..",code:1}))}),[f]),Object(j.useEffect)((function(){I&&f.accounts[0]&&W(I)}),[I]),Object(j.useEffect)((function(){401===(null===U||void 0===U?void 0:U.status)?(c(!1),b({isError:!0,msg:U.data.message,code:1})):U&&R(!1)}),[U]);var z=function(e){if(o(!0),e)F();else if(c(!0),f.accounts[0])G(f);else if("undefined"!==typeof window.web3)w();else{c(!1);var n=Object(A.jsx)(O.a,{id:"download_metamask_lable",defaultMessage:"Please download metamask first.!"});b({isError:!0,msg:n,code:2})}},G=function(e){localStorage.getItem("fibitAuthToken")&&e.accounts[0]===localStorage.getItem("userAddress")||W(void 0,!0)},W=function(){var e=Object(g.a)(h.a.mark((function e(n,t){var a,r,i;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=4;break}m(f.accounts[0]),e.next=54;break;case 4:if(e.prev=4,f.isLoggedIn){e.next=48;break}return e.next=8,L.c.eth.net.getId();case 8:if(97===(a=e.sent)||"0x61"===a){e.next=41;break}if(e.prev=10,!window.web3){e.next=22;break}return e.next=14,window.ethereum.request({method:"wallet_addEthereumChain",params:[{chainId:"0x61",chainName:"Binance Test Chain",nativeCurrency:{name:"Binance Chain Token",symbol:"BNB",decimals:18},rpcUrls:["https://data-seed-prebsc-1-s1.binance.org:8545/"]}]});case 14:return e.next=16,L.c.eth.personal.sign(L.c.utils.utf8ToHex(n),f.accounts[0]);case 16:return r=e.sent,e.next=19,y(n,r);case 19:R(!0),e.next=24;break;case 22:c(!1),b({isError:!0,msg:"Wrong Network, please select the correct network",code:0});case 24:e.next=39;break;case 26:if(e.prev=26,e.t0=e.catch(10),4902!==e.t0.code){e.next=38;break}return e.prev=29,e.next=32,window.ethereum.request({method:"wallet_addEthereumChain",params:[{chainId:"0x97",chainName:"Binance Smart Chain",nativeCurrency:{name:"Binance Test Token",symbol:"BNB",decimals:18},rpcUrls:["https://data-seed-prebsc-1-s1.binance.org:8545/"]}]});case 32:e.next=38;break;case 34:e.prev=34,e.t1=e.catch(29),c(!1),b({isError:!0,msg:e.t1.message,code:1});case 38:4001===e.t0.code&&(c(!1),b({isError:!0,msg:e.t0.message,code:1}));case 39:e.next=48;break;case 41:return window.localStorage.removeItem("WALLETCONNECT_DEEPLINK_CHOICE"),e.next=44,L.c.eth.personal.sign(L.c.utils.utf8ToHex(n),f.accounts[0]);case 44:return i=e.sent,e.next=47,y(n,i);case 47:R(!0);case 48:e.next=54;break;case 50:e.prev=50,e.t2=e.catch(4),c(!1),b({isError:!0,msg:e.t2.message,code:1});case 54:case"end":return e.stop()}}),e,null,[[4,50],[10,26],[29,34]])})));return function(n,t){return e.apply(this,arguments)}}(),R=function(n){n||(localStorage.clear(),e.web3Logout()),b({isError:!1,msg:"",code:0}),c(!1),N(4)};return Object(A.jsx)(A.Fragment,{children:Object(A.jsx)(J,{children:Object(A.jsxs)(Y,{children:[Object(A.jsx)(D,{className:"ani-1",onClick:function(){R(!1)},children:Object(A.jsx)("img",{src:v.a,alt:""})}),d.isError?Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)(B,{className:"v2",children:Object(A.jsx)(O.a,{id:"attention",defaultMessage:"Attention.!"})}),Object(A.jsx)(S,{className:"text-center",children:d.msg}),2===d.code&&Object(A.jsx)(H,{className:"ani-1",onClick:function(){return window.open("https://metamask.io/","_blank")},children:Object(A.jsx)(O.a,{id:"download_metamask",defaultMessage:"Go to MetaMask website"})})]}):a?Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)(B,{className:"v2",children:Object(A.jsx)(O.a,{id:"follow_the_instructions",defaultMessage:"Please follow the instructions on your wallet"})}),Object(A.jsx)(M,{children:Object(A.jsx)("img",{src:E.a,alt:""})})]}):Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)(B,{children:Object(A.jsx)(O.a,{id:"connect_your_wallet",defaultMessage:"Connect your wallet"})}),Object(A.jsx)(S,{children:Object(A.jsx)(O.a,{id:"connect_wallet",defaultMessage:"By connecting your wallet,\r you agree to our {termLink} and our {privacyLink}.",values:{termLink:Object(A.jsx)(p.c,{to:"/legal",children:Object(A.jsx)(O.a,{id:"term_of_service",defaultMessage:"Term of Service"})}),privacyLink:Object(A.jsx)(p.c,{to:"/legal",children:Object(A.jsx)(O.a,{id:"privacy_policy",defaultMessage:"Privacy Policy"})})}})}),Object(A.jsxs)(T,{children:[!k.isMobile&&Object(A.jsxs)("button",{onClick:function(){return z()},children:[Object(A.jsx)("i",{children:Object(A.jsx)("img",{src:"data:image/png;base64,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",alt:""})}),"MetaMask"]}),Object(A.jsxs)("button",{onClick:function(){return z(1)},children:[Object(A.jsx)("i",{children:Object(A.jsx)("img",{src:C,alt:""})}),"WalletConnect"]})]})]})]})})})}))}}]);
//# sourceMappingURL=12.3cd3cdcd.chunk.js.map