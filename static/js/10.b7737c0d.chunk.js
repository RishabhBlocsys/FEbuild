(this.webpackJsonpfibit=this.webpackJsonpfibit||[]).push([[10],{168:function(e,t,n){"use strict";n.d(t,"c",(function(){return f})),n.d(t,"b",(function(){return w})),n.d(t,"d",(function(){return E})),n.d(t,"f",(function(){return I})),n.d(t,"a",(function(){return Q})),n.d(t,"e",(function(){return B}));var a=n(143),i=n(138),p=n.n(i),u=n(220),s=n.n(u),y=n(221),r=n.n(y),l=n(224),o=n.n(l),m=n(170),d=n(186),A=n(187),c=n(164),b=n(154),T=n(173);function f(e){return M.apply(this,arguments)}function M(){return(M=Object(a.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,n){try{new s.a(t,{quality:.6,success:function(t){e(t)}})}catch(a){n(void 0)}})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function w(e){return e.charAt(0).toUpperCase()+e.slice(1)}function E(e,t){var n=Object(c.a)(),a=n.nftContractAddress,i=n.escrowContractAddres,p=n.token,u="token"===t?p:e?i:a,s="token"===t?A:e?d:m;try{if(b.c)return new b.c.eth.Contract(s,u)}catch(y){}}function I(e){return N.apply(this,arguments)}function N(){return(N=Object(a.a)(p.a.mark((function e(t){var n,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.substring(t.lastIndexOf("/")+1),e.next=3,v(n);case 3:return a=e.sent,e.abrupt("return",a.substring(0,a.lastIndexOf("/")));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Q(e){var t=e;if(e)return t.substring(0,5)+"...."+t.substring(t.length-10,t.length)}function v(e){return k.apply(this,arguments)}function k(){return(k=Object(a.a)(p.a.mark((function e(t){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.fromStream(r()(T.a.cat(t,{})));case 2:return n=e.sent,e.abrupt("return",n.mime);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function B(e){return e.includes("image")?"image":e.includes("audio")?"audio":e.includes("video")?"video":"image"}},171:function(e,t,n){"use strict";t.a="data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAABkAAD/4QMraHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjMtYzAxMSA2Ni4xNDU2NjEsIDIwMTIvMDIvMDYtMTQ6NTY6MjcgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkFGMEZDNUUyREZDQjExRUJCRjhDRkM2MDEyQzNFMEJGIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkFGMEZDNUUxREZDQjExRUJCRjhDRkM2MDEyQzNFMEJGIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDUzYgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6N0QxMjgwRjhERkNCMTFFQjg0NEJGNUIxQjdBMEQ4NEIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6N0QxMjgwRjlERkNCMTFFQjg0NEJGNUIxQjdBMEQ4NEIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7/7gAmQWRvYmUAZMAAAAABAwAVBAMGCg0AAAVIAAAGTAAABvIAAAek/9sAhAABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAgICAgICAgICAgIDAwMDAwMDAwMDAQEBAQEBAQIBAQICAgECAgMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwP/wgARCAAgACADAREAAhEBAxEB/8QAqwAAAQMFAAAAAAAAAAAAAAAACAABCQMEBQYHAQEBAQEAAAAAAAAAAAAAAAAAAQIDEAACAgIDAQAAAAAAAAAAAAAEBQMGAAJAAREQEQACAQIFAgQEBwAAAAAAAAABAgMRBAAhEhMFMUIQQWEiUXGBQ5GhMoIjFCQSAQAAAAAAAAAAAAAAAAAAAEATAQACAQMDBQEAAAAAAAAAAAEAESEQMUEgUXFA8LHB8YH/2gAMAwEAAhEDEQAAAZk89BykphI2oj9xLYkL3eYIOGTBG0JMmvQjOL//2gAIAQEAAQUCx/dJhS0N1nIL+Ow5gWqoOZgxyx2SFHpJajS9Y7SYJrXLLE71bF7sGfneed4sKkAY/wD/2gAIAQIAAQUC4H//2gAIAQMAAQUC4H//2gAIAQICBj8CB//aAAgBAwIGPwIH/9oACAEBAQY/AsTWPFpETbttz3UwLjeH644IwVH8RyLN3VFPPENlyiRf6HWKG6hUppmf2xpPHVhSVstQpQ+VMx4X0E4YMbiaeNm+9BPK8kcynuDA5/BgRi0tYAxZ5o2dl+zCjq0s5PbtqMvXwWJFWe/mXVFATRY46035yMxHUUUdXI9CQU5Oz43k49RZFuLbS0Ve2KSJ1ZR+Jxo4yy43jFqC/wDXttcktO2WWZmLr+eGhlVYOQhXXJCD7JY6gb0Fc9IJ9w6qTi+vGq29cSbeXSCM7cCj5RKPrjocdDiyvEqDBcRlsusTHbnX98LEY//aAAgBAQMBPyGNlG2WGtTLDYCpajcuUwWitDScux1A6hA9gKqKLtGRm7PLuzAAOVzUMoaKTc4tHNdApAKIFwSYru6cZi203WXBe+CNTMcrYBskPilU3C7WULYmURUxqWSmzKwees8z8hn5DMKW2nPMrJ/XXP/aAAgBAgMBPyGLL6mXLg9P/9oACAEDAwE/IfQf/9oADAMBAAIRAxEAABDU5JKzc/7/2gAIAQEDAT8QVty7vL3h1yewqnFUwsDneR9oRhp+HPIAtmXc5e8d3y/MBOowIA5pdFDGDYVhlD63Ijl7hueT5hSmL1ewMeaqwTABRl9CKAgDXPAWPy5p42FOk45RGDXa832IsfDEECKBwZ3OTfU9tfU9tfUbVAq5QqazbiBkE//aAAgBAgMBPxCUNEODq4YZdFXmW5zMNsSzzFtvUw3P/9oACAEDAwE/EIsHorRZel9P/9k="},173:function(e,t,n){"use strict";var a=n(225).create({host:"ipfs.infura.io",port:"5001",protocol:"https"});t.a=a},186:function(e){e.exports=JSON.parse('[{"inputs":[{"internalType":"address","name":"_admin","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"components":[{"internalType":"address","name":"seller","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"pricePerNFT","type":"uint256"},{"internalType":"uint256","name":"saleType","type":"uint256"},{"internalType":"uint256","name":"timeline","type":"uint256"},{"internalType":"address","name":"paymentToken","type":"address"}],"indexed":false,"internalType":"struct NewEscrow.Order","name":"order","type":"tuple"},{"indexed":false,"internalType":"uint256","name":"timestamp","type":"uint256"},{"indexed":false,"internalType":"address","name":"buyer","type":"address"},{"indexed":false,"internalType":"uint256","name":"nonce","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"editionNumber","type":"uint256"}],"name":"BidClaimed","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"address","name":"seller","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"pricePerNFT","type":"uint256"},{"internalType":"uint256","name":"saleType","type":"uint256"},{"internalType":"uint256","name":"timeline","type":"uint256"},{"internalType":"address","name":"paymentToken","type":"address"}],"indexed":false,"internalType":"struct NewEscrow.Order","name":"order","type":"tuple"},{"indexed":false,"internalType":"uint256","name":"timestamp","type":"uint256"},{"indexed":false,"internalType":"address","name":"buyer","type":"address"},{"indexed":false,"internalType":"uint256","name":"nonce","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"editionNumber","type":"uint256"}],"name":"BidPlaced","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"from","type":"address"},{"indexed":false,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"id","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"edition","type":"uint256"}],"name":"EditionTransferred","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"address","name":"seller","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"pricePerNFT","type":"uint256"},{"internalType":"uint256","name":"saleType","type":"uint256"},{"internalType":"uint256","name":"timeline","type":"uint256"},{"internalType":"address","name":"paymentToken","type":"address"}],"indexed":false,"internalType":"struct NewEscrow.Order","name":"order","type":"tuple"},{"indexed":false,"internalType":"uint256","name":"timestamp","type":"uint256"},{"indexed":false,"internalType":"address","name":"buyer","type":"address"},{"indexed":false,"internalType":"uint256","name":"nonce","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"editionNumber","type":"uint256"}],"name":"OrderBought","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"address","name":"seller","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"pricePerNFT","type":"uint256"},{"internalType":"uint256","name":"saleType","type":"uint256"},{"internalType":"uint256","name":"timeline","type":"uint256"},{"internalType":"address","name":"paymentToken","type":"address"}],"indexed":false,"internalType":"struct NewEscrow.Order","name":"order","type":"tuple"},{"indexed":false,"internalType":"uint256","name":"timestamp","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"nonce","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"editionNumber","type":"uint256"}],"name":"OrderCancelled","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"address","name":"seller","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"pricePerNFT","type":"uint256"},{"internalType":"uint256","name":"saleType","type":"uint256"},{"internalType":"uint256","name":"timeline","type":"uint256"},{"internalType":"address","name":"paymentToken","type":"address"}],"indexed":false,"internalType":"struct NewEscrow.Order","name":"order","type":"tuple"},{"indexed":false,"internalType":"uint256","name":"timestamp","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"nonce","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"editionNumber","type":"uint256"}],"name":"OrderPlaced","type":"event"},{"inputs":[],"name":"ERC1155Interface","outputs":[{"internalType":"contract IERC1155","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"ERC20Interface","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_orderNonce","type":"uint256"},{"internalType":"uint256","name":"_editionNumber","type":"uint256"}],"name":"acceptOffer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"admin","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"bid","outputs":[{"internalType":"address","name":"bidder","type":"address"},{"internalType":"uint256","name":"bidValue","type":"uint256"},{"internalType":"uint256","name":"timeStamp","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256[]","name":"ids","type":"uint256[]"},{"internalType":"uint256[]","name":"editionNumbers","type":"uint256[]"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"bulkTransfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"},{"internalType":"uint256","name":"_editionNumber","type":"uint256"}],"name":"burnTokenEdition","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_orderNonce","type":"uint256"},{"internalType":"uint256","name":"_editionNumber","type":"uint256"},{"internalType":"uint256","name":"_tokenAmount","type":"uint256"}],"name":"buyNow","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_orderNonce","type":"uint256"},{"internalType":"uint256","name":"_editionNumber","type":"uint256"}],"name":"cancelSaleOrder","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_admin","type":"address"}],"name":"changeAdmin","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_orderNonce","type":"uint256"},{"internalType":"uint256","name":"_editionNumber","type":"uint256"}],"name":"claimAfterAuction","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_orderNonce","type":"uint256"},{"internalType":"uint256","name":"_editionNumber","type":"uint256"}],"name":"claimBack","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"},{"internalType":"uint256","name":"_editionNumber","type":"uint256"}],"name":"currentHolder","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"fee","outputs":[{"internalType":"uint8","name":"platformCutFirstHand","type":"uint8"},{"internalType":"uint8","name":"platformCutSecondHand","type":"uint8"},{"internalType":"uint8","name":"creatorRoyalty","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"flexPlatFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"name":"onERC1155Received","outputs":[{"internalType":"bytes4","name":"","type":"bytes4"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"order","outputs":[{"internalType":"address","name":"seller","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"pricePerNFT","type":"uint256"},{"internalType":"uint256","name":"saleType","type":"uint256"},{"internalType":"uint256","name":"timeline","type":"uint256"},{"internalType":"address","name":"paymentToken","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"orderNonce","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_orderNonce","type":"uint256"},{"internalType":"uint256","name":"_editionNumber","type":"uint256"},{"internalType":"uint256","name":"_tokenAmount","type":"uint256"}],"name":"placeBid","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_creator","type":"address"},{"internalType":"uint256","name":"_tokenId","type":"uint256"},{"internalType":"uint256","name":"_editions","type":"uint256"},{"internalType":"uint256","name":"_pricePerNFT","type":"uint256"},{"internalType":"uint256","name":"_saleType","type":"uint256"},{"internalType":"uint256","name":"_timeline","type":"uint256"},{"internalType":"uint256","name":"_adminPlatformFee","type":"uint256"},{"internalType":"address","name":"_paymentToken","type":"address"}],"name":"placeOrder","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"},{"internalType":"uint256","name":"_editionNumber","type":"uint256"},{"internalType":"uint256","name":"_pricePerNFT","type":"uint256"},{"internalType":"uint256","name":"_saleType","type":"uint256"},{"internalType":"address","name":"_paymentToken","type":"address"}],"name":"placeSecondHandOrder","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"},{"internalType":"uint256","name":"_editionNumber","type":"uint256"},{"internalType":"uint256","name":"_pricePerNFT","type":"uint256"},{"internalType":"address","name":"_paymentToken","type":"address"}],"name":"requestOffer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"secondHand","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"secondHandOrder","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint8","name":"_firstHandPlatFee","type":"uint8"},{"internalType":"uint8","name":"_secondHandPlatfee","type":"uint8"},{"internalType":"uint8","name":"_creatorRoyalty","type":"uint8"}],"name":"setFees","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_tokenAddress","type":"address"}],"name":"setTokenAddress","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tokenAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"tokenEditions","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"editionNumber","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}]')},187:function(e){e.exports=JSON.parse('[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"tokens","type":"uint256"}],"name":"approve","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"from","type":"address"},{"name":"to","type":"address"},{"name":"tokens","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"_totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"tokenOwner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"acceptOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"a","type":"uint256"},{"name":"b","type":"uint256"}],"name":"safeSub","outputs":[{"name":"c","type":"uint256"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":false,"inputs":[{"name":"to","type":"address"},{"name":"tokens","type":"uint256"}],"name":"transfer","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"a","type":"uint256"},{"name":"b","type":"uint256"}],"name":"safeDiv","outputs":[{"name":"c","type":"uint256"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"tokens","type":"uint256"},{"name":"data","type":"bytes"}],"name":"approveAndCall","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"a","type":"uint256"},{"name":"b","type":"uint256"}],"name":"safeMul","outputs":[{"name":"c","type":"uint256"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[],"name":"newOwner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"tokenAddress","type":"address"},{"name":"tokens","type":"uint256"}],"name":"transferAnyERC20Token","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"tokenOwner","type":"address"},{"name":"spender","type":"address"}],"name":"allowance","outputs":[{"name":"remaining","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"a","type":"uint256"},{"name":"b","type":"uint256"}],"name":"safeAdd","outputs":[{"name":"c","type":"uint256"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":false,"inputs":[{"name":"_newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"tokens","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"tokenOwner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"tokens","type":"uint256"}],"name":"Approval","type":"event"}]')},222:function(e,t){},223:function(e,t){},227:function(e,t){},228:function(e,t){},230:function(e,t){},231:function(e,t){}}]);
//# sourceMappingURL=10.b7737c0d.chunk.js.map