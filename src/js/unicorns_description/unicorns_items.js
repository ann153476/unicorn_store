import { names_unicorns_ua, names_unicorns_en } from './names_unicorns.js';
import u1 from '../../../assets/img/unicornsimg/unicorn(1).png';
import u2 from '../../../assets/img/unicornsimg/unicorn(2).png';
import u3 from '../../../assets/img/unicornsimg/unicorn(3).png';
import u4 from '../../../assets/img/unicornsimg/unicorn(4).png';
import u5 from '../../../assets/img/unicornsimg/unicorn(5).png';
import u6 from '../../../assets/img/unicornsimg/unicorn(6).png';

const arr = [u1, u2, u3, u4, u5, u6];
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
console.log(unicorns_items);
export default unicorns_items;
