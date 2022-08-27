//btn for functioality
let btn = document.querySelector(".btn");
// the display component
let container_2 = document.querySelector(".container-2");
let container_1 = document.querySelector(".container-1");
// the element that hold all the numbers
let numbers = document.querySelectorAll(".number");
let outNumber = document.querySelector(".out");


let value = 3;
btn.addEventListener("click",containerShow)


function containerShow(e) {
   e.preventDefault();
    container_1.style.display = "none";
    container_2.style.display = "block";
   
   outNumber.innerHTML = value;
}

 numbers.forEach(btn => {
      btn.addEventListener('click',handleRatingBtn) 
 })
  
function handleRatingBtn(eve){
   eve.preventDefault();
  numbers.forEach(btn => {
      btn.classList.remove("active");
  })
  eve.target.classList.add("active");
  value = eve.target.innerHTML
}


