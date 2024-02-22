const counter = document.querySelector(".counter");
const charge = document.querySelector("#charge");
let i = 0;


function loading() {

  counter.textContent = i + "%";
  charge.style.width = i + "%";
  i++;

   if (i < 101) {
    setTimeout(loading, 15);
  }

}

loading();

