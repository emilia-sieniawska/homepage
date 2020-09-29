console.log("Cześć ziomeczki! Trochę nie ogarniam tego JSa, mam nadzieję, że później będzie lepiej :)");

let image = document.querySelector(".section__image");
let showHidePictureButton = document.querySelector(".js-showHidePictureButton");
let body = document.querySelector(".body");
let changeColorButton = document.querySelector(".js-changeColorButton");
let tableHeaderSecondColor = document.querySelector(".js-tableHeaderSecondColor");
let tableCellSecondColor = document.querySelector(".js-tableCellSecondColor");
let tableHeader = document.querySelector(".table__header");
let tableCellList = document.querySelectorAll(".table__cell");
let tableRowSecondColor = document.querySelector(".js-tableRowSecondColor");
let tableRowList = document.querySelectorAll(".table__row");

showHidePictureButton.addEventListener("click", () => {
    image.classList.toggle("js-showHide");
    if (showHidePictureButton.innerText === "Ukryj zdjęcie") {
        showHidePictureButton.innerText = "Pokaż zdjęcie";
    } else {
        showHidePictureButton.innerText = "Ukryj zdjęcie";
    }
});

changeColorButton.addEventListener("click", () => {
    body.classList.toggle("js-differentColor");
    tableHeader.classList.toggle("js-tableHeaderSecondColor");
    tableCellList.forEach((tableCell) => {
        tableCell.classList.toggle("js-tableCellSecondColor");
    });
    tableRowList.forEach((tableRow) => {
        tableRow.classList.toggle("js-tableRowSecondColor");
    });
});