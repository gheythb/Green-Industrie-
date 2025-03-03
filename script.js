// بيانات المنتجات (يمكن استبدالها ببيانات من قاعدة بيانات)
const products = [
    { id: 1, name: "منتج 1", price: 100, image: "https://via.placeholder.com/200" },
    { id: 2, name: "منتج 2", price: 200, image: "https://via.placeholder.com/200" },
    { id: 3, name: "منتج 3", price: 300, image: "https://via.placeholder.com/200" }
];

let cart = [];

// عرض المنتجات
function displayProducts() {
    const productGrid = document.getElementById("product-grid");
    productGrid.innerHTML = "";
    products.forEach(product => {
        const card = `
            <div class="product-card">
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>${product.price} ريال</p>
                <button onclick="addToCart(${product.id})" class="btn">إضافة إلى العربة</button>
            </div>
        `;
        productGrid.innerHTML += card;
    });
}

// إضافة منتج إلى العربة
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    updateCart();
}

// تحديث عربة التسوق
function updateCart() {
    const cartItems = document.getElementById("cart-items");
    const cartCount = document.getElementById("cart-count");
    cartItems.innerHTML = "";
    cart.forEach(item => {
        cartItems.innerHTML += `<p>${item.name} - ${item.price} ريال</p>`;
    });
    cartCount.textContent = cart.length;
}

// إتمام الشراء
document.getElementById("checkout-btn").addEventListener("click", () => {
    if (cart.length === 0) {
        alert("عربة التسوق فارغة!");
    } else {
        alert("شكراً لك على الشراء!");
        cart = [];
        updateCart();
    }
});

// تشغيل الكود عند تحميل الصفحة
document.addEventListener("DOMContentLoaded", () => {
    displayProducts();
});
// جلب بيانات المنتجات من ملف JSON
async function fetchProducts() {
    try {
        const response = await fetch('products.json'); // جلب البيانات من الملف
        const products = await response.json(); // تحويل البيانات إلى كائن JavaScript
        displayProducts(products); // عرض المنتجات
    } catch (error) {
        console.error("حدث خطأ أثناء جلب البيانات:", error);
    }
}

// عرض المنتجات
function displayProducts(products) {
    const productGrid = document.getElementById("product-grid");
    productGrid.innerHTML = "";
    products.forEach(product => {
        const card = `
            <div class="product-card">
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>${product.price} ريال</p>
                <button onclick="addToCart(${product.id})" class="btn">إضافة إلى العربة</button>
            </div>
        `;
        productGrid.innerHTML += card;
    });
}

// تشغيل الكود عند تحميل الصفحة
document.addEventListener("DOMContentLoaded", () => {
    fetchProducts(); // جلب المنتجات وعرضها
});