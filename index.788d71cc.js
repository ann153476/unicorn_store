function e(e,n,r,a){Object.defineProperty(e,n,{get:r,set:a,enumerable:!0,configurable:!0})}function n(e){return e&&e.__esModule?e.default:e}var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a={},t={},o=r.parcelRequirea79b;null==o&&((o=function(e){if(e in a)return a[e].exports;if(e in t){var n=t[e];delete t[e];var r={id:e,exports:{}};return a[e]=r,n.call(r.exports,r,r.exports),r.exports}var o=Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,n){t[e]=n},r.parcelRequirea79b=o),o.register("kyEFX",function(n,r){"use strict";e(n.exports,"register",function(){return a},function(e){return a=e}),e(n.exports,"resolve",function(){return t},function(e){return t=e});var a,t,o={};a=function(e){for(var n=Object.keys(e),r=0;r<n.length;r++)o[n[r]]=e[n[r]]},t=function(e){var n=o[e];if(null==n)throw Error("Could not resolve bundle with id "+e);return n}}),o("kyEFX").register(JSON.parse('{"5ZPII":"index.788d71cc.js","eFbsX":"unicorn (1).868107e5.png","6RkRa":"symbol-defs.ece469dd.svg"}'));var i=unicorns_items=[{name:"Iris",age:675,gender:"male",style:"",cost:25e4,img:n(new URL(o("kyEFX").resolve("eFbsX"),import.meta.url).toString())},{name:"Mystique",age:456,gender:"female",style:"",cost:45e3,img:"unicorn (2)"},{name:"Luna",age:834,gender:"female",style:"",cost:72e3,img:"unicorn (3)"},{name:"Celestia",age:245,gender:"female",style:"",cost:31e3,img:"unicorn (4)"},{name:"Apollo",age:567,gender:"male",style:"",cost:89e3,img:"unicorn (5)"},{name:"Stardust",age:712,gender:"female",style:"",cost:54e3,img:"unicorn (6)"},{name:"Thunder",age:389,gender:"male",style:"",cost:18e3,img:"unicorn (7)"},{name:"Novaya",age:926,gender:"female",style:"",cost:96e3,img:"unicorn (8)"},{name:"Blaze",age:173,gender:"male",style:"",cost:15e3,img:"unicorn (9)"},{name:"Aurora",age:512,gender:"female",style:"",cost:32e3,img:"unicorn (10)"},{name:"Shadow",age:648,gender:"male",style:"",cost:78e3,img:"unicorn (11)"},{name:"Lily",age:287,gender:"female",style:"",cost:41e3,img:"unicorn (12)"},{name:"Spirit",age:731,gender:"male",style:"",cost:62e3,img:"unicorn (13)"},{name:"Pearl",age:429,gender:"female",style:"",cost:56e3,img:"unicorn (14)"},{name:"Storm",age:567,gender:"male",style:"",cost:23e3,img:"unicorn (15)"},{name:"Crystal",age:825,gender:"female",style:"",cost:79e3,img:"unicorn (16)"},{name:"Midnight",age:193,gender:"male",style:"",cost:26e3,img:"unicorn (17)"},{name:"Sapphire",age:385,gender:"female",style:"",cost:37e3,img:"unicorn (18)"},{name:"Thunderbolt",age:712,gender:"male",style:"",cost:84e3,img:"unicorn (19)"},{name:"Rainbow",age:281,gender:"female",style:"",cost:44e3,img:"unicorn (20)"},{name:"Lucky",age:521,gender:"male",style:"",cost:27e3,img:"unicorn (21)"},{name:"Diamond",age:936,gender:"female",style:"",cost:93e3,img:"unicorn (22)"},{name:"Diamond",age:936,gender:"female",style:"",cost:93e3,img:"unicorn (22)"},{name:"Stellar",age:587,gender:"male",style:"",cost:56e3,img:"unicorn (23)"},{name:"Twilight",age:215,gender:"female",style:"",cost:32e3,img:"unicorn (24)"},{name:"Cosmo",age:459,gender:"male",style:"",cost:48e3,img:"unicorn (25)"},{name:"Nova",age:784,gender:"female",style:"",cost:67e3,img:"unicorn (26)"}],s={};s=new URL(o("kyEFX").resolve("6RkRa"),import.meta.url).toString();let g=i.map((e,r)=>`<div id="c${r}" class="card">
        <div class="card__box">
          <svg class="svg__h">
            <use href="${n(s)}#icon-heart"></use>
          </svg>
          <svg class="svg__b">
            <use href="${n(s)}#icon-basket"></use>
          </svg>
        </div>
        <img src="${e.img}" />
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
      </div>`).join("");console.log("oycyfx");const l=document.querySelector("#root");document.addEventListener("DOMContentLoaded",function(){l.insertAdjacentHTML("beforeend",g)});
//# sourceMappingURL=index.788d71cc.js.map
