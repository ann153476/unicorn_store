import unicorns_items from './unicorns_description/unicorns_items';
import svg from '../../public/svg/symbol-defs.svg';

const root = document.querySelector('#root');
const s1 = document.querySelector('#s1');
const s2 = document.querySelector('#s2');
const s3 = document.querySelector('#s3');
const s4 = document.querySelector('#s4');
const s5 = document.querySelector('#s5');
const s6 = document.querySelector('#s6');
const s7 = document.querySelector('#s7');
const sA = document.querySelector('#sA');




const calcForUnicorns = (index) => {
  let unicornFiltr = [];
  for (let i = 0; i < unicorns_items.length; i++) {
    if (unicorns_items[i].style === index) {
      unicornFiltr.push(unicorns_items[i])
    }
  }
  return unicornFiltr;
};
  let a = "";
function printUnicorns(e) {
  let uniCalk = [];
  // a = e.target.id;
  // a = a.slice(1, 2);
  // a = Number(a);
  if (e.target.id) {
   uniCalk = calcForUnicorns(Number(e.target.id.slice(1, 2)));
  } else {
    uniCalk = unicorns_items;
  }
 

  console.log(a);
    // switch (e.target.id) {
    //   case "s1":
    //     uniCalk = calcForUnicorns(1);
    //     break;
    //   case "s2":
    //     uniCalk = calcForUnicorns(2);
    //     break;
    //   case "s3":
    //     uniCalk = calcForUnicorns(3);
    //     break;
    //   case "s4":
    //     uniCalk = calcForUnicorns(4);
    //     break;
    //   case "s5":
    //     uniCalk = calcForUnicorns(5);
    //     break;
    //   case "s6":
    //     uniCalk = calcForUnicorns(6);
    //     break;
    //   case "s7":
    //     uniCalk = calcForUnicorns(7);
    //     break;
    //   case "sA":
    // uniCalk=unicorns_items;
    //     break;
    //   default:
    //      uniCalk=unicorns_items;
    // }
  
 
 
  
    let markup = uniCalk
      .map(
        (item, index) =>
          `<div id="c${index}" class="card">
      <div class="gender">
    <img class="gender__img" src="${item.gender}"/>
</div>
        <div class="card__box">
          <svg class="svg__h">
            <use href="${svg}#icon-heart"></use>
          </svg>
          <svg class="svg__b">
            <use href="${svg}#icon-basket"></use>
          </svg>
        </div>
  <img class="uni" src='${item.img}' alt="Img" />
        <div class="card__box_text">
          <div class="card__items">
            <p>ім'я :</p>
            <p>name :</p>
            <p>age :</p>
            <p>cost :</p>
          </div>
          <div class="card__description">
            <p>${item.name_ua}</p>
            <p>${item.name_en}</p>
            <p>${item.age}</p>
            <p>${item.cost}</p>
          </div>
        </div>
      </div>`
      )
      .join('');
    root.innerHTML = markup;
  }


 
document.addEventListener('DOMContentLoaded', printUnicorns);
s1.addEventListener('click', printUnicorns);
s2.addEventListener('click', printUnicorns);
s3.addEventListener('click', printUnicorns);
s4.addEventListener('click', printUnicorns);
s5.addEventListener('click', printUnicorns);
s6.addEventListener('click', printUnicorns);
s7.addEventListener('click', printUnicorns);
sA.addEventListener('click', printUnicorns);