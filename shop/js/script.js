// all toogles
let toogleAll = document.querySelector("#all-tshirts");
let toogleTshirts = document.querySelector("#toggle-tshirts");
let toogleHoodies = document.querySelector("*#toogle-hoodies");
let toogleFootwares = document.querySelector("#toogle-footwares");
let tooglePants = document.querySelector("#toggle-pants");
let notfound = document.querySelector(".notfound");

// all type items
let tshirtsItem1 = document.querySelector("#tshirts-item1");
let tshirtsItem2 = document.querySelector("#tshirts-item2");
let tshirtsItem3 = document.querySelector("#tshirts-item3");
let tshirtsItem4 = document.querySelector("#tshirts-item4");
let hoodiesItem1 = document.querySelector("#hoodies-item1");
let hoodiesItem2 = document.querySelector("#hoodies-item2");
let hoodiesItem3 = document.querySelector("#hoodies-item3");
let hoodiesItem4 = document.querySelector("#hoodies-item4");
let footwareItems1 = document.querySelector("#footwears-item1");
let footwareItems2 = document.querySelector("#footwears-item2");
let footwareItems3 = document.querySelector("#footwears-item3");
let footwareItems4 = document.querySelector("#footwears-item4");
let pantsItems1 = document.querySelector("#pants-item1");
let pantsItems2 = document.querySelector("#pants-item2");
let pantsItems3 = document.querySelector("#pants-item3");
let pantsItems4 = document.querySelector("#pants-item4");

// toogle all click
toogleAll.addEventListener("click", function () {
  toogleAll.classList.add("border-bottom");
  toogleTshirts.classList.remove("border-bottom");
  toogleHoodies.classList.remove("border-bottom");
  toogleFootwares.classList.remove("border-bottom");
  tooglePants.classList.remove("border-bottom");

  tshirtsItem1.classList.remove("d-none");
  tshirtsItem2.classList.remove("d-none");
  tshirtsItem3.classList.remove("d-none");
  tshirtsItem4.classList.remove("d-none");
  hoodiesItem1.classList.remove("d-none");
  hoodiesItem2.classList.remove("d-none");
  hoodiesItem3.classList.remove("d-none");
  footwareItems1.classList.remove("d-none");
  notfound.classList.add("d-none");
});

// toogle tshirt click
toogleTshirts.addEventListener("click", function () {
  toogleAll.classList.remove("border-bottom");
  toogleTshirts.classList.add("border-bottom");
  toogleHoodies.classList.remove("border-bottom");
  toogleFootwares.classList.remove("border-bottom");
  tooglePants.classList.remove("border-bottom");

  tshirtsItem1.classList.remove("d-none");
  tshirtsItem2.classList.remove("d-none");
  tshirtsItem3.classList.remove("d-none");
  tshirtsItem4.classList.remove("d-none");
  hoodiesItem1.classList.add("d-none");
  hoodiesItem2.classList.add("d-none");
  hoodiesItem3.classList.add("d-none");
  footwareItems1.classList.add("d-none");
  notfound.classList.add("d-none");
});

// toogle hoodies click
toogleHoodies.addEventListener("click", function () {
  toogleAll.classList.remove("border-bottom");
  toogleTshirts.classList.remove("border-bottom");
  toogleHoodies.classList.add("border-bottom");
  toogleFootwares.classList.remove("border-bottom");
  tooglePants.classList.remove("border-bottom");

  tshirtsItem1.classList.add("d-none");
  tshirtsItem2.classList.add("d-none");
  tshirtsItem3.classList.add("d-none");
  tshirtsItem4.classList.add("d-none");
  hoodiesItem1.classList.remove("d-none");
  hoodiesItem2.classList.remove("d-none");
  hoodiesItem3.classList.remove("d-none");
  footwareItems1.classList.add("d-none");
  notfound.classList.add("d-none");
});

// toogle footwares click
toogleFootwares.addEventListener("click", function () {
  toogleAll.classList.remove("border-bottom");
  toogleTshirts.classList.remove("border-bottom");
  toogleHoodies.classList.remove("border-bottom");
  toogleFootwares.classList.add("border-bottom");
  tooglePants.classList.remove("border-bottom");

  tshirtsItem1.classList.add("d-none");
  tshirtsItem2.classList.add("d-none");
  tshirtsItem3.classList.add("d-none");
  tshirtsItem4.classList.add("d-none");
  hoodiesItem1.classList.add("d-none");
  hoodiesItem2.classList.add("d-none");
  hoodiesItem3.classList.add("d-none");
  footwareItems1.classList.remove("d-none");
  notfound.classList.add("d-none");
});

// toogle pants click
tooglePants.addEventListener("click", function () {
  toogleAll.classList.remove("border-bottom");
  toogleTshirts.classList.remove("border-bottom");
  toogleHoodies.classList.remove("border-bottom");
  toogleFootwares.classList.remove("border-bottom");
  tooglePants.classList.add("border-bottom");

  tshirtsItem1.classList.add("d-none");
  tshirtsItem2.classList.add("d-none");
  tshirtsItem3.classList.add("d-none");
  tshirtsItem4.classList.add("d-none");
  hoodiesItem1.classList.add("d-none");
  hoodiesItem2.classList.add("d-none");
  hoodiesItem3.classList.add("d-none");
  footwareItems1.classList.add("d-none");
  notfound.classList.remove("d-none");
});

// pegination
let previos = document.querySelector("#previos");
