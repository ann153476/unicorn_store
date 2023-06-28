function e(e,n,a,i){Object.defineProperty(e,n,{get:a,set:i,enumerable:!0,configurable:!0})}function n(e){return e&&e.__esModule?e.default:e}var a="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={},r={},t=a.parcelRequirea79b;null==t&&((t=function(e){if(e in i)return i[e].exports;if(e in r){var n=r[e];delete r[e];var a={id:e,exports:{}};return i[e]=a,n.call(a.exports,a,a.exports),a.exports}var t=Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}).register=function(e,n){r[e]=n},a.parcelRequirea79b=t),t.register("kyEFX",function(n,a){"use strict";e(n.exports,"register",function(){return i},function(e){return i=e}),e(n.exports,"resolve",function(){return r},function(e){return r=e});var i,r,t={};i=function(e){for(var n=Object.keys(e),a=0;a<n.length;a++)t[n[a]]=e[n[a]]},r=function(e){var n=t[e];if(null==n)throw Error("Could not resolve bundle with id "+e);return n}}),t("kyEFX").register(JSON.parse('{"5ZPII":"index.c0c4285b.js","6RkRa":"symbol-defs.ece469dd.svg","5R3cd":"unicorn (45).b650c251.png"}'));var g=unicorns_items=[{name:"Iris",age:675,gender:"male",style:"magic",cost:25e4,img:"../img/unicorn(1).png"},{name:"Mystique",age:456,gender:"female",style:"magic",cost:45e3,img:"../img/unicorn(2).png"},{name:"Luna",age:834,gender:"female",style:"magic",cost:72e3,img:"../img/unicorn(3).png"},{name:"Celestia",age:245,gender:"female",style:"magic",cost:31e3,img:"unicorn (4)"},{name:"Apollo",age:567,gender:"male",style:"magic",cost:89e3,img:"unicorn (5)"},{name:"Stardust",age:712,gender:"female",style:"magic",cost:54e3,img:"unicorn (6)"},{name:"Thunder",age:389,gender:"male",style:"magic",cost:18e3,img:"unicorn (7)"},{name:"Novaya",age:926,gender:"female",style:"magic",cost:96e3,img:"unicorn (8)"},{name:"Blaze",age:173,gender:"male",style:"magic",cost:15e3,img:"unicorn (9)"},{name:"Aurora",age:512,gender:"female",style:"magic",cost:32e3,img:"unicorn (10)"},{name:"Shadow",age:648,gender:"male",style:"magic",cost:78e3,img:"unicorn (11)"},{name:"Lily",age:287,gender:"female",style:"magic",cost:41e3,img:"unicorn (12)"},{name:"Spirit",age:731,gender:"male",style:"magic",cost:62e3,img:"unicorn (13)"},{name:"Pearl",age:429,gender:"female",style:"magic",cost:56e3,img:"unicorn (14)"},{name:"Storm",age:567,gender:"male",style:"magic",cost:23e3,img:"unicorn (15)"},{name:"Crystal",age:825,gender:"female",style:"magic",cost:79e3,img:"unicorn (16)"},{name:"Midnight",age:193,gender:"male",style:"magic",cost:26e3,img:"unicorn (17)"},{name:"Sapphire",age:385,gender:"female",style:"magic",cost:37e3,img:"unicorn (18)"},{name:"Thunderbolt",age:712,gender:"male",style:"magic",cost:84e3,img:"unicorn (19)"},{name:"Rainbow",age:281,gender:"female",style:"magic",cost:44e3,img:"unicorn (20)"},{name:"Lucky",age:521,gender:"male",style:"magic",cost:27e3,img:"unicorn (21)"},{name:"Diamond",age:936,gender:"female",style:"magic",cost:93e3,img:"unicorn (22)"},{name:"Diamond",age:936,gender:"female",style:"magic",cost:93e3,img:"unicorn (22)"},{name:"Stellar",age:587,gender:"male",style:"magic",cost:56e3,img:"unicorn (23)"},{name:"Twilight",age:215,gender:"female",style:"magic",cost:32e3,img:"unicorn (24)"},{name:"Cosmo",age:459,gender:"male",style:"magic",cost:48e3,img:"unicorn (25)"},{name:"Nova",age:784,gender:"female",style:"magic",cost:67e3,img:"unicorn (26)"}],o={};o=new URL(t("kyEFX").resolve("6RkRa"),import.meta.url).toString();var c={};c=new URL(t("kyEFX").resolve("5R3cd"),import.meta.url).toString();let m=g.map((e,a)=>`<div id="c${a}" class="card">
        <div class="card__box">
          <svg class="svg__h">
            <use href="${n(o)}#icon-heart"></use>
          </svg>
          <svg class="svg__b">
            <use href="${n(o)}#icon-basket"></use>
          </svg>
        </div>
        <img src="${n(c)}" alt="Img" />
        <div class="card__box_text">
          <div class="card__items">
            <p>name :</p>
            <p>age :</p>
            <p>gender :</p>
            <p>style :</p>
            <p>cost :</p>
          </div>
          <div class="card__description">
            <p>${e.name}</p>
            <p>${e.age}</p>
            <p>${e.gender}</p>
            <p>${e.style}</p>
            <p>${e.cost}</p>
          </div>
        </div>
      </div>`).join("");const s=document.querySelector("#root");document.addEventListener("DOMContentLoaded",function(){s.innerHTML=m});
//# sourceMappingURL=index.c0c4285b.js.map
