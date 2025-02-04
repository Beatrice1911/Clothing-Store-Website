const menuIcon = document.querySelector('.menu-icon');
const menuDropdown = document.querySelector('.menu-dropdown');
const cartIcon = document.querySelector('.cart-icon');
const cartDropdown = document.querySelector('.cart-dropdown');
const profileIcon = document.querySelector('.profile-icon')
const login = document.getElementById('login');
const profileDropdown = document.querySelector('.profile-dropdown');
const closeBtn = document.getElementById('close-btn');



menuIcon.addEventListener('click', () => {
    menuDropdown.style.display = menuDropdown.style.display === 'none' ? 'block' : 'none';    
});

cartIcon.addEventListener('click', () => {
    if (cartDropdown.style.display === 'none') {
        menuDropdown.style.display = 'none';
        profileDropdown.style.display = 'none';
        cartDropdown.style.display = 'block';        
    } else {
        cartDropdown.style.display = 'none';
    }        
});

profileIcon.addEventListener('click', () => {
    if (profileDropdown.style.display === 'none') {
        cartDropdown.style.display = 'none';
        profileDropdown.style.display = 'block';        
    } else {
        profileDropdown.style.display = 'none';
    }        
});

login.addEventListener('click', () => {
    if (profileDropdown.style.display === 'none') {
        menuDropdown.style.display = 'none';
        profileDropdown.style.display = 'block';        
    } else {
        profileDropdown.style.display = 'none';
    }    
});

closeBtn.addEventListener('click', () => {
    profileDropdown.style.display = 'none';
});