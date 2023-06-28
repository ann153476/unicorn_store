function e(e,r,a,n){Object.defineProperty(e,r,{get:a,set:n,enumerable:!0,configurable:!0})}function r(e){return e&&e.__esModule?e.default:e}var a="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},t=a.parcelRequirea79b;null==t&&((t=function(e){if(e in n)return n[e].exports;if(e in o){var r=o[e];delete o[e];var a={id:e,exports:{}};return n[e]=a,r.call(a.exports,a,a.exports),a.exports}var t=Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}).register=function(e,r){o[e]=r},a.parcelRequirea79b=t),t.register("kyEFX",function(r,a){"use strict";e(r.exports,"register",function(){return n},function(e){return n=e}),e(r.exports,"resolve",function(){return o},function(e){return o=e});var n,o,t={};n=function(e){for(var r=Object.keys(e),a=0;a<r.length;a++)t[r[a]]=e[r[a]]},o=function(e){var r=t[e];if(null==r)throw Error("Could not resolve bundle with id "+e);return r}}),t("kyEFX").register(JSON.parse('{"5ZPII":"index.eaa51b84.js","rXveo":"unicorn(1).c2f6f20b.png","aGryC":"unicorn(2).bce47ea0.png","gYltJ":"unicorn(3).41ab3e33.png","fZss7":"unicorn(4).2c1736fb.png","lhy26":"unicorn(5).b853d061.png","h8OQY":"unicorn(6).52016025.png","fBmV8":"symbol-defs.ece469dd.svg"}'));const i=["Аметист","Аврора","Блісс","Валькірія","Гвіневра","Гая","Гавріїл","Діана","Ельза","Емеральд","Єва","Жасмін","Зефір","Зірафа","Ілларія","Ірида","Ізольда","Імеда","Йоган","Каліпсо","Каріна","Лаванда","Лумін","Маделін","Магія","Мелодія","Мірабел","Німфа","Ніка","Олівія","Пандора","Перла","Роксан","Рубін","Сабрін","Селестія","Сільвія","Твіл","Талісман","Урсул","Фея","Флора","Хармонія","Цезар","Чарівн","Шарлотт","Шиммер","Щаст","Юлі","Ясн","Ясмін","Ягод","Ярк","Яр","Явор","Яскрав","Ярослав","Якір","Яворон","Янік","Ярем","Яхонт","Ярославн","Ярославіт","Айріс","Блейз","Корал","Ділан","Ензо","Флін","Гарет","Харпер","Ізаак","Джейд","Кайл","Леон","Майкл","Ноа","Олівер","Пенелопа","Раян","Софія","Тревор","Уїллоу","Ягідниц","Ягідниця"],l=["Amethyst","Aurora","Bliss","Valkyrie","Guinevere","Gaia","Gabriel","Diana","Elsa","Emerald","Eva","Jasmine","Zephyr","Zirafa","Hilary","Iris","Isolde","Imeda","Johan","Calypso","Karina","Lavender","Lumine","Madeline","Magic","Melody","Mirabel","Nymph","Nika","Olivia","Pandora","Pearl","Roxane","Ruby","Sabrina","Celestia","Sylvia","Twilight","Talisman","Ursula","Fairy","Flora","Harmony","Caesar","Enchantress","Charlotte","Shimmer","Luck","Julia","Yasna","Jasmine","Berry","Bright","Ray","Maple","Shining","Yaroslav","Anchor","Raven","Yanic","Jeremy","Jacinth","Yaroslavna","Yaroslavite","Iris","Blaze","Coral","Dylan","Enzo","Flynn","Garrett","Harper","Isaac","Jade","Kyle","Leon","Michael","Noah","Oliver","Penelope","Ryan","Sophia","Trevor","Willow","Berry","Berrylicious"];var s={};s=new URL(t("kyEFX").resolve("rXveo"),import.meta.url).toString();var c={};c=new URL(t("kyEFX").resolve("aGryC"),import.meta.url).toString();var u={};u=new URL(t("kyEFX").resolve("gYltJ"),import.meta.url).toString();var d={};d=new URL(t("kyEFX").resolve("fZss7"),import.meta.url).toString();var p={};p=new URL(t("kyEFX").resolve("lhy26"),import.meta.url).toString();var v={};v=new URL(t("kyEFX").resolve("h8OQY"),import.meta.url).toString();const g=[r(s),r(c),r(u),r(d),r(p),r(v)];let f=[];for(let e=0;e<i.length;e++){var m={id:e,age:Math.trunc(99*Math.random()+1),name_en:l[e],name_ua:i[e],cost:Math.trunc(9e4*Math.random()+1e4),img:g[e]};f.push(m)}console.log(f);var y={};y=new URL(t("kyEFX").resolve("fBmV8"),import.meta.url).toString();let _=f.map((e,a)=>`<div id="c${a}" class="card">
        <div class="card__box">
          <svg class="svg__h">
            <use href="${r(y)}#icon-heart"></use>
          </svg>
          <svg class="svg__b">
            <use href="${r(y)}#icon-basket"></use>
          </svg>
        </div>
  <img src="${e.img}" alt="unicorn">
        <div class="card__box_text">
          <div class="card__items">
            <p>ім'я :</p>
            <p>name :</p>
            <p>age :</p>
            <p>style :</p>
            <p>cost :</p>
          </div>
          <div class="card__description">
            <p>${e.name_ua}</p>
            <p>${e.name_en}</p>
            <p>${e.age}</p>
            <p>${e.style}</p>
            <p>${e.cost}</p>
          </div>
        </div>
      </div>`).join("");const h=document.querySelector("#root");document.addEventListener("DOMContentLoaded",function(){h.innerHTML=_}),console.log(r(s));
//# sourceMappingURL=index.eaa51b84.js.map
