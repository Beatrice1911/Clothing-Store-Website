const newsletterForm = document.getElementById('newsletter-form');
const email = document.getElementById('email');
const menuIcon = document.querySelector('.menu-icon');
const menuDropdown = document.querySelector('.menu-dropdown');
const cartIcon = document.querySelector('.cart-icon');
const cartDropdown = document.querySelector('.cart-dropdown');
const profileIcon = document.querySelector('.profile-icon')
const login = document.getElementById('login');
const profileDropdown = document.querySelector('.profile-dropdown');
const closeBtn = document.getElementById('close-btn');


newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (email.value === "") {
        alert("Please input your email!");
    } else {
        alert("Subscribed!")
    }
    newsletterForm.reset();
});

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









// document.querySelectorAll('*').forEach(el => {
//     if (el.scrollWidth > el.clientWidth) {
//         console.log('Overflowing Element: ', el, 'Width: ', el.scrollWidth, 'Parent Width: ', el.parentNode.clientWidth);   
//     }
// })