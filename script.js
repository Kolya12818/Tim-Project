//Знайдемо ліву і праву стрілку
let leftArrow = document.querySelector(".arrow-left")
let rightArrow = document.querySelector(".arrow-right")
console.log(leftArrow,rightArrow)
//Знайдемо 3фото
let images = document.querySelectorAll(".salads-img")
console.log(images)
//Активуємо роботу кнопок
let k = 0
function moveLeft(){
    k > 0 && k -- 
    changeImg()
}
function moveRight(){
    k < 2 && k ++
    changeImg()
}
function changeImg(){
    images.forEach((photo,index) => photo.classList.toggle("active", index == k ))
}
console.clear()
const burgerIcon = document.querySelector(".burger-icon")
const navList = document.querySelector(".nav-list")
burgerIcon.addEventListener("click", openList)

function openList(){
  this.classList.toggle("open")
  navList.classList.toggle("visible-list")
}

