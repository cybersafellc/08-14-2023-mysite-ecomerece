let viewImages = document.getElementById("view-images");
let clickImage1 = document.getElementById("image1");
let clickImage2 = document.getElementById("image2");
let clickImage3 = document.getElementById("image3");
let clickImage4 = document.getElementById("image4");

clickImage1.addEventListener("click", function () {
  viewImages.src = "assets/img/items/product-1/img-1.png";
});
clickImage2.addEventListener("click", function () {
  viewImages.src = "assets/img/items/product-1/img-2.png";
});

clickImage3.addEventListener("click", function () {
  viewImages.src = "assets/img/items/product-1/img-3.png";
});
clickImage4.addEventListener("click", function () {
  viewImages.src = "assets/img/items/product-1/img-4.png";
});

// description
let viewMore = document.getElementById("view-more");
let viewShorts = document.getElementById("view-shorts");
let textDescription = document.getElementById("description");

viewMore.addEventListener("click", function () {
  textDescription.classList.toggle("overflow-hidden");
  textDescription.classList.toggle("height100");
  viewMore.classList.toggle("d-none");
  viewShorts.classList.toggle("d-none");
});

viewShorts.addEventListener("click", function () {
  textDescription.classList.toggle("overflow-hidden");
  textDescription.classList.toggle("height100");
  viewMore.classList.toggle("d-none");
  viewShorts.classList.toggle("d-none");
});

// product1 cekout
let size;
let jumlah;
let butttonCekoutProducy1 = document.getElementById("buy-now-product1");
let butttonCekoutProducy2 = document.getElementById("buy-now-product-shoope");
let butttonCekoutProducy3 = document.getElementById("buy-now-product-tokopedia");
let jumlahProduct1 = document.getElementById("jumlah-product1");
let sizeProduct1 = document.getElementById("size-product1");
butttonCekoutProducy1.addEventListener("click", function () {
  jumlah = jumlahProduct1.value;
  if (sizeProduct1.value == 1) {
    size = "M";
  } else if (sizeProduct1.value == 2) {
    size = "L";
  } else if (sizeProduct1.value == 3) {
    size = "XL";
  }
  if (size == undefined || size == null) {
    sizeProduct1.classList.remove("border-dark");
    sizeProduct1.classList.add("border-danger");
    sizeProduct1.classList.add("border-3");
  } else {
    window.location.href = `https://api.whatsapp.com/send?phone=6285728234562&text=Halo%20admin%20Sirclouth,%0ASaya%20ingin%20order!%0A---Items---%0A${jumlah}x%20Kaos%20Lolipophaha%20(${size})%0A%0A---ALamat---%0Aisi%20alamat%20anda%0ANama%20:%0Apos%20:`;
  }
});

butttonCekoutProducy2.addEventListener("click", function () {
  window.location.href = `https://shopee.co.id`;
});
butttonCekoutProducy3.addEventListener("click", function () {
  window.location.href = `https://tokopedia.com`;
});
