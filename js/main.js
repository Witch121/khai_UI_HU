// const handleDomContentLoaded = function () {
//     const body = document.body;
//     const header = document.querySelector('header');
//     const burgerBtn = document.querySelector('header .nav-btn');
//     // const overlay = document.querySelector('header .overlay');
//     function handleBurgerClick () {
//     if (header.classList.contains('is-active')) {
//     closeNavigation();
//     } else {
//     openNavigation();
//     }
//     }
//     function closeNavigation () {
//     body.classList.remove('disable-scroll');
//     header.classList.remove('is-active');
//     }
//     function openNavigation () {
//     body.classList.add('disable-scroll');
//     header.classList.add('is-active');
//     }
//     burgerBtn.addEventListener('click', handleBurgerClick);
//     // overlay.addEventListener('click', closeNavigation);
//     }
//     document.addEventListener('DOMContentLoaded', handleDomContentLoaded);
const handleDomContentLoaded = function () {
    const navigation = document.querySelector('.noneDropdown');
    const btn = document.querySelector('.dropdown_logo');
    const body = document.querySelector('body')
    function handleNaviagation () {
            navigation.classList.toggle('dropdown-content');
            navigation.classList.toggle('noneDropdown');
            body.classList.toggle('disable-scroll')  
    }
    btn.addEventListener('click', handleNaviagation);
}
document.addEventListener('DOMContentLoaded', handleDomContentLoaded);