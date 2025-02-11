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
const productsContainer = document.querySelector('#products-container');
const featuredProducts = document.querySelector('.featured-products');
const totalNumberOfItems = document.getElementById('total-items');
const cartTotal = document.getElementById('total');
const clearCartBtn = document.getElementById("clear-cart-btn");
const cartCount = document.querySelector('.cart-count');
// const cartTotalDiv = document.querySelector('.cart-total');


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



const products = [
    {
        id: 1,
        imgSrc: "Images/dignife.jpg",
        name: "Dignife Pink Pack Perfume",
        price: 10000
    },
    {
        id: 2,
        imgSrc: "Images/kitchen napkin.jpg",
        name: "Kitchen Napkin",
        price: 5000
    },
    {
        id: 3,
        imgSrc: "Images/costume jewelry 007.jpg",
        name: "Costume Jewelry 007",
        price: 15000
    },
    {
        id: 4,
        imgSrc: "Images/laptop table 60cm.jpg",
        name: "Laptop Table 60cm",
        price: 28000
    },
    {
        id: 5,
        imgSrc: "Images/10 inches ringlight.jpg",
        name: "10 Inches Ring Light with Tripod",
        price: 25500
    },
    {
        id: 6,
        imgSrc: "Images/black mask.jpg",
        name: "Black Face Mask",
        price: 3500
    },
    {
        id: 7,
        imgSrc: "Images/bag023.jpg",
        name: "Bag 002",
        price: 9000
    },
    {
        id: 8,
        imgSrc: "Images/girls dress 001.jpg",
        name: "Girls Dress 001",
        price: 12000
    }
]

products.forEach(({ name, imgSrc, id, price }) => {
    featuredProducts.innerHTML += `
        <div class="feature-product">
            <img src="${imgSrc}" alt="Product Image">
            <h3>${name}</h3>
            <p>&#8358;${price}</p>
            <button id="${id}" class="add-to-cart">Add to Cart</button>
        </div>
    `;
});

class ShoppingCart {
    constructor() {
        this.items = [];
        this.total = 0;
        this.loadCart();
    }

    saveCart() {
        localStorage.setItem('cart', JSON.stringify(this.items));
    }

    loadCart() {
        const storedCart = localStorage.getItem('cart');
        this.items = storedCart ? JSON.parse(storedCart) : [];
    }



    addItem(id, products) {
        const product = products.find((item) => item.id === id);
        const { name, imgSrc, price } = product;
        this.items.push(product);

        const totalCountPerProduct = {};
        this.items.forEach((feature) => {
            totalCountPerProduct[feature.id] = (totalCountPerProduct[feature.id] || 0) + 1;
        });

        const currentProductCount = totalCountPerProduct[product.id];
        const currentProductCountSpan = document.getElementById(`product-count-for-id${id}`);

        currentProductCount > 1 ? currentProductCountSpan.textContent = `${currentProductCount}x` : productsContainer.innerHTML += `            
            <div id="slide${id}" class="product">
                <div class="product-img">
                    <img src="${imgSrc}" alt="${name}">
                </div>
                <div class="product-info">
                    <p><span class="product-count" id="product-count-for-id${id}"></span>${name}</p>
                    <p>${price}</p>
                    <button class="remove-button">Remove</button>
                </div>
            </div><br>
        `;

        this.saveCart();


    };

    removeItem(id) {
        this.items = this.items.filter(item => item.id !== id);
        this.saveCart();
        this.loadCart();
    }

    getCounts() {
        return this.items.length;
    };

    clearCart() {
        if (!this.items.length) {
            alert("Your shopping cart is already empty");
            return;
        }

        const isCartCleared = confirm("Are you sure you want to clear all items from your shopping cart?");

        if (isCartCleared) {
            this.items = [];
            this.total = 0;
            this.saveCart();
            productsContainer.innerHTML = "";
            totalNumberOfItems.textContent = 0;
            cartCount.textContent = 0;
            cartTotal.textContent = 0;
        }

    }

    calculateTotal() {
        this.total = this.items.reduce((total, item) => total + item.price, 0);
        cartTotal.textContent = `${this.total}`;
        return this.total;
    };

};

const cart = new ShoppingCart();
const addToCartBtns = document.getElementsByClassName("add-to-cart");


[...addToCartBtns].forEach(
    (btn) => {
        btn.addEventListener("click", (event) => {
            // cartTotalDiv.innerHTML = `
            //     <p>Total number of items: <span id="total-items"></span></p>
            //     <p>Total: <span id="total">&#8358;0</span></p>
            // `;
            alert("Successfully Added to Cart");
            cart.addItem(Number(event.target.id), products);
            totalNumberOfItems.textContent = cart.getCounts();
            cartCount.textContent = cart.getCounts();

            cart.calculateTotal();
        })
    }
); 

clearCartBtn.addEventListener('click', cart.clearCart.bind(cart));












// document.querySelectorAll('*').forEach(el => {
//     if (el.scrollWidth > el.clientWidth) {
//         console.log('Overflowing Element: ', el, 'Width: ', el.scrollWidth, 'Parent Width: ', el.parentNode.clientWidth);
//     }
// })