const menuIcon = document.querySelector('.menu-icon');
const menuDropdown = document.querySelector('.menu-dropdown');
const cartIcon = document.querySelector('.cart-icon');
const cartDropdown = document.querySelector('.cart-dropdown');
const profileIcon = document.querySelector('.profile-icon')
const login = document.getElementById('login');
const profileDropdown = document.querySelector('.profile-dropdown');
const closeBtn = document.getElementById('close-btn');
const productsContainer = document.querySelector('#products-container');
const shopProducts = document.querySelector('.products');
const totalNumberOfItems = document.getElementById('total-items');
const cartTotal = document.getElementById('total');
const clearCartBtn = document.getElementById("clear-cart-btn");
const cartCount = document.querySelector('.cart-count');



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
        imgSrc: "Images/yiliyacoco.jpg",
        name: "Yiliyacoco Perfume",
        price: 9000
    },
    {
        id: 2,
        imgSrc: "Images/flower of story.jpg",
        name: "Flower of story Perfume",
        price: 9500
    },
    {
        id: 3,
        imgSrc: "Images/dignife.jpg",
        name: "Dignife Pink Pack Perfume",
        price: 10000
    },
    {
        id: 4,
        imgSrc: "Images/3in1 beautiful.jpg",
        name: "3 in 1 Beautiful Perfume",
        price: 10000
    },    
    {
        id: 5,
        imgSrc: "Images/bag022.jpg",
        name: "Bag 001",
        price: 8500
    },
    {
        id: 6,
        imgSrc: "Images/bag023.jpg",
        name: "Bag 002",
        price: 9000
    },
    {
        id: 7,
        imgSrc: "Images/Bag 024.jpg",
        name: "Bag 003",
        price: 9000
    },
    {
        id: 8,
        imgSrc: "Images/girls shoe01.jpg",
        name: "Girls Shoe 001",
        price: 13800
    },
    {
        id: 9,
        imgSrc: "Images/lingerie001.jpg",
        name: "Lingerie (Up and Down)",
        price: 4000
    },
    {
        id: 10,
        imgSrc: "Images/12 inches ringlight.jpg",
        name: "12 Inches RingLight with Tripod",
        price: 28000
    },
    {
        id: 11,
        imgSrc: "Images/10 inches ringlight.jpg",
        name: "10 Inches RingLight with Tripod",
        price: 25500
    },
    {
        id: 12,
        imgSrc: "Images/black mask.jpg",
        name: "Black Face Mask",
        price: 3500
    },
    {
        id: 13,
        imgSrc: "Images/beard oil.jpg",
        name: "Beard Growth Oil",
        price: 3400
    },
    {
        id: 14,
        imgSrc: "Images/laptop table 60cm.jpg",
        name: "Laptop Table 60cm",
        price: 28000
    },
    {
        id: 15,
        imgSrc: "Images/fibroid tea.jpg",
        name: "Fibroid Tea",
        price: 7000
    },
    {
        id: 16,
        imgSrc: "Images/flat tummy tea.jpg",
        name: "Flat Tummy Tea with Moringa",
        price: 7000
    },
    {
        id: 17,
        imgSrc: "Images/mini sewing machine.jpg",
        name: "Mini Sewing Machine",
        price: 20500
    },
    {
        id: 18,
        imgSrc: "Images/kitchen napkin.jpg",
        name: "Kitchen Napkin",
        price: 5000
    },
    {
        id: 19,
        imgSrc: "Images/costume jewelry 001.jpg",
        name: "Costume Jewelry 001",
        price: 30000
    },
    {
        id: 20,
        imgSrc: "Images/costume jewelry 002.jpg",
        name: "Costume Jewelry 002",
        price: 30000
    },
    {
        id: 21,
        imgSrc: "Images/costume jewelry 003.jpg",
        name: "Costume Jewelry 003",
        price: 30000
    },
    {
        id: 22,
        imgSrc: "Images/costume jewelry 004.jpg",
        name: "Costume Jewelry 004",
        price: 30000
    },
    {
        id: 23,
        imgSrc: "Images/costume jewelry 005.jpg",
        name: "Dignife Pink Pack Perfume",
        price: 30000
    },
    {
        id: 24,
        imgSrc: "Images/costume jewelry 006.jpg",
        name: "Costume Jewelry 006",
        price: 30000
    },    
    {
        id: 25,
        imgSrc: "Images/costume jewelry 007.jpg",
        name: "Costume Jewelry 007",
        price: 15000
    },
    {
        id: 26,
        imgSrc: "Images/girls dress 001.jpg",
        name: "Girls Dress 001",
        price: 12000
    }
];

