const workTime = document.querySelector(".work__time");

workTime.addEventListener("click", function(e) {
    const addTimeIcon = document.querySelector(".add__time .icon");
    const dropDownBlock = document.querySelector(".dropdown");
    if (dropDownBlock.classList.length == 1) {
        addTimeIcon.src = "img/header_footer_icons/Strelka_up_14x11.svg";
        dropDownBlock.classList.add("d__block");
    }
    else {
        addTimeIcon.src = "img/header_footer_icons/Strelka_down_14x11.svg";
        dropDownBlock.classList.remove("d__block");
    }
})