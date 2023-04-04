var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

$('.sale_slick_box').slick({
  lazyLoad: 'ondemand',
  slidesToShow: 4,
  slidesToScroll: 2,
  prevArrow: $('.arrow-prev'),
  nextArrow: $('.arrow-next'),
  responsive: [{
    breakpoint: 1000,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
  }]
});

$('.why-we_slider').slick({
  lazyLoad: 'ondemand',
  slidesToShow: 2,
  slidesToScroll: 2,
  prevArrow: $('.fa-chevron-left'),
  nextArrow: $('.fa-chevron-right')
});

const modal = document.querySelector('.modal');
const closer = document.querySelector('.modal_close');
closer.addEventListener('click', () => {
  modal.classList.remove('on');
})
const showModal = () => {
  modal.classList.add('on');
}
const login = document.querySelector('.login');
login.addEventListener('click', showModal)

function getCard ({name, imgPath, price}) {
  const card = document.createElement('div');
  // card.classList.add('card-container');
  const imgContainer = document.createElement('div');
  imgContainer.classList.add('product-img-box');
  const img = document.createElement('img');
  img.src = imgPath;
  img.classList.add('product-img');
  imgContainer.append(img);
  card.appendChild(imgContainer);
  const footer = document.createElement('div');
  footer.classList.add('card-footer');
  // const cardIcons = document.createElement('div');
  // cardIcons.classList.add('card-icons');
  const priceEl = document.createElement('div');
  priceEl.classList.add('card-price');
  priceEl.innerText = price;
  const nameEl = document.createElement('div');
  nameEl.innerText = name;
  nameEl.classList.add('card-name');
  const moreButton = document.createElement('button');
  moreButton.classList.add('button');
  moreButton.innerText = 'Подробнее';

  footer.append(priceEl, nameEl, moreButton);

  card.appendChild(footer);
  return card;
}

const cardOne = getCard({
  name: "Блузка женская классная",
  imgPath: "/img/слайдер-акции.jpg",
  price: "50.00 руб.",
});

cardOne.className = "product-items_container cardOne-container";
// console.log(cardOne.className); //просмотреть текущие значения класса
document.querySelector('.catalog-item-list').appendChild(cardOne)