products.forEach(({ name, imgSrc, id, price }) => {
    shopProducts.innerHTML += `
        <div class="product">
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
        this.loadFromLocalStorage();
    }

    saveToLocalStorage() {
        localStorage.setItem('cartItems', JSON.stringify(this.items));
        localStorage.setItem('cartTotal', this.total);
    }

    loadFromLocalStorage() {
        const savedItems = localStorage.getItem('cartItems');
        const savedTotal = localStorage.getItem('cartTotal');

        if (savedItems) {
            this.items = JSON.parse(savedItems);
            this.total = Number(savedTotal);
            this.items.forEach(({ id, imgSrc, name, price }) => {
                productsContainer.innerHTML += `
                    <div id="slide${id}" class="collection">
                        <div class="collection-img">
                            <img src="${imgSrc}" alt="${name}">
                        </div>
                        <div class="collection-info">
                            <p><span class="product-count" id="product-count-for-id${id}"></span>${name}</p>
                            <p>&#8358;${price}</p>
                            <button class="remove-button" data-id="${id}">Remove</button>
                        </div>
                    </div><br>
                `;
            });
            totalNumberOfItems.textContent = this.getCounts();
            cartCount.textContent = this.getCounts();
            cartTotal.textContent = `${this.total}`;
        }
    }

    addItem(id, products) {
        const product = products.find((item) => item.id === id);
        const { name, imgSrc, price } = product;
        this.items.push(product);

        const totalCountPerProduct = {};
        this.items.forEach((collection) => {
            totalCountPerProduct[collection.id] = (totalCountPerProduct[collection.id] || 0) + 1;
        });

        const currentProductCount = totalCountPerProduct[product.id];
        const currentProductCountSpan = document.getElementById(`product-count-for-id${id}`);

        currentProductCount > 1 ? currentProductCountSpan.textContent = `${currentProductCount}x ` : productsContainer.innerHTML += `            
            <div id="slide${id}" class="collection">
                <div class="collection-img">
                    <img src="${imgSrc}" alt="${name}">
                </div>
                <div class="collection-info">
                    <p><span class="product-count" id="product-count-for-id${id}"></span>${name}</p>
                    <p>&#8358;${price}</p>
                    <button class="remove-button">Remove</button>
                </div>
            </div><br>
        `;
        this.saveToLocalStorage();
    };

    removeItem(id) { 
        const itemIndex = this.items.findIndex(item => item.id === id);
        if (itemIndex > -1) {
            this.items.splice(itemIndex, 1);
            const totalCountPerProduct = {};
            this.items.forEach((feature) => {
                totalCountPerProduct[feature.id] = (totalCountPerProduct[feature.id] || 0) + 1;
            });

            const currentProductCount = totalCountPerProduct[id];
            const currentProductCountSpan = document.getElementById(`product-count-for-id${id}`);

            if (currentProductCount > 0) {
                currentProductCountSpan.textContent = `${currentProductCount}x `;
            } else {
                const productElement = document.getElementById(`slide${id}`);
                if (productElement) {
                    productElement.remove();
                }
            }
        }
        totalNumberOfItems.textContent = this.getCounts();
        cartCount.textContent = this.getCounts();
        this.calculateTotal();
        this.saveToLocalStorage();
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
            productsContainer.innerHTML = "";
            totalNumberOfItems.textContent = 0;
            cartCount.textContent = 0;
            cartTotal.textContent = 0;
            this.saveToLocalStorage();
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

productsContainer.addEventListener('click', (event) => {
    if (event.target.classList.contains('remove-button')) {
        const id = Number(event.target.dataset.id);
        cart.removeItem(id);
    }
});

clearCartBtn.addEventListener('click', cart.clearCart.bind(cart));


