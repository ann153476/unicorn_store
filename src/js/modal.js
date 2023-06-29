import unicorns_items from './unicorns_description/unicorns_items';
const root = document.querySelector("#root");
const overlay = document.querySelector(".overlay");

function open (e) {
    if (e.target.classList.contains('uni')) { 
          overlay.innerHTML = "";
  overlay.classList.toggle("is-hidden");
  
  const imageSrc = e.target.src;
  const image = document.createElement("img");
  image.src = imageSrc;
  overlay.appendChild(image);
    }else{return}
  
}
function close(e) {
  overlay.classList.toggle("is-hidden");

}
root.addEventListener('click', open)
overlay.addEventListener('click', close)