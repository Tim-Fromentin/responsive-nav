const btnHamb = document.querySelector('.btn-hamb')
const boxNavLinks = document.querySelector('.nav-container-link')

btnHamb.addEventListener('click', activeNavMob)

function activeNavMob(){
    btnHamb.classList.toggle('btn-hamb--active')
    boxNavLinks.classList.toggle('nav-container-link--active')
}