// Get elements
const cartIcon = document.getElementById("cart-icon");
const profileIcon = document.getElementById("profile-icon");
const cartDropdown = document.getElementById("cartDropdown");
const profileDropdown = document.getElementById("profileDropdown");
const cartCount = document.getElementById("cartCount");
const scrollToTopButton = document.getElementById("scrollToTop");
const slideshowImages = document.querySelectorAll("carousel-slide"); // All slideshow images
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

let cartItems = 0; // Cart item count
let currentSlide = 0; // Current slide index

// Toggle Cart Dropdown
cartIcon.addEventListener("click", () => {
    cartDropdown.style.display = cartDropdown.style.display === "block" ? "none" : "block";
    profileDropdown.style.display = "none"; // Hide profile dropdown if open
});

// Toggle Profile Dropdown
profileIcon.addEventListener("click", () => {
    profileDropdown.style.display = profileDropdown.style.display === "block" ? "none" : "block";
    cartDropdown.style.display = "none"; // Hide cart dropdown if open
});

// Update Cart Count (Add item to cart on double click)
cartIcon.addEventListener("dblclick", () => {
    cartItems += 1;
    cartCount.textContent = cartItems; // Update cart count display
    cartDropdown.textContent = "You have ${cartItems} item(s) in your cart.";
});

// Close dropdowns when clicking outside
window.addEventListener("click", (e) => {
    if (!cartIcon.contains(e.target) && !cartDropdown.contains(e.target)) {
        cartDropdown.style.display = "none";
    }
    if (!profileIcon.contains(e.target) && !profileDropdown.contains(e.target)) {
        profileDropdown.style.display = "none";
    }
});

// Smooth scroll for navigation links
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = link.getAttribute("href").substring(1); // Get the target section ID
        document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
    });
});

// Slideshow functionality
function showSlide(index) {
    slideshowImages.forEach((img, i) => {
        img.style.display = i === index ? "block" : "none"; // Show only the current slide
    });
}

nextButton.addEventListener("click", () => {
    currentSlide = (currentSlide + 1) % slideshowImages.length; // Move to next slide
    showSlide(currentSlide);
});

prevButton.addEventListener("click", () => {
    currentSlide = (currentSlide - 1 + slideshowImages.length) % slideshowImages.length; // Move to previous slide
    showSlide(currentSlide);
});

// Auto slideshow (optional)
setInterval(() => {
    currentSlide = (currentSlide + 1) % slideshowImages.length;
    showSlide(currentSlide);
}, 5000); // Change slide every 5 seconds

// Scroll-to-top button
window.addEventListener("scroll", () => {
    if (window.scrollY > 300) { // Show button after scrolling 300px
        scrollToTopButton.style.display = "block";
    } else {
        scrollToTopButton.style.display = "none";
    }
});

scrollToTopButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});



let cart = [];
function addToCart(productName, price) {
    cart.push({productName, price});
    alert(`${productName} has been added to your cart!`)
    console.log(cart);
}
document.querySelectorAll('.product button').forEach(button =>{
    button.addEventListener('click', () => {
        let productName = button.parentElement.querySelector('h3').textContent;
        let price = button.parentElement.querySelector('p').textContent;
    });
});
// slide show

let cSlide = 0;
const slides = document.getElementsByClassName("carousel-container");
function showSlide(slideIndex) {
    for (let i = 0; index < slides.length; i++) {
        slides[i].style.display = "none";        
    }
    if (slideIndex >= slides.length) currentSlide = 0;
    if (slideIndex < 0) currentSlide = slides.length - 1;

    slides[currentSlide].style.display = "block";
}
function moveSlide(n) {
    currentSlide += n;
    showSlide(currentSlide);
}
showSlide(currentSlide);



let slideIndex = 0;
showSlides();
function showSlides() {
    let slides = document.getElementsByClassName("carousel-container");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = 'block';
    setTimeout(showSlides, 3000);
}
function moveSlide(n) {
    showSlides(slideIndex += n);
}


/*let currentSlide = 0;
const slides = document.getElementsByClassName('carousel-slide');

function showSlide(slideIndex) {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';       
    }
    if (slideIndex >= slides.length)
        currentSlide = 0;
    if (slideIndex < 0)
        currentSlide = slides.length - 1;
slides[currentSlide].style.display = 'block';


}
let slideTimer = setInterval(() => {
    moveSlide(1);
}, 5000);
function moveSlide(n) {
    clearInterval(slideTimer);
    currentSlide += n;
    showSlide(currentSlide);
    slideTimer = setInterval(() => 
    moveSlide(1), 5000);
}*/