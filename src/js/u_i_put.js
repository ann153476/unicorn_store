import unicorns_items from './unicorns_description/unicorns_items';
import svg from '../img/symbol-defs.svg';
let markup = unicorns_items
  .map(
    (item, index) => `<div id="c${index}" class="card">
        <div class="card__box">
          <svg class="svg__h">
            <use href="${svg}#icon-heart"></use>
          </svg>
          <svg class="svg__b">
            <use href="${svg}#icon-basket"></use>
          </svg>
        </div>
        <img src="${item.img}" />
        <div class="card__box_text">
          <div class="card__items">
            
            <p>age :</p>
            <p>gender :</p>
            <p>style :</p>
            <p>cost :</p>
          </div>
          <div class="card__description">
            <p>${item.name}</p>
            <p>${item.age}</p>
            <p>${item.genger}</p>
            <p>${item.style}</p>
            <p>${item.cost}</p>
          </div>
        </div>
      </div>`
  )
  .join('');
console.log('oycyfx');
const root = document.querySelector('#root');
document.addEventListener('DOMContentLoaded', function () {
  root.insertAdjacentHTML('beforeend', markup);
});
