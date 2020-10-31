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
 const img = document.querySelectorAll('.portfolioPhotoGridItem');
    const randomButton = document.querySelectorAll('.portfolioTabsItem').forEach(randomButton => {
        randomButton.addEventListener('click', (e) => {
            img[0].classList.add("imgChange");
            img[1].classList.add("imgChange");
            img[2].classList.add("imgChange");
        })
    })
