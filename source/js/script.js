var navMain = document.querySelector(".main-nav");
var navToggle = document.querySelector(".main-nav__toggle");


navMain.classList.remove("main-nav--nojs");

navToggle.addEventListener("click", function () {
  if (navMain.classList.contains("main-nav--closed")) {
    navMain.classList.remove("main-nav--closed");
    navMain.classList.add("main-nav--opened");
  } else {
    navMain.classList.add("main-nav--closed");
    navMain.classList.remove("main-nav--opened");
  }
});



var cartButtons = document.querySelectorAll(".catalog-item__button");
var myModal = document.querySelector(".modal");

for(var i = 0; i < cartButtons.length; i++) {
  cartButtons[i].addEventListener("click", function (e) {
    e.preventDefault();
    myModal.classList.add("modal__open");
    if (myModal.classList.contains("modal__open")) {
      window.addEventListener("click", function (e) {
        if (e.target === myModal) {
          myModal.classList.remove("modal__open");
        }
      })
    }
  });
};

var indexButton = document.querySelector(".button--offer");
indexButton.addEventListener("click", function (openOrder) {
  openOrder.preventDefault();
  myModal.classList.add("modal__open");
  if (myModal.classList.contains("modal__open")) {
    window.addEventListener("click", function (e) {
      if (e.target === myModal) {
        myModal.classList.remove("modal__open");
      }
    })
  }

})


ymaps.ready(function () {
  var myMap = new ymaps.Map('map', {
      center: [59.938635, 30.323118],
      zoom: 16,
      controls: ["zoomControl"]
    }, {
      suppressMapOpenBlock: true

    }),
    MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
      '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
    ),
    myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
      hintContent: 'Собственный значок метки',
      balloonContent: 'Это красивая метка'
    }, {
      iconLayout: 'default#image',
      iconImageHref: 'img/icon-map-pin.svg',
      iconImageSize: [67, 100],
      iconImageOffset: [-30, -90]
    });
  myMap.geoObjects
    .add(myPlacemark)
});
