const navArrow = document.querySelector(".nav-arrow");
const navParentList = document.querySelector(".nav-parent-list");
const boxModal = document.querySelector(".box-modal");
const navContainerLink = document.querySelector('.nav-container-link')

navParentList.addEventListener("click", arrowNavEffect);
function arrowNavEffect(){
    navArrow.classList.toggle("arrow--active")
    boxModal.classList.toggle('box-modal--active')
}

const btnhamb = document.querySelector('.btn-hamb')
btnhamb.addEventListener("click", mobileNav)
function mobileNav(){
    btnhamb.classList.toggle("btn-hamb--active")
    navContainerLink.classList.toggle('nav-container-link--active')
}