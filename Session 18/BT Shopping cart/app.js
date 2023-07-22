let openShopping = document.querySelector(".shopping");
let closeShopping = document.querySelector(".closeShopping");
let body = document.querySelector("body");

openShopping.addEventListener("click", () => {
  body.classList.add("active");
});
closeShopping.addEventListener("click", () => {
  body.classList.remove("active");
});

let products = [
  {
    id: 1,
    name: "PRODUCT NAME 1",
    image: "1.jpg",
    price: 120000,
  },
  {
    id: 2,
    name: "PRODUCT NAME 2",
    image: "2.jpg",
    price: 120000,
  },
  {
    id: 3,
    name: "PRODUCT NAME 3",
    image: "3.jpg",
    price: 220000,
  },
  {
    id: 4,
    name: "PRODUCT NAME 4",
    image: "4.jpg",
    price: 123000,
  },
  {
    id: 5,
    name: "PRODUCT NAME 5",
    image: "5.jpg",
    price: 320000,
  },
  {
    id: 6,
    name: "PRODUCT NAME 6",
    image: "6.jpg",
    price: 120000,
  },
];
