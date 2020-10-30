window.onload = function () {
    const BODY = document.querySelector('body');
    const MENU = document.getElementById('menu');
    const MOBILE_MENU = document.querySelector('.headerMobileMenu');
    const BURGER = document.getElementById('burger');

//Открываем меню бургер

    BURGER.addEventListener('click', (e) => {
        if (e.target.tagName === "DIV") {
            if (e.target.classList[1] == 'headerBurgerButtonActive') {
                e.target.classList.remove('headerBurgerButtonActive');
                document.getElementById('mobileMenu').classList.add('headerMobileMenuHidden');
                BODY.classList.remove('scroll-hidden');
            }
            else {
                e.target.classList.add('headerBurgerButtonActive');
                document.getElementById('mobileMenu').classList.remove('headerMobileMenuHidden');
                BODY.classList.add('scroll-hidden');
            }
        }  else {
            if (e.target.parentElement.classList[1] == 'headerBurgerButtonActive') {
                e.target.parentElement.classList.remove('headerBurgerButtonActive');
                document.getElementById('mobileMenu').classList.add('headerMobileMenuHidden');
                BODY.classList.remove('scroll-hidden');
            }
            else {
                e.target.parentElement.classList.add('headerBurgerButtonActive');
                document.getElementById('mobileMenu').classList.remove('headerMobileMenuHidden');
                BODY.classList.add('scroll-hidden');
            }
        }
    });



    function chooseItemMenuBurger(event) {
        MOBILE_MENU.querySelectorAll('a').forEach(el =>
            el.classList.remove('navigationLinkMobileStateActive'));

        event.target.classList.add('navigationLinkMobileStateActive');
        document.getElementById('mobileMenu').classList.add('headerMobileMenuHidden');
        BODY.classList.remove('scroll-hidden');
    }

    MOBILE_MENU.addEventListener('click', chooseItemMenuBurger);


}
