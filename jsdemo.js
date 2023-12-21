
const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "SAMSUNG",
    price: 1029,
    colors: [
      {
        code: "black",
        img: "https://images.samsung.com/is/image/samsung/p6pim/levant/2302/gallery/levant-galaxy-s23-s918-sm-s918bzkcmea-534853445?$650_519_PNG$",
      },
      {
        code: "lightblue",
        img: "https://images.samsung.com/is/image/samsung/p6pim/ca/2302/gallery/ca-galaxy-s23-s918-446805-sm-s918wlbaxac-534866648?$650_519_PNG$",
      },
    ],
  },

  {
    id: 2,
    title: "IPHONE",
    price: 1099,
    colors: [
      {
        code: "silver",
        img: "https://m.media-amazon.com/images/I/81dT7CUY6GL.jpg",
      },
      {
        code: "Purple",
        img: "https://www.imagineonline.store/cdn/shop/files/iPhone_14_Pro_Max_Deep_Purple_PDP_Image_Position-1a__WWEN_1445x.jpg?v=1692350010",
      },
    ],
  },
  {
    id: 3,
    title: "GOOGLE PIXEL",
    price: 999,
    colors: [
      {
        code: "gray",
        img: "https://assets.hardwarezone.com/img/2023/10/_Pixel-8_-Hazel.jpg",
      },
      {
        code: "lightblue",
        img: "https://storage.googleapis.com/gweb-uniblog-publish-prod/images/Pixel_8_Pro_in_Bay.max-936x936.format-webp.webp",
      },
    ],
  },
  {
    id: 4,
    title: "ONEPLUS",
    price: 799,
    colors: [
      {
        code: "green",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT24iEG8GboeDwt03j16GlbYfEC-eBNh49Wov2ETF261UeDLqn4GpYjURvJdJlFJyqAhoM",
      },
      {
        code: "black",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdJcZ0KUyph48NBVUf-PPPK0_3C18hlniGqfWbT_yxmuR0peJnIfpIYibX0fn_MOqz-6w",
      },
    ],
  },
];
const data = JSON.parse(localStorage.getItem('id'));
console.log(data);


const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    choosenProduct = products[index];

    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "$" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});
var form = document.getElementById('sheetdb-form');
        form.addEventListener("submit", e => {
          e.preventDefault();
          fetch(form.action, {
              method : "POST",
              body: new FormData(document.getElementById("sheetdb-form")),
          }).then(
              response => response.json()
          ).then((html) => {
window.open('page2.html', '_blank');

          });
        });