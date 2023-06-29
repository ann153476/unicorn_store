import {
  gender,
  names_unicorns_ua,
  names_unicorns_en,
} from './names_unicorns.js';
import arr from './imports.js';
import gf from '../../../public/img/genger/female.png';
import gm from '../../../public/img/genger/male.png';
console.log(gender, '<');
let unicorns_items = [];
for (let i = 0; i < names_unicorns_ua.length; i++) {
  let g = 0;
  if (gender[i]) {
    g = gf;
  } else {
    g = gm;
  }
  var obj = {
    id: i,
    age: Math.trunc(Math.random() * (100 - 1) + 1),
    name_en: names_unicorns_en[i],
    name_ua: names_unicorns_ua[i],
    cost: Math.trunc(Math.random() * (100000 - 10000) + 10000),
    img: arr[i],
    gender: g,
  };
  unicorns_items.push(obj);
}

export default unicorns_items;
