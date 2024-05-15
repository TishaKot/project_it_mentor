
//Блок РЕМОНТ БРЕНДОВ

const container = document.getElementById('container');
const elements = document.querySelectorAll('.services__brands__slide');
const btn = document.getElementById('btn');
const btnImg = document.querySelector('.services__btn__img');
const text = document.querySelector('.services__btn__text');

let showAll = false;

function toggleElements() {
  const screenWidth = window.innerWidth;
  let numToShow = screenWidth >= 1120 ? 8 : screenWidth >= 768 ? 6 : 0;

  elements.forEach((element, index) => {
    if (numToShow === 0 || index < numToShow || showAll) {
      element.style.display = 'block';
    } else {
      element.style.display = 'none';
    }
  });

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

toggleElements();

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



// Блок РЕМОНТ ТЕХНИКИ

const blocks = document.querySelector('.services__technique__blocks');
const elem = document.querySelectorAll('.technique__block');
const btnServices = document.getElementById('btn_services');
const btnImges = document.querySelector('.btn__img');
const textBtn = document.querySelector('.btn_services__text');

let show = false;

function toggleElem() {
  const screenWid = window.innerWidth;
  let numTo = screenWid >= 1120 ? 4 : screenWid >= 768 ? 3 : 0;

  elem.forEach((element, index) => {
    if (numTo === 0 || index < numTo || show) {
      element.style.display = 'block';
    } else {
      element.style.display = 'none';
    }
  });


  if (show) {
    textBtn.textContent = 'Скрыть';
    btnImges.style.transform = 'rotate(180deg)';

  } else {
    textBtn.textContent = 'Показать все';
    btnImges.style.transform = 'rotate(0deg)';
  }
}

btnServices.addEventListener('click', () => {
  show = !show;
  toggleElem();
});

toggleElem();

window.addEventListener('resize', toggleElem);


function hideButtonOnM() {
  if (window.innerWidth < 768) {
    btnServices.style.display = "none";
  } else {
    btnServices.style.display = "block";
  }
}

hideButtonOnM();
window.addEventListener('resize', hideButtonOnM);



// модальное окно ОБРАТНАЯ СВЯЗЬ

const modal = document.querySelector('.modal');
const openModalButton = document.querySelector('.icon__chat');
const closeModalButton = document.getElementById('modal__window_call_btn_close');
const modalContent = document.querySelector('.modal__window__feedback');

const headerChat = document.querySelector('.chat');


openModalButton.addEventListener("click", function () {
  modal.style.display = "block";
});

closeModalButton.addEventListener("click", function () {
  modal.style.display = "none";
});

modal.addEventListener("click", function (e) {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

// на <= 768  Открытие модального окна ОБРАТНАЯ СВЯЗЬ

headerChat.addEventListener("click", function () {
  modal.style.display = "flex";
  modalContent.style.display = "flex";
});


closeModalButton.addEventListener("click", function () {
  modal.style.display = "none";
});

modal.addEventListener("click", function (e) {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});


// Открытие модального окна ЗАКАЗАТЬ ЗВОНОК

const modalD = document.querySelector('.modal__wrap__call');
const phone = document.querySelector('.icon__call');
const headerPhone = document.querySelector('.phone');
const closeButton = document.getElementById('modal__window_btn_close');


phone.addEventListener("click", function () {
  modalD.style.display = "flex";

});

closeButton.addEventListener('click', function () {
  modalD.style.display = 'none';
});

modalD.addEventListener('click', (e) => {
  if (e.target === modalD) {
    modalD.style.display = 'none';
  }
});


// на <= 768 Открытие модального окна ЗАКАЗАТЬ ЗВОНОК

headerPhone.addEventListener("click", function () {
  modalD.style.display = "flex";

});

closeButton.addEventListener('click', function () {
  modalD.style.display = 'none';
});

modalD.addEventListener('click', (e) => {
  if (e.target === modalD) {
    modalD.style.display = 'none';
  }
});


// функция открытия текста

const readButton = document.querySelector('.services__button');
const readText = document.querySelector('.text__screen_768__end');
const imgArrow = document.querySelector('.img__arrow');
const buttonText = document.querySelector('.services__button__text');
const text768 = document.querySelector('.text__screen_768');
const screenWidth = window.innerWidth;

readButton.addEventListener('click', function () {
  if (readText.classList.contains('hidden')) {
    readText.classList.remove('hidden');
    buttonText.textContent = 'Скрыть';
    imgArrow.style.transform = 'rotate(180deg)';
  } else {
    readText.classList.add('hidden');
    buttonText.textContent = 'Читать далее';
    imgArrow.style.transform = 'rotate(0deg)';
  }
});

readButton.addEventListener('click', function (event) {
  if (text768.style.display === "block") {
    text768.style.display = "none";
  } else {
    event.preventDefault();
    text768.style.display = "block";
    readText.style.display = "block";
  }
});



// BURGER MENU


document.addEventListener('DOMContentLoaded', function () {
  const burgerBtn = document.getElementById('burger__btn');
  const closeBtn = document.querySelector('.burger__close-btn');
  const burgerMenu = document.querySelector('.burger__menu');
  const overlay = document.querySelector('.burger__overlay');

  burgerBtn.addEventListener('click', function () {
    burgerMenu.classList.add('open');
    overlay.style.display = 'block';
  });

  closeBtn.addEventListener('click', function () {
    burgerMenu.classList.remove('open');
    overlay.style.display = 'none';
  });

  overlay.addEventListener('click', function () {
    burgerMenu.classList.remove('open');
    overlay.style.display = 'none';
  });
});
