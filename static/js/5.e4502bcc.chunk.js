(this.webpackJsonpfibit=this.webpackJsonpfibit||[]).push([[5],{152:function(t,n,e){"use strict";e.d(n,"a",(function(){return E}));var a=e(16),r=e(143),u=e(138),i=e.n(u),s=e(172),o=e(154),c={get:function(t,n){return f.apply(this,arguments)},post:function(t,n){return p.apply(this,arguments)},put:function(t,n){return d.apply(this,arguments)}};function p(){return(p=Object(r.a)(i.a.mark((function t(n,e){var a,r,u;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=localStorage.getItem("fibitAuthToken"),r=a?{"content-type":"application/json","x-auth-token":a}:{"content-type":"application/json"},t.prev=2,t.next=5,s.a.post(n,e,{headers:r});case 5:return u=t.sent,t.abrupt("return",u);case 9:return t.prev=9,t.t0=t.catch(2),t.abrupt("return",t.t0);case 12:case"end":return t.stop()}}),t,null,[[2,9]])})))).apply(this,arguments)}function f(){return(f=Object(r.a)(i.a.mark((function t(n,e){var a,r,u;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=localStorage.getItem("fibitAuthToken"),r=e?{"x-auth-token":a,"content-type":"application/json"}:{"content-type":"application/json"},t.prev=2,t.next=5,s.a.get(n,{headers:r});case 5:return u=t.sent,t.abrupt("return",u);case 9:return t.prev=9,t.t0=t.catch(2),t.abrupt("return",t.t0);case 12:case"end":return t.stop()}}),t,null,[[2,9]])})))).apply(this,arguments)}function d(){return(d=Object(r.a)(i.a.mark((function t(n,e){var a,r,u;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=localStorage.getItem("fibitAuthToken"),r=a?{"x-auth-token":a}:{"content-type":"application/json"},t.prev=2,t.next=5,s.a.put(n,e,{headers:r});case 5:return u=t.sent,t.abrupt("return",u);case 9:return t.prev=9,t.t0=t.catch(2),t.abrupt("return",t.t0);case 12:case"end":return t.stop()}}),t,null,[[2,9]])})))).apply(this,arguments)}function l(){return(l=Object(r.a)(i.a.mark((function t(){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,window.ethereum.request({method:"eth_chainId"});case 3:return t.abrupt("return",t.sent);case 6:return t.prev=6,t.t0=t.catch(0),t.abrupt("return",1);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})))).apply(this,arguments)}function y(t){return T.apply(this,arguments)}function T(){return(T=Object(r.a)(i.a.mark((function t(n){var e,a;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!o.c){t.next=18;break}return e={isLoggedIn:!1,accounts:[]},t.prev=2,t.next=5,o.c.eth.getAccounts();case 5:if(!(a=t.sent).length){t.next=12;break}return e.accounts=a,n&&(e.isLoggedIn=!0),t.abrupt("return",e);case 12:return t.abrupt("return",e);case 13:t.next=18;break;case 15:return t.prev=15,t.t0=t.catch(2),t.abrupt("return",e);case 18:case"end":return t.stop()}}),t,null,[[2,15]])})))).apply(this,arguments)}function m(){return(m=Object(r.a)(i.a.mark((function t(){var n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(o.a)();case 3:return t.next=5,y();case 5:return n=t.sent,t.abrupt("return",n);case 9:if(t.prev=9,t.t0=t.catch(0),-32002!==t.t0.code){t.next=13;break}return t.abrupt("return",{isLoggedIn:!1,accounts:[]});case 13:return t.abrupt("return",{isLoggedIn:!1,accounts:[]});case 14:case"end":return t.stop()}}),t,null,[[0,9]])})))).apply(this,arguments)}function h(){return(h=Object(r.a)(i.a.mark((function t(){var n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,window.ethereum.send("eth_requestAccounts");case 3:return t.next=5,y();case 5:return n=t.sent,t.abrupt("return",n);case 9:if(t.prev=9,t.t0=t.catch(0),-32002!==t.t0.code){t.next=13;break}return t.abrupt("return",{error:!0,code:t.t0.code,msg:t.t0.message,isLoggedIn:!1,accounts:[]});case 13:if(4001!==t.t0.code){t.next=15;break}return t.abrupt("return",{error:!0,code:t.t0.code,msg:t.t0.message,isLoggedIn:!1,accounts:[]});case 15:return t.abrupt("return",{error:!0,code:t.t0.code,msg:t.t0.message,isLoggedIn:!1,accounts:[]});case 16:case"end":return t.stop()}}),t,null,[[0,9]])})))).apply(this,arguments)}function b(){return(b=Object(r.a)(i.a.mark((function t(n,e){var a;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,!o.c){t.next=6;break}return t.next=4,new o.c.eth.Contract(n,e);case 4:return a=t.sent,t.abrupt("return",a);case 6:t.next=10;break;case 8:t.prev=8,t.t0=t.catch(0);case 10:case"end":return t.stop()}}),t,null,[[0,8]])})))).apply(this,arguments)}var g={getNetworkId:function(){return l.apply(this,arguments)},enableMetamask:function(){return h.apply(this,arguments)},getContractInstance:function(t,n){return b.apply(this,arguments)},getWeb3:y,enabledWalletConnect:function(){return m.apply(this,arguments)}},E=Object(a.a)(Object(a.a)({},c),g)},153:function(t,n,e){"use strict";e.d(n,"a",(function(){return C}));var a=e(16),r=e(143),u=e(138),i=e.n(u),s=e(152),o={fetchBanners:function(){return function(t){return s.a.get("/admin/banner/list").then((function(n){n.data&&t(c("FETCHED_NFT_BANNERS",n.data.data))}))}},fetcInfo:function(){return function(t){return s.a.get("/admin/info/list").then((function(n){n.data&&t(c("FETCHED_INFO",n.data.data))}))}},fetcHallFrameInfo:function(){return function(t){return s.a.get("/admin/hall-frame-info/list").then((function(n){n.data&&t(c("FETCHED_HALL_FRAME_INFO",n.data.data))}))}},fetchDashboardConfig:function(){return function(t){return s.a.get("/admin/dashboard/list").then((function(n){n.data&&t(c("FETCHED_DASHBOARD",n.data.data))}))}},getCreators:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(){var n=Object(r.a)(i.a.mark((function n(e){return i.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:s.a.post("user/listVerifiefCreator",t).then((function(t){200===t.status&&(e(c("FETCHED_PAGINATION",t.data.pagination)),e(c("FETCHED_CREATORS",t.data.data)))}));case 2:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},getMoreCreators:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(){var n=Object(r.a)(i.a.mark((function n(e){return i.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:s.a.post("user/listVerifiefCreator",t).then((function(t){200===t.status&&(e(c("FETCHED_PAGINATION",t.data.pagination)),e(c("FETCHED_MORE_CREATORS",t.data.data)))}));case 2:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},getMarketPlaceNFT:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(){var n=Object(r.a)(i.a.mark((function n(e){return i.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:s.a.post("nft/listMarketPlace",t).then((function(t){200===t.status&&(e(c("FETCHED_PAGINATION",t.data.pagination)),e(c("FETCHED_MARKETPLACE",t.data.data)))}));case 2:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},getMoreMarketPlaceNFT:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(){var n=Object(r.a)(i.a.mark((function n(e){return i.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:s.a.post("nft/listMarketPlace",t).then((function(t){200===t.status&&(e(c("FETCHED_PAGINATION",t.data.pagination)),e(c("FETCHED_MORE_MARKETPLACE",t.data.data)))}));case 2:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},getCollections:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(){var n=Object(r.a)(i.a.mark((function n(e){return i.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:s.a.post("nft/listCollections",t).then((function(t){200===t.status&&(e(c("FETCHED_PAGINATION",t.data.pagination)),e(c("FETCHED_COLLECTIONS",t.data.data)))}));case 2:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},getCollectionDetails:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(){var n=Object(r.a)(i.a.mark((function n(e){return i.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:s.a.get("nft/getCollectionInfo/".concat(t.id),!0).then((function(t){200===t.status&&e(c("FETCHED_COLLECTION_DETAIL",t.data.data))}));case 2:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},getMoreCollections:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(){var n=Object(r.a)(i.a.mark((function n(e){return i.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:s.a.post("nft/listCollections",t).then((function(t){200===t.status&&(e(c("FETCHED_PAGINATION",t.data.pagination)),e(c("FETCHED_MORE_COLLECTIONS",t.data.data)))}));case 2:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},updateCollection:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(){var n=Object(r.a)(i.a.mark((function n(e){return i.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:s.a.put("nft/updateCollection/".concat(t.id),t).then((function(t){200===t.status&&e(c("COLLECTION_UPDATED",t.data))}));case 2:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},getTopNFT:function(){return function(t){return s.a.get("/admin/popular/list",!0).then((function(n){n.data&&t(c("FETCHED_TOP_NFT",n.data.data))}))}},getTopCollection:function(){return function(t){return s.a.get("/admin/popularCollection/list",!0).then((function(n){n.data&&t(c("FETCHED_TOP_COLLECTION",n.data.data))}))}},getProfileInfo:function(){return function(t){return s.a.get("/admin/profile-info/list").then((function(n){n.data&&t(c("FETCHED_PROFILE_INFO",n.data.data))}))}},getHallOfFrameArtist:function(){return function(t){return s.a.get("/hallOfFrame/list/artist").then((function(n){n.data&&t(c("FETCHED_HALL_OF_FRAMES_ARTIST",n.data.data))}))}},getHallOfFrameArtwork:function(){return function(t){return s.a.get("/hallOfFrame/list/artwork").then((function(n){n.data&&t(c("FETCHED_HALL_OF_FRAMES_ARTWORK",n.data.data))}))}},getHallOfFrameCollector:function(){return function(t){return s.a.get("/hallOfFrame/list/collector").then((function(n){n.data&&t(c("FETCHED_HALL_OF_FRAMES_COLLECTOR",n.data.data))}))}}};function c(t,n){return{type:t,data:n}}var p={fetchCategories:function(){return function(){var t=Object(r.a)(i.a.mark((function t(n){var e,a;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=s.a.get("/category/list"),t.next=3,e;case 3:(a=t.sent).data&&n(f("FETCHED_CATEGORIES",a.data.data));case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()},getProfile:function(t){return function(n){s.a.get("user/userDetails?userId=".concat(t),!0).then((function(t){200===t.status&&n(f("FETCHED_PROFILE",t.data.data))}))}},getUserNFT:function(t,n){return function(){var e=Object(r.a)(i.a.mark((function e(a){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:s.a.get(t?"nft/listNftByUser/".concat(t,"?status=").concat(n):"nft/listNftByUser?status=".concat(n),!0).then((function(t){200===t.status&&a(f("FETCHED_USER_NFT",t.data.data))}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},getCreators:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(){var n=Object(r.a)(i.a.mark((function n(e){return i.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:s.a.post("user/listVerifiefCreator",t).then((function(t){200===t.status&&(e(f("FETCHED_PAGINATION",t.data.pagination)),e(f("FETCHED_CREATORS",t.data.data)))}));case 2:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},updateUserDetails:function(t){return function(){var n=Object(r.a)(i.a.mark((function n(e){var a;return i.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:try{(a=s.a.put("user/update",t)).then((function(t){200===t.status&&e(f("PROFILE_UPDATED",t.data.data))})),a.then((function(t){t.response&&e(f("API_FAILED",t.response.data.message))}))}catch(r){}case 1:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},getMoreCreators:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(){var n=Object(r.a)(i.a.mark((function n(e){return i.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:s.a.post("user/listVerifiefCreator",t).then((function(t){200===t.status&&(e(f("FETCHED_PAGINATION",t.data.pagination)),e(f("FETCHED_MORE_CREATORS",t.data.data)))}));case 2:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},createCollection:function(t){var n=JSON.stringify(t);return function(){var t=Object(r.a)(i.a.mark((function t(e){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:s.a.post("nft/addCollection",n).then((function(t){200===t.status?e(f("CREATE_COLLECTION",t.data)):e(f("CREATE_COLLECTION",t.response.data))}));case 2:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()},getUserDraftNFT:function(){return function(){var t=Object(r.a)(i.a.mark((function t(n){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:s.a.get("nft/listNftByUser?filter=draft",!0).then((function(t){200===t.status&&n(f("FETCHED_USER_DRAFT_NFT",t.data.data))}));case 2:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()},getSingleNFTDetails:function(t){return d.apply(this,arguments)},getLikesCount:l,likeToggler:function(t){return function(){var n=Object(r.a)(i.a.mark((function n(e){return i.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:s.a.get("like/toggle/".concat(t),!0).then((function(n){200===n.status&&(e(y(t)),e(l(t)))}));case 2:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},getIsLiked:y,getIsFollow:T,followToggler:function(t){return function(){var n=Object(r.a)(i.a.mark((function n(e){return i.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:s.a.get("follow/toggle/".concat(t),!0).then((function(n){200===n.status&&e(T(t))}));case 2:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},getLikedNFT:function(t){return function(){var n=Object(r.a)(i.a.mark((function n(e){return i.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:s.a.get(t?"nft/getLikedNfts/".concat(t):"nft/getLikedNfts",!0).then((function(t){200===t.status&&e(f("FETCHED_LIKED_NFT",t.data.data))}));case 2:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},getCollectedNFT:function(t){return function(){var n=Object(r.a)(i.a.mark((function n(e){return i.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:s.a.get(t?"nft/getCollectedNfts/".concat(t):"nft/getCollectedNfts",!0).then((function(t){200===t.status&&e(f("FETCHED_COLLECTED_NFT",t.data.data))}));case 2:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},getCollectionNFT:function(t){return function(){var n=Object(r.a)(i.a.mark((function n(e){return i.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:s.a.get(t?"nft/listCollection/".concat(t):"nft/listCollection",!0).then((function(t){200===t.status&&e(f("FETCHED_COLLECTION_NFT",t.data.data))}));case 2:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},getEditionHistory:function(t,n){return function(){var e=Object(r.a)(i.a.mark((function e(a){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:s.a.get("nft/history/".concat(t,"/").concat(n)).then((function(t){200===t.status&&a(f("FETCHED_NFT_EDITION_HISTORY",t.data.data))}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},getNotifications:function(){return function(){var t=Object(r.a)(i.a.mark((function t(n){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:s.a.get("notification/list",!0).then((function(t){200===t.status&&n(f("FETCHED_NOTIFICATIONS",t.data.data))}));case 2:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()},getProfileBanner:function(){return function(t){return s.a.get("/admin/profile-info/list").then((function(n){n.data&&t(f("FETCHED_PROFILE_BANNERS",n.data.data))}))}},setLanguage:function(t){return function(n){n(f("SET_LANGUAGE",t))}},sendInstagramCode:function(t){return function(n){return s.a.post("/user/validateInstagram",{code:t}).then((function(t){t.data&&n(f("VERIFIED_BY_INSTAGRAM",t.status))}))}},getTwitterAccessToken:function(){return function(t){return s.a.get("/user/twitter/access_token",!0).then((function(n){n.data&&t(f("TWITTER_ACCESS_TOKEN",n.data.data))}))}},verifyByTwitter:function(t,n){return function(e){return s.a.post("/user/validateTwitter",{oauth_verifier:n,oauth_token:t}).then((function(t){t.data&&e(f("VERIFIED_BY_TWITTER",t.status))}))}}};function f(t,n){return{type:t,data:n}}function d(){return(d=Object(r.a)(i.a.mark((function t(n){var e;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.a.get("nft/single/".concat(n),!0);case 2:if(200!==(e=t.sent).status){t.next=7;break}return t.abrupt("return",e.data.data);case 7:return t.abrupt("return",null);case 8:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function l(t){return function(){var n=Object(r.a)(i.a.mark((function n(e){return i.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:s.a.get("like/getLikesCount/".concat(t)).then((function(t){200===t.status&&e(f("FETCHED_LIKES_COUNT",t.data.data))}));case 2:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}function y(t){return function(){var n=Object(r.a)(i.a.mark((function n(e){return i.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:s.a.get("like/isLiked/".concat(t),!0).then((function(t){200===t.status&&e(f("FETCHED_IS_LIKED",t.data.data))}));case 2:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}function T(t){return function(){var n=Object(r.a)(i.a.mark((function n(e){return i.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:s.a.get("follow/checkIsFollowed/".concat(t),!0).then((function(t){200===t.status&&e(f("FETCHED_IS_FOLLOW",t.data.data))}));case 2:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}function m(t,n){return{type:n,data:t}}var h={addNFT:function(t){return function(n){var e=JSON.stringify(t);s.a.post("nft/addNft",e).then((function(t){200===t.status&&n(m(t.data.data,"ADD_NFT"))}))}},authLogin:function(t,n){return function(e){var a=JSON.stringify({nonce:t,signature:n});s.a.post("user/login",a).then(function(){var t=Object(r.a)(i.a.mark((function t(n){var a;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(200!==n.status){t.next=12;break}if(localStorage.setItem("fibitAuthToken",n.data.data.token),!n.data.data.token){t.next=9;break}return t.next=5,s.a.getWeb3();case 5:a=t.sent,localStorage.setItem("userAddress",a.accounts[0]),a.isLoggedIn=!0,e(m(a,"FETCH_WEB3_DATA"));case 9:e(m({data:n.data.data.details,status:!0},"AUTH_LOGIN")),t.next=13;break;case 12:localStorage.setItem("fibitAuthToken","");case 13:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}())}},generateNonce:function(t){return function(){var n=Object(r.a)(i.a.mark((function n(e){var a;return i.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:a="user/genrateNonce/".concat(t),s.a.get(a).then((function(t){200===t.status&&e(m(t.data.data.nonce,"GENERATE_NONCE"))}));case 3:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},getCategoryList:function(){return function(){var t=Object(r.a)(i.a.mark((function t(n){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:"category/list",s.a.get("category/list").then((function(t){200===t.status&&n(m(t.data.data,"CATEGORY_LIST"))}));case 3:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()},getCollectionList:function(){return function(){var t=Object(r.a)(i.a.mark((function t(n){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:"nft/listCollection",s.a.get("nft/listCollection",!0).then((function(t){200===t.status&&n(m(t.data.data,"COLLECTION_LIST"))}));case 3:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()},getUserDetails:function(){return function(t){s.a.get("user/userDetails",!0).then(function(){var n=Object(r.a)(i.a.mark((function n(e){var a,r;return i.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(200!==e.status){n.next=11;break}if(!e.data.data){n.next=8;break}return n.next=4,s.a.getWeb3();case 4:a=n.sent,localStorage.setItem("userAddress",a.accounts[0]),a.isLoggedIn=!0,t(m(a,"FETCH_WEB3_DATA"));case 8:t(m(e.data,"AUTH_LOGIN")),n.next=13;break;case 11:localStorage.setItem("fibitAuthToken",""),e.response||401!==(null===(r=e.response)||void 0===r?void 0:r.status)||t(m(e.response,"AUTH_LOGIN_ERROR"));case 13:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}())}},getUserProfile:function(t){return function(){var n=Object(r.a)(i.a.mark((function n(e){return i.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:s.a.get("user/getSingleUser/".concat(t)).then((function(t){200===t.status&&e(m(t.data.data,"FETCHED_USER_PROFILE"))}));case 2:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},updateNFT:function(t){return function(n){var e="nft/updateNft/".concat(t.id);s.a.put(e,t).then((function(t){200===t.status&&n(m(t.data,"UPDATE_NFT")),t.response&&403===t.response.status&&n(m(t.response.data,"UPDATE_NFT")),t.response&&400===t.response.status&&n(m(t.response.data,"UPDATE_NFT"))}))}}},b=e(169),g=e(167);function E(t,n){return{data:t,type:n}}var v={getNetworkId:function(){return function(t){s.a.getNetworkId().then((function(n){t(E(n,"FETCH_NETWORK_ID"))}))}},getWeb3:function(t){return t?function(t){t(E(null,"FETCH_WEB3_DATA"))}:function(t){s.a.getWeb3().then((function(n){null!==n&&void 0!==n&&n.accounts[0]?t(E(n,"FETCH_WEB3_DATA")):localStorage.clear()}))}},enableMetamask:function(){return function(t){s.a.enableMetamask().then((function(n){n.error?t(E(n,"FETCH_WEB3_DATA_ERROR")):t(E(n,"FETCH_WEB3_DATA"))}))}},getUserBalances:function(t){return function(n){s.a.getUserBalances(t).then((function(t){t&&n({type:"FETCH_USER_BALANCES",data:t})}))}},getNFTContractInstance:function(){var t=Object(g.a)().nftContractAddress;return function(n){s.a.getContractInstance(b,t).then((function(t){t&&n(E(t,"NFT_CONTRACT_INSTANCE"))}))}},enabledWalletConnect:function(){return function(t){s.a.enabledWalletConnect().then((function(n){n&&t(E(n,"FETCH_WEB3_DATA"))}))}}},C=Object(a.a)(Object(a.a)(Object(a.a)(Object(a.a)({},o),h),v),p)},154:function(t,n,e){"use strict";e.d(n,"c",(function(){return o})),e.d(n,"b",(function(){return c})),e.d(n,"a",(function(){return f}));var a=e(264),r=e(249),u=e.n(r),i=e(213),s=e.n(i),o=null,c=new a.a({rpc:{56:"https://speedy-nodes-nyc.moralis.io/5be1af5bcc43ff8e4432ee14/bsc/mainnet/archive"},chainId:56,qrcode:!1}),p=function(){return new Promise((function(t,n){"undefined"!==typeof window.web3?(o=new u.a(window.web3.currentProvider),localStorage.setItem("walletConnect",0),t(!0)):(o=new u.a(new u.a.providers.HttpProvider("https://bsc-dataseed.binance.org/")),n(!1))}))},f=function(){return new Promise((function(t,n){localStorage.setItem("walletConnect",1),c.enable(),o=new u.a(c),c.connector.on("display_uri",(function(t,n){var e=n.params[0];s.a.open(e)})),c.on("connect",(function(){s.a.close()})),c.on("disconnect",(function(t,n){localStorage.clear()})),t(!0)}))};o||(Number(localStorage.getItem("walletConnect"))>0?new Promise((function(t,n){c.connector.connected?(c.enable(),o=new u.a(c),t(!0)):(p(),n(!1))})):p())},167:function(t,n,e){"use strict";var a=e(143),r=e(138),u=e.n(r),i=e(152);function s(){return(s=Object(a.a)(u.a.mark((function t(){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.a.getNetworkId();case 2:t.sent;case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){s.apply(this,arguments)}(),n.a=function(){return{nftContractAddress:"0x63DBD57A1628DD5fADeBa2623a16D6CEDFe79f9B",escrowContractAddres:"0xF1b175EA3c50C96D8800D47823c53724AE1bA5C9"}}},169:function(t){t.exports=JSON.parse('[{"inputs":[{"internalType":"address","name":"_admin","type":"address"},{"internalType":"address","name":"_escrowAddress","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256[]","name":"ids","type":"uint256[]"},{"indexed":false,"internalType":"uint256[]","name":"values","type":"uint256[]"}],"name":"TransferBatch","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"id","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"TransferSingle","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"value","type":"string"},{"indexed":true,"internalType":"uint256","name":"id","type":"uint256"}],"name":"URI","type":"event"},{"inputs":[],"name":"EscrowInterface","outputs":[{"internalType":"contract EscrowInt","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"TokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"tokenAddress","type":"address"}],"name":"addPaymentTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"admin","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address[]","name":"_creators","type":"address[]"}],"name":"approveCreators","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"id","type":"uint256"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address[]","name":"accounts","type":"address[]"},{"internalType":"uint256[]","name":"ids","type":"uint256[]"}],"name":"balanceOfBatch","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"uint256","name":"_tokenId","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_admin","type":"address"}],"name":"changeAdmin","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"creator","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address[]","name":"_creators","type":"address[]"}],"name":"disableCreators","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"tokenAddress","type":"address"}],"name":"disablePaymentTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"escrowAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxEditionsPerNFT","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_editions","type":"uint256"},{"internalType":"string","name":"_tokenURI","type":"string"},{"internalType":"address","name":"_creator","type":"address"},{"internalType":"address","name":"_coCreator","type":"address"},{"internalType":"uint256","name":"_creatorPercent","type":"uint256"},{"internalType":"uint256","name":"_coCreatorPercent","type":"uint256"},{"internalType":"enum Token.Type","name":"_saleType","type":"uint8"},{"internalType":"uint256","name":"_timeline","type":"uint256"},{"internalType":"uint256","name":"_pricePerNFT","type":"uint256"},{"internalType":"uint256","name":"_adminPlatformFee","type":"uint256"},{"internalType":"address","name":"tokenAddress","type":"address"}],"name":"mintToken","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"ownerOfToken","outputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"paymentEnabled","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"paymentTokens","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256[]","name":"ids","type":"uint256[]"},{"internalType":"uint256[]","name":"amounts","type":"uint256[]"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"safeBatchTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_escrowAddress","type":"address"}],"name":"setEscrowAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_number","type":"uint256"}],"name":"setMaxEditions","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tokenId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"}]')},172:function(t,n,e){"use strict";e.d(n,"b",(function(){return u}));var a=e(233),r=e.n(a);n.a=r.a.create({baseURL:"http://api.3.67.57.47.nip.io/api/v1"});var u=2},234:function(t,n){},235:function(t,n){},236:function(t,n){},239:function(t,n){},240:function(t,n){},241:function(t,n){},242:function(t,n){},245:function(t,n){},246:function(t,n){},247:function(t,n){},250:function(t,n){},251:function(t,n){},252:function(t,n){},253:function(t,n){},254:function(t,n){},255:function(t,n){},256:function(t,n){},257:function(t,n){},258:function(t,n){},259:function(t,n){},260:function(t,n){},261:function(t,n){}}]);
//# sourceMappingURL=5.e4502bcc.chunk.js.map