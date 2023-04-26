
const btn = document.querySelector('#btn')

btn.addEventListener('click', ()=>{
    var mobileMenu = document.querySelector('.mobile-menu')
    mobileMenu.classList.toggle('open')
    if(mobileMenu.classList.contains('open')){
        document.querySelector('#icon').src = "img/close.svg"
    } else{
        document.querySelector('#icon').src = "img/menu.svg"
    }
})