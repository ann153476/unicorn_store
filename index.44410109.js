!function(){function e(e,r,a,n){Object.defineProperty(e,r,{get:a,set:n,enumerable:!0,configurable:!0})}function r(e){return e&&e.__esModule?e.default:e}var a="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},i=a.parcelRequirea79b;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in t){var r=t[e];delete t[e];var a={id:e,exports:{}};return n[e]=a,r.call(a.exports,a,a.exports),a.exports}var i=Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,r){t[e]=r},a.parcelRequirea79b=i),i.register("iE7OH",function(r,a){"use strict";e(r.exports,"register",function(){return n},function(e){return n=e}),e(r.exports,"resolve",function(){return t},function(e){return t=e});var n,t,i={};n=function(e){for(var r=Object.keys(e),a=0;a<r.length;a++)i[r[a]]=e[r[a]]},t=function(e){var r=i[e];if(null==r)throw Error("Could not resolve bundle with id "+e);return r}}),i.register("aNJCr",function(r,a){e(r.exports,"getBundleURL",function(){return n},function(e){return n=e});"use strict";var n,t={};n=function(e){var r=t[e];return r||(r=function(){try{throw Error()}catch(r){var e=(""+r.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);if(e)return(""+e[2]).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}return"/"}(),t[e]=r),r}}),i("iE7OH").register(JSON.parse('{"EVgbq":"index.44410109.js","cAIye":"unicorn(1).c2f6f20b.png","dhIzO":"unicorn(2).bce47ea0.png","amtt3":"unicorn(3).41ab3e33.png","92stz":"unicorn(4).2c1736fb.png","klvYu":"unicorn(5).b853d061.png","2z0HN":"unicorn(6).52016025.png","g0XXV":"symbol-defs.ece469dd.svg"}'));let o=["Аметист","Аврора","Блісс","Валькірія","Гвіневра","Гая","Гавріїл","Діана","Ельза","Емеральд","Єва","Жасмін","Зефір","Зірафа","Ілларія","Ірида","Ізольда","Імеда","Йоган","Каліпсо","Каріна","Лаванда","Лумін","Маделін","Магія","Мелодія","Мірабел","Німфа","Ніка","Олівія","Пандора","Перла","Роксан","Рубін","Сабрін","Селестія","Сільвія","Твіл","Талісман","Урсул","Фея","Флора","Хармонія","Цезар","Чарівн","Шарлотт","Шиммер","Щаст","Юлі","Ясн","Ясмін","Ягод","Ярк","Яр","Явор","Яскрав","Ярослав","Якір","Яворон","Янік","Ярем","Яхонт","Ярославн","Ярославіт","Айріс","Блейз","Корал","Ділан","Ензо","Флін","Гарет","Харпер","Ізаак","Джейд","Кайл","Леон","Майкл","Ноа","Олівер","Пенелопа","Раян","Софія","Тревор","Уїллоу","Ягідниц","Ягідниця"],l=["Amethyst","Aurora","Bliss","Valkyrie","Guinevere","Gaia","Gabriel","Diana","Elsa","Emerald","Eva","Jasmine","Zephyr","Zirafa","Hilary","Iris","Isolde","Imeda","Johan","Calypso","Karina","Lavender","Lumine","Madeline","Magic","Melody","Mirabel","Nymph","Nika","Olivia","Pandora","Pearl","Roxane","Ruby","Sabrina","Celestia","Sylvia","Twilight","Talisman","Ursula","Fairy","Flora","Harmony","Caesar","Enchantress","Charlotte","Shimmer","Luck","Julia","Yasna","Jasmine","Berry","Bright","Ray","Maple","Shining","Yaroslav","Anchor","Raven","Yanic","Jeremy","Jacinth","Yaroslavna","Yaroslavite","Iris","Blaze","Coral","Dylan","Enzo","Flynn","Garrett","Harper","Isaac","Jade","Kyle","Leon","Michael","Noah","Oliver","Penelope","Ryan","Sophia","Trevor","Willow","Berry","Berrylicious"];var s={};s=i("aNJCr").getBundleURL("EVgbq")+i("iE7OH").resolve("cAIye");var u={};u=i("aNJCr").getBundleURL("EVgbq")+i("iE7OH").resolve("dhIzO");var c={};c=i("aNJCr").getBundleURL("EVgbq")+i("iE7OH").resolve("amtt3");var d={};d=i("aNJCr").getBundleURL("EVgbq")+i("iE7OH").resolve("92stz");var v={};v=i("aNJCr").getBundleURL("EVgbq")+i("iE7OH").resolve("klvYu");var g={};g=i("aNJCr").getBundleURL("EVgbq")+i("iE7OH").resolve("2z0HN");let p=[r(s),r(u),r(c),r(d),r(v),r(g)],f=[];for(let e=0;e<o.length;e++){var b={id:e,age:Math.trunc(99*Math.random()+1),name_en:l[e],name_ua:o[e],cost:Math.trunc(9e4*Math.random()+1e4),img:p[e]};f.push(b)}console.log(f);var h={};h=i("aNJCr").getBundleURL("EVgbq")+i("iE7OH").resolve("g0XXV");let _=f.map((e,a)=>`<div id="c${a}" class="card">
        <div class="card__box">
          <svg class="svg__h">
            <use href="${r(h)}#icon-heart"></use>
          </svg>
          <svg class="svg__b">
            <use href="${r(h)}#icon-basket"></use>
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
      </div>`).join(""),m=document.querySelector("#root");document.addEventListener("DOMContentLoaded",function(){m.innerHTML=_}),console.log(r(s))}();
//# sourceMappingURL=index.44410109.js.map
