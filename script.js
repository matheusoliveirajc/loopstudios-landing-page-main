const mobile_menu = document.querySelector('#mobile-menu');
const openMenu = document.querySelector('.open-menu-icon').addEventListener('click', function(){
    mobile_menu.style.display = 'block';
});
const closeMenu = document.querySelector('.close-menu-icon').addEventListener('click', function(){
    mobile_menu.style.display = 'none';
});