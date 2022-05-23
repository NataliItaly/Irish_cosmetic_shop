const burgerMenu = document.querySelector(".burger-menu");
const checkbox = document.querySelector(".checkbox");
const menu = document.querySelector(".menu");

checkbox.addEventListener("click", function () {
  menu.classList.toggle("open");
  checkbox.classList.toggle("checked");
});

menu.addEventListener("click", function () {
  menu.classList.remove("open");
  checkbox.classList.remove("checked");
});

/*-------------------------change images onclick------------------------- */

let previewImg = document.querySelectorAll(".preview-img");
const developersImg = document.querySelector(".developers-slider-img");
const sliderPreview = document.querySelector(".developers-slider-preview");

sliderPreview.addEventListener("click", (event) => {
  // Отлавливаем элемент в родители на который мы нажали
  let target = event.target;

  // Проверяем тот ли это элемент который нам нужен
  if (target.classList.contains("preview-img")) {
    for (let i = 0; i < previewImg.length; i++) {
      // Убираем у других
      previewImg[i].classList.remove("active");
    }
    // Добавляем тому на который нажали
    target.classList.add("active");
    developersImg.src = target.src;
  }
});

/*-------------------------- pop up -------------------------- */

const readMore = document.querySelectorAll(".read-more");
const readAdviceItem = document.querySelectorAll(".read-advice-item");
const readAdviceWrapper = document.querySelector(".read-advice-wrapper");
const adviceSectionTitle = document.getElementById("advice-section-title");

for (let i = 0; i < readMore.length; i++) {
  let dataNumber = readMore[i].dataset.number;
  console.log(dataNumber);
  readMore[i].addEventListener("click", function () {
    for (let j = 0; j < readAdviceItem.length; j++) {
      if (readMore[i].dataset.number === readAdviceItem[j].dataset.number) {
        // readAdviceWrapper.style.display = "block";
        readAdviceItem[j].style.display = "block";
        adviceSectionTitle.style.zIndex = "0";
      }
    }
  });
}

/*----------------------------button-animation---------------------------- */

let animateButton = function (e) {
  e.preventDefault;
  //reset animation
  e.target.classList.remove("animate");

  e.target.classList.add("animate");
  setTimeout(function () {
    e.target.classList.remove("animate");
  }, 700);
};

let dandelionAnimation = document.querySelectorAll(".dandelion-animation");

for (let i = 0; i < dandelionAnimation.length; i++) {
  dandelionAnimation[i].addEventListener("click", animateButton, false);
}
