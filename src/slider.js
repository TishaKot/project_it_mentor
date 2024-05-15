//слайдер свайп

function initSlider() {
  new Swiper("#swiper1", {
    slidesPerView: "1",
    spaceBetween: 10,
    loop: false,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
      spaceBetween: 10,
      type: "bullets",
    },
    breakpoints: {
      508: {
      spaceBetween: 10,
      autoHeight: false,
      slidesPerView: 2,
    }, 
    768: {
      enabled: false,
      spaceBetween: 24,
      autoHeight: false,
      slidesPerView: 'auto',
      slidesPerGroup: 3,
      slidesPerColumn: 2,
    },
    965: {
      slidesPerView: 4,
      slidesPerGroup: 4,
      spaceBetween: 20,
    },
    1120: {
      spaceBetween: 33,
    },
  },
    mousewheel: true,
    keyboard: true,
  });
}
initSlider();



function initSlider2() {
  new Swiper("#swiper2", {
    slidesPerView: "1",
    spaceBetween: 15,
    loop: false,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
      spaceBetween: 40,
      type: "bullets",
    },
    breakpoints: {
       508: {
      spaceBetween: 10,
      autoHeight: false,
      slidesPerView: 2,
    }, 
      768: {
        slidesPerView: 2,
        spaceBetween: 24,
      },
      965: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1120: {
        slidesPerView: 4,
        spaceBetween: 33,
      },
    },
    mousewheel: true,
    keyboard: true,
  });
}

initSlider2();



function initSlider3() {
  new Swiper("#swiper3", {
    slidesPerView: "1",
    spaceBetween: 10,
    loop: false,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
      spaceBetween: 10,
      type: "bullets",
    },
    breakpoints: {
     508: {
      spaceBetween: 10,
      autoHeight: false,
      slidesPerView: 2,
    }, 
    768: {
      enabled: false,
      spaceBetween: 24,
      autoHeight: false,
      slidesPerView: 4,
      slidesPerGroup: 3,
      slidesPerColumn: 2,
    },
    965: {
      slidesPerView: 4,
      slidesPerGroup: 4,
      spaceBetween: 20,
    },
    1120: {
      spaceBetween: 33,
    },
  },
    mousewheel: true,
    keyboard: true,
  });
}
initSlider3();