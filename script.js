//
let btn = document.querySelector(".btn");
let container_2 = document.querySelector(".container-2");
let container_1 = document.querySelector(".container-1");


btn.addEventListener("click",containerShow)

function containerShow(e) {
   e.preventDefault();
    container_1.style.display = "none";
    container_2.style.display = "block";

    // console.log("clicked me")
}