import { names_unicorns_ua, names_unicorns_en } from './names_unicorns.js';
import arr from './imports.js';
let unicorns_items = [];
for (let i = 0; i < names_unicorns_ua.length; i++) {
  var obj = {
    id: i,
    age: Math.trunc(Math.random() * (100 - 1) + 1),
    name_en: names_unicorns_en[i],
    name_ua: names_unicorns_ua[i],
    cost: Math.trunc(Math.random() * (100000 - 10000) + 10000),
    img: arr[i],
  };
  unicorns_items.push(obj);
}

export default unicorns_items;
