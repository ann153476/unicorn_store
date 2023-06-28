import unicorns_items from './unicorns_description/unicorns_items';
import svg from '../../assets/svg/symbol-defs.svg';
import u1 from '../../assets/img/unicornsimg/unicorn(1).png';

let markup = unicorns_items
  .map(
    (item, index) =>
      `<div id="c${index}" class="card">
        <div class="card__box">
          <svg class="svg__h">
            <use href="${svg}#icon-heart"></use>
          </svg>
          <svg class="svg__b">
            <use href="${svg}#icon-basket"></use>
          </svg>
        </div>
  <img src="${item.img}" alt="unicorn">
        <div class="card__box_text">
          <div class="card__items">
            <p>ім'я :</p>
            <p>name :</p>
            <p>age :</p>
            <p>style :</p>
            <p>cost :</p>
          </div>
          <div class="card__description">
            <p>${item.name_ua}</p>
            <p>${item.name_en}</p>
            <p>${item.age}</p>
            <p>${item.style}</p>
            <p>${item.cost}</p>
          </div>
        </div>
      </div>`
  )
  .join('');

const root = document.querySelector('#root');

document.addEventListener('DOMContentLoaded', function () {
  root.innerHTML = markup;
});
