!function(){function e(e,n,r,t){Object.defineProperty(e,n,{get:r,set:t,enumerable:!0,configurable:!0})}function n(e){return e&&e.__esModule?e.default:e}var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},a={},i=r.parcelRequirea79b;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in a){var n=a[e];delete a[e];var r={id:e,exports:{}};return t[e]=r,n.call(r.exports,r,r.exports),r.exports}var i=Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){a[e]=n},r.parcelRequirea79b=i),i.register("iE7OH",function(n,r){"use strict";e(n.exports,"register",function(){return t},function(e){return t=e}),e(n.exports,"resolve",function(){return a},function(e){return a=e});var t,a,i={};t=function(e){for(var n=Object.keys(e),r=0;r<n.length;r++)i[n[r]]=e[n[r]]},a=function(e){var n=i[e];if(null==n)throw Error("Could not resolve bundle with id "+e);return n}}),i.register("aNJCr",function(n,r){e(n.exports,"getBundleURL",function(){return t},function(e){return t=e});"use strict";var t,a={};t=function(e){var n=a[e];return n||(n=function(){try{throw Error()}catch(n){var e=(""+n.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);if(e)return(""+e[2]).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}return"/"}(),a[e]=n),n}}),i("iE7OH").register(JSON.parse('{"EVgbq":"index.d5e397ba.js","649RQ":"unicorn (1).868107e5.png","4BzQQ":"symbol-defs.ece469dd.svg"}'));var o=unicorns_items=[{name:"Iris",age:675,gender:"male",style:"",cost:25e4,img:n(i("aNJCr").getBundleURL("EVgbq")+i("iE7OH").resolve("649RQ"))},{name:"Mystique",age:456,gender:"female",style:"",cost:45e3,img:"unicorn (2)"},{name:"Luna",age:834,gender:"female",style:"",cost:72e3,img:"unicorn (3)"},{name:"Celestia",age:245,gender:"female",style:"",cost:31e3,img:"unicorn (4)"},{name:"Apollo",age:567,gender:"male",style:"",cost:89e3,img:"unicorn (5)"},{name:"Stardust",age:712,gender:"female",style:"",cost:54e3,img:"unicorn (6)"},{name:"Thunder",age:389,gender:"male",style:"",cost:18e3,img:"unicorn (7)"},{name:"Novaya",age:926,gender:"female",style:"",cost:96e3,img:"unicorn (8)"},{name:"Blaze",age:173,gender:"male",style:"",cost:15e3,img:"unicorn (9)"},{name:"Aurora",age:512,gender:"female",style:"",cost:32e3,img:"unicorn (10)"},{name:"Shadow",age:648,gender:"male",style:"",cost:78e3,img:"unicorn (11)"},{name:"Lily",age:287,gender:"female",style:"",cost:41e3,img:"unicorn (12)"},{name:"Spirit",age:731,gender:"male",style:"",cost:62e3,img:"unicorn (13)"},{name:"Pearl",age:429,gender:"female",style:"",cost:56e3,img:"unicorn (14)"},{name:"Storm",age:567,gender:"male",style:"",cost:23e3,img:"unicorn (15)"},{name:"Crystal",age:825,gender:"female",style:"",cost:79e3,img:"unicorn (16)"},{name:"Midnight",age:193,gender:"male",style:"",cost:26e3,img:"unicorn (17)"},{name:"Sapphire",age:385,gender:"female",style:"",cost:37e3,img:"unicorn (18)"},{name:"Thunderbolt",age:712,gender:"male",style:"",cost:84e3,img:"unicorn (19)"},{name:"Rainbow",age:281,gender:"female",style:"",cost:44e3,img:"unicorn (20)"},{name:"Lucky",age:521,gender:"male",style:"",cost:27e3,img:"unicorn (21)"},{name:"Diamond",age:936,gender:"female",style:"",cost:93e3,img:"unicorn (22)"},{name:"Diamond",age:936,gender:"female",style:"",cost:93e3,img:"unicorn (22)"},{name:"Stellar",age:587,gender:"male",style:"",cost:56e3,img:"unicorn (23)"},{name:"Twilight",age:215,gender:"female",style:"",cost:32e3,img:"unicorn (24)"},{name:"Cosmo",age:459,gender:"male",style:"",cost:48e3,img:"unicorn (25)"},{name:"Nova",age:784,gender:"female",style:"",cost:67e3,img:"unicorn (26)"}],s={};s=i("aNJCr").getBundleURL("EVgbq")+i("iE7OH").resolve("4BzQQ");let g=o.map((e,r)=>`<div id="c${r}" class="card">
        <div class="card__box">
          <svg class="svg__h">
            <use href="${n(s)}#icon-heart"></use>
          </svg>
          <svg class="svg__b">
            <use href="${n(s)}#icon-basket"></use>
          </svg>
        </div>
        <img src="../img/unicorn (${r}).png">
        <div class="card__box_text">
          <div class="card__items">

            <p>age :</p>
            <p>gender :</p>
            <p>style :</p>
            <p>cost :</p>
          </div>
          <div class="card__description">
            <p>${e.name}</p>
            <p>${e.age}</p>
            <p>${e.genger}</p>
            <p>${e.style}</p>
            <p>${e.cost}</p>
          </div>
        </div>
      </div>`).join(""),c=document.querySelector("#root");document.addEventListener("DOMContentLoaded",function(){c.innerHTML=g})}();
//# sourceMappingURL=index.d5e397ba.js.map
