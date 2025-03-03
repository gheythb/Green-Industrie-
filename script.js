// Données des produits
const products = [
    { id: 1, name: "Produit 1", price: 50000000, image: "https://via.placeholder.com/200", description: "Description du produit 1.", rating: 4.5 },
    { id: 2, name: "Produit 2", price: 75000000, image: "https://via.placeholder.com/200", description: "Description du produit 2.", rating: 4.0 },
    { id: 3, name: "Produit 3", price: 100000000, image: "https://via.placeholder.com/200", description: "Description du produit 3.", rating: 3.5 }
];

let cart = [];

// Afficher les produits
function displayProducts(products, containerId) {
    const productGrid = document.getElementById(containerId);
    productGrid.innerHTML = "";
    products.forEach(product => {
        const card = `
            <div class="product-card">
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>${formatPrice(product.price)} TND</p>
                <button onclick="showProductDetails(${JSON.stringify(product)})" class="btn">Voir les détails</button>
                <button onclick="addToCart(${product.id})" class="btn">Ajouter au panier</button>
            </div>
        `;
        productGrid.innerHTML += card;
    });
}

// Formater le prix en millions
function formatPrice(price) {
    return (price / 1000000).toFixed(2) + "M";
}

// Afficher tous les produits
function fetchProducts() {
    displayProducts(products, "product-grid");
}

// Afficher les produits les plus populaires
function fetchPopularProducts() {
    const popularProducts = products.filter(product => product.rating >= 4);
    displayProducts(popularProducts, "popular-product-grid");
}

// Ajouter un produit au panier
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    updateCart();
}

// Mettre à jour le panier
function updateCart() {
    const cartItems = document.getElementById("cart-items");
    const cartCount = document.getElementById("cart-count");
    cartItems.innerHTML = "";
    cart.forEach(item => {
        cartItems.innerHTML += `<p>${item.name} - ${formatPrice(item.price)} TND</p>`;
    });
    cartCount.textContent = cart.length;
}

// Passer à la caisse
document.getElementById("checkout-btn").addEventListener("click", () => {
    if (cart.length === 0) {
        alert("Votre panier est vide!");
    } else {
        alert("Merci pour votre achat!");
        cart = [];
        updateCart();
    }
});

// Afficher les détails du produit dans une fenêtre modale
function showProductDetails(product) {
    const modal = document.getElementById("product-modal");
    const modalTitle = document.getElementById("modal-title");
    const modalImage = document.getElementById("modal-image");
    const modalDescription = document.getElementById("modal-description");
    const modalPrice = document.getElementById("modal-price");

    modalTitle.textContent = product.name;
    modalImage.src = product.image;
    modalDescription.textContent = product.description;
    modalPrice.textContent = formatPrice(product.price);

    modal.style.display = "block";

    // Fermer la fenêtre modale en cliquant sur le bouton de fermeture
    const closeBtn = document.querySelector(".close");
    closeBtn.onclick = () => {
        modal.style.display = "none";
    };

    // Fermer la fenêtre modale en cliquant à l'extérieur
    window.onclick = (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    };
}

// Charger le code lorsque la page est prête
document.addEventListener("DOMContentLoaded", () => {
    fetchProducts(); // Charger tous les produits
    fetchPopularProducts(); // Charger les produits les plus populaires
});
