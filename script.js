//слайдер свайп

function initSlider() {
    new Swiper("#swiper1", {
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


 function initSlider2() {
    new Swiper("#swiper2", {
     
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
initSlider2();

function initSlider3() {
    new Swiper("#swiper3", {
      slidesPerView: 1,
        spaceBetween: 10,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          dynamicBullets: true,
        },
        
        mousewheel: true,
        keyboard: true,
        
      });
}
initSlider3();



//Функция показа блока РЕМОНТ БРЕНДОВ

const container = document.getElementById('container');
const elements = container.querySelectorAll('.services-slide');
const btn = document.getElementById('btn');
const btnImg = document.querySelector('.btn__img');
const text = document.querySelector('.text');

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
    text.textContent = 'Скрыть';
    btnImg.style.transform = 'rotate(180deg)';
    
  } else {
    text.textContent = 'Показать все';
    btnImg.style.transform = 'rotate(0deg)';

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



// Функция показа блока РЕМОНТ ТЕХНИКИ

const blocks = container.querySelectorAll('.technique__block');
const btnT = document.querySelector('.technique__btn');
const btnImges = document.querySelector('.technique__btn__img');
const textBtn = document.querySelector('.technique__btn__text');

let show = false;


 btnT.addEventListener("click", function() {
            let hiddenElements = document.querySelectorAll(".technique__block_hidden");
            hiddenElements.forEach(function(element) {
                element.style.display = "block";
            });
        });

        function toggleButton() {


// Задаем количество элементов, которые нужно показывать в зависимости от разрешения экрана
  const screenW = window.innerWidth;
  let numTo = screenW >= 1120 ? 4 : screenW >= 768 ? 3 : 0;

  // Показываем или скрываем элементы в зависимости от значения numToShow
  blocks.forEach((element, index) => {
    if (numTo === 0 || index < numTo || show) {
      element.style.display = 'block';
    } else {
      element.style.display = 'none';
    }
  });


    // Меняем текст на кнопке в зависимости от showAll      
 if (show) {
    textBtn.textContent = 'Скрыть';
    btnImges.style.transform = 'rotate(180deg)';
    
  } else {
    textBtn.textContent = 'Показать все';
   btnImges.style.transform = 'rotate(0deg)';

  }
    }


btnT.addEventListener('click', () => {
  show = !show;
  toggleButton();
});


// Вызываем функцию toggleElements для первоначального отображения элементов
toggleButton();


// Открытие модального окна ОБРАТНАЯ СВЯЗЬ

const modal = document.querySelector('.modal');
const openModalButton = document.querySelector('.contact_section__chat');
const closeModalButton = document.getElementById('modal__window_call_btn_close');
const modalContent = document.querySelector('.modal__window__feedback');
const headerPhone = document.querySelector('.header__menu__phone');

openModalButton.addEventListener("click", function() {
    modal.style.display = "block";
});

closeModalButton.addEventListener("click", function() {
    modal.style.display = "none";
});

modal.addEventListener("click", function(e) {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});

// на 768 Открытие модального окна ОБРАТНАЯ СВЯЗЬ

headerPhone.addEventListener("click", function() {
    modal.style.display = "flex";
   modalContent.style.display = "flex";
});


closeModalButton.addEventListener("click", function() {
    modal.style.display = "none";
});

modal.addEventListener("click", function(e) {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});


// Открытие модального окна ЗАКАЗАТЬ ЗВОНОК

const modalD = document.querySelector('.modal__wrap__call');
const phone = document.querySelector('.contact_section__call');
const headerChat = document.querySelector('.header__menu__phone__chat');
const closeButton = document.getElementById('modal__window_btn_close');


phone.addEventListener("click", function() {
    modalD.style.display = "flex";
   
});

closeButton.addEventListener('click', function() {
  modalD.style.display = 'none';
});

modalD.addEventListener('click', (e) => {
  if (e.target === modalD) {
    modalD.style.display = 'none';
  }
});



// на 768 Открытие модального окна ЗАКАЗАТЬ ЗВОНОК

headerChat.addEventListener("click", function() {
    modalD.style.display = "flex";
   
});

closeButton.addEventListener('click', function() {
  modalD.style.display = 'none';
});

modalD.addEventListener('click', (e) => {
  if (e.target === modalD) {
   modalD.style.display = 'none';
  }
});



// функция открытия текста

const readButton = document.querySelector('.image__button');
const readText = document.querySelector('.chapter__second_end');
const imgArrow = document.querySelector('.img__arrow');
const buttonText = document.querySelector('.button__text');


readButton.addEventListener('click', function() {
  if (readText.classList.contains('hidden')) {
     readText.classList.remove('hidden');
    buttonText.textContent  = 'Скрыть';
    imgArrow.style.transform = 'rotate(180deg)';
  } else {
     readText.classList.add('hidden');
      buttonText.textContent  = 'Читать далее';
   imgArrow.style.transform = 'rotate(0deg)';
  }
});


// бургер меню



////////////////////////////////////////////
// document.addEventListener('DOMContentLoaded', function () {
//     const burgerBtn = document.getElementById('burger__menu');
//     const burgerMenu = document.querySelector('.conteiner_768');
    
//     burgerBtn.addEventListener('click', function() {
//         burgerMenu.style.left = '0';
//     });

//     burgerMenu.addEventListener('click', function() {
//         burgerMenu.style.left = '-320px';
//     });

//     burgerMenu.addEventListener('mouseleave', function() {
//         burgerMenu.style.left = '-320px';
//     });
// });


document.addEventListener('DOMContentLoaded', function() {
  const burgerBtn = document.getElementById('burger__menu');
  const closeBtn = document.querySelector('.close-btn');
  const burgerMenu = document.querySelector('.conteiner_768');
  const overlay = document.querySelector('.overlay');

  burgerBtn.addEventListener('click', function() {
    burgerMenu.classList.add('open');
    overlay.style.display = 'block';
  });

  closeBtn.addEventListener('click', function() {
    burgerMenu.classList.remove('open');
    overlay.style.display = 'none';
  });

  overlay.addEventListener('click', function() {
    burgerMenu.classList.remove('open');
    overlay.style.display = 'none';
  });

  
});
