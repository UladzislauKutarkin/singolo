window.onload = function () {
    const BODY = document.querySelector('body');
    const MENU = document.getElementById('menu');
    const MOBILE_MENU = document.querySelector('.headerMobileMenu');
    const BURGER = document.getElementById('burger');


//Открываем меню бургер

    BURGER.addEventListener('click', (e) => {
        if (BURGER.classList.contains('headerBurgerButtonActive')) {
            BURGER.classList.remove('headerBurgerButtonActive');
            document.getElementById('mobileMenu').classList.add('headerMobileMenuHidden');
            BODY.classList.remove('scroll-hidden');
        } else {
            BURGER.classList.add('headerBurgerButtonActive');
            document.getElementById('mobileMenu').classList.remove('headerMobileMenuHidden');
            BODY.classList.add('scroll-hidden');
        }
    })
}
    let min=0;
    let max=10;
    let randomNumber = function (min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }
    let img = document.querySelectorAll('.portfolioPhotoGridItem');

        randomButton = document.querySelectorAll('.portfolioTabsItem').forEach(randomButton => {
        randomButton.addEventListener('click', (e) => {
            img[3].style.order = randomNumber(min, max);
            img[1].style.order = randomNumber(min, max);
            img[2].style.order = randomNumber(min, max);
        })
    })

