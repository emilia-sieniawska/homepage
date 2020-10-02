{
    const welcome = () => {
        console.log("Cześć ziomeczki! Trochę nie ogarniam tego JSa, mam nadzieję, że później będzie lepiej :)");
    }

    const image = document.querySelector(".section__image");
    const showHidePictureButton = document.querySelector(".js-showHidePictureButton");
    const body = document.querySelector(".body");
    const changeColorButton = document.querySelector(".js-changeColorButton");
    const tableHeader = document.querySelector(".table__header");
    const tableCellList = document.querySelectorAll(".table__cell");
    const tableRowList = document.querySelectorAll(".table__row");



    const onShowHidePictureClick = () => {
        image.classList.toggle("js-showHide");
        if (showHidePictureButton.innerText === "Ukryj zdjęcie") {
            showHidePictureButton.innerText = "Pokaż zdjęcie";
        } else {
            showHidePictureButton.innerText = "Ukryj zdjęcie";
        }
    };

    const onChangeColorClick = () => {
        body.classList.toggle("js-differentColor");
        tableHeader.classList.toggle("js-tableHeaderSecondColor");
        tableCellList.forEach((tableCell) => {
            tableCell.classList.toggle("js-tableCellSecondColor");
        });
        tableRowList.forEach((tableRow) => {
            tableRow.classList.toggle("js-tableRowSecondColor");
        });
    };


    showHidePictureButton.addEventListener("click", onShowHidePictureClick);
    changeColorButton.addEventListener("click", onChangeColorClick);

    welcome();
}