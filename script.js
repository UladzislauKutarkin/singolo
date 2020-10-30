window.onload = function () {
    const BODY = document.querySelector('body');
    const MENU = document.getElementById('menu');
    const MOBILE_MENU = document.querySelector('.headerMobileMenu');
    const BURGER = document.getElementById('burger');

//Открываем меню бургер

    BURGER.addEventListener('click', (e) => {
        if (BURGER.classList.contains('headerBurgerButtonActive') ) {
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


    //Делаем переключение слайдов


