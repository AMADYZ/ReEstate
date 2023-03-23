let MainImg = document.getElementById('MainImg');
let small_img = document.getElementsByClassName("small-img")
let x;
small_img[0].onclick = function () {
    x = MainImg.src;
    MainImg.src = small_img[0].src;
    small_img[0].src = x;

}
small_img[1].onclick = function () {
    x = MainImg.src;
    MainImg.src = small_img[1].src;
    small_img[1].src = x;
}
small_img[2].onclick = function () {
    x = MainImg.src;
    MainImg.src = small_img[2].src;
    small_img[2].src = x;
}
small_img[3].onclick = function () {
    x = MainImg.src;
    MainImg.src = small_img[3].src;
    small_img[3].src = x;
}

let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');
openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})