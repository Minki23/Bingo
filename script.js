// Dodaje wszystkie przyciski
const grid = document.querySelector('.grid');

for (var i = 1; i <= 90; i++) {
  grid.innerHTML += `
  <div class="ainer">
    <button class='number'>${i}</button>
  </div>
  `;
}
//tablica do przechowywania kliknietych liczb
var historia = [];
//wszystkie przyciski z numerami
var numberButtons = document.querySelectorAll(".number");

numberButtons.forEach((button) => {

  //pokazywanie domyslnie przyciskow od 1 do 75
  if (button.innerText < 75) {
    button.style.opacity = '1';
  } else {
    button.style.pointerEvents = 'none'
  };

  button.addEventListener('click', function () {
    //zmiana koloru poprzez dodawanie klasy
    if (!button.classList.contains("clicked")) {
      historia.push(button.innerText);
      button.classList.add("clicked");
    }
    else {
      button.classList.remove("clicked");
      historia.splice(historia.indexOf(button.innerText), 1);
    }
    //zmiania ostatniej pokazywanej liczby
    document.querySelector(".ostatnia-button").innerText = historia[historia.length - 1] || "";
  });
});
const resetContainer = document.querySelector(".reset-container");
const showSettings = document.querySelector(".show-settings");
showSettings.addEventListener("click", () => {
  if (resetContainer.style.right != "-22%") {
    resetContainer.style.right = "-22%";
    hidePopup();
  }
  else {
    resetContainer.style.right = "-5%";
  }
})
//dostosowywanie resetowania
const popup = document.querySelector('.popup');
function hidePopup() {
  popup.style.opacity = "0";
  popup.style.pointerEvents = "none";
};

//przycisk reset
const resetButton = document.querySelector(".reset");
resetButton.addEventListener('click', function () {
  if (popup.style.opacity === "0") {
    popup.style.opacity = "1";
    yesButton.style.pointerEvents = "all";
    cancelButton.style.pointerEvents = "all";
  }
  else {
    hidePopup();
  }
});

//przycisk potwierdzania wyboru
const yesButton = document.querySelector(".tak");
yesButton.addEventListener('click', function () {
  numberButtons.forEach((button) => {
    if (button.classList.contains("clicked")) {
      button.classList.remove("clicked");
    }
  });
  hidePopup();
  historia = [];
});

//przycisk anulowania wyboru
const cancelButton = document.querySelector(".anuluj");
cancelButton.addEventListener('click', () => hidePopup());

//wybór ilosci liczb
var slider = document.querySelector(".slider");
slider.addEventListener('click', function () {
  if (slider.checked == true) {
    numberButtons.forEach((button) => {
      button.style.opacity = "1";
      button.style.pointerEvents = "all";
    });
  }
  else {
    numberButtons.forEach((button) => {
      if (button.innerText > 75) {
        button.style.opacity = "0";
        button.style.pointerEvents = "none";
      }
    });
  }
});