//слайдер свайп

function initSlider() {
    new Swiper(".mySwiper", {
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          dynamicBullets: true,
        },
        mousewheel: true,
        keyboard: true,
      });
}
initSlider();


// реализация блоков на разрешениях 768 и 1120

// const toggleButton = document.querySelector('#btn');
// const slides = document.querySelectorAll('.services-slide');

// let isExpanded = false;

// toggleButton.addEventListener('click', function() {
//   isExpanded = !isExpanded;
  
//   if (isExpanded) {
//     slides.forEach(slide => slide.style.display = 'block');
//     toggleButton.textContent = 'Скрыть';
//   } else {
//     if (window.innerWidth < 768) {
//       slides.forEach((slide, index) => {
//         if (index >= 6) {
//           slide.style.display = 'none';
//         }
//       });
//     } else {
//       slides.forEach((slide, index) => {
//         if (index >= 8) {
//           slide.style.display = 'none';
//         }
//       });
//     }
    
//     toggleButton.textContent = 'Показать все';
//   }
// });




const container = document.getElementById('container');
const elements = container.querySelectorAll('.services-slide');
const btn = document.getElementById('btn');

let showAll = false;

function toggleElements() {
  // Задаем количество элементов, которые нужно показывать в зависимости от разрешения экрана
  const screenWidth = window.innerWidth;
  let numToShow = screenWidth >= 1120 ? 8 : screenWidth >= 768 ? 6 : 0;

  // Показываем или скрываем элементы в зависимости от значения numToShow
  elements.forEach((element, index) => {
    if (numToShow === 0 || index < numToShow || showAll) {
      element.style.display = 'block';
    } else {
      element.style.display = 'none';
    }
  });

  // Меняем текст на кнопке в зависимости от showAll
  if (showAll) {
    btn.textContent = 'Скрыть';
  } else {
    btn.textContent = 'Показать все';
  }
}

btn.addEventListener('click', () => {
  showAll = !showAll;
  toggleElements();
});

// Вызываем функцию toggleElements для первоначального отображения элементов
toggleElements();

// При изменении размера окна браузера также пересчитываем отображаемые элементы
window.addEventListener('resize', toggleElements);


function hideButtonOnMobile() {
    if (window.innerWidth < 768) {
        btn.style.display = "none";
    } else {
       btn.style.display = "block";
      
    }
}

hideButtonOnMobile();
window.addEventListener('resize', hideButtonOnMobile);

