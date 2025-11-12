// Base de datos de productos
const products = [
    {
        id: 1,
        name: "Camiseta Tirtantes Básica Blanca",
        price: 15.99,
        image: "🎽",
        description: "100% algodón, diseño minimalista"
    },
    {
        id: 2,
        name: "Camiseta Negra Premium",
        price: 19.99,
        image: "👕",
        description: "Tela premium, corte moderno"
    },
    {
        id: 3,
        name: "Chandal Azul Marino",
        price: 17.99,
        image: "👔",
        description: "Versátil y cómoda"
    },
    {
        id: 4,
        name: "Zapatillas Gris Deportiva",
        price: 22.99,
        image: "👟",
        description: "Ideal para deportes"
    },
    {
        id: 5,
        name: "Chanclas Roja Casual",
        price: 16.99,
        image: "🩴",
        description: "Estilo casual y fresco"
    },
    {
        id: 6,
        name: "Mocuhilas",
        price: 24.99,
        image: "🎒",
        description: "Materiales sostenibles"
    }
];

// Carrito de compras
let cart = [];

// Inicializar la tienda
function initStore() {
    renderProducts();
    updateCartDisplay();
}

// Renderizar productos
function renderProducts() {
    const grid = document.getElementById('products-grid');
    grid.innerHTML = products.map(product => `
        <div class="product-card">
            <div class="emoji">${product.image}</div>
            <h3>${product.name}</h3>
            <p class="description">${product.description}</p>
            <p class="price">€${product.price.toFixed(2)}</p>
            <button class="add-to-cart-btn" onclick="addToCart(${product.id})">
                🛒 Añadir al Carrito
            </button>
        </div>
    `).join('');
}

// Añadir al carrito
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    
    updateCartDisplay();
    showNotification(`${product.name} añadida al carrito`);
}

// Actualizar cantidad
function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    
    if (item) {
        item.quantity += change;
        
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            updateCartDisplay();
        }
    }
}

// Eliminar del carrito
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartDisplay();
}

// Actualizar visualización del carrito
function updateCartDisplay() {
    // Actualizar contador
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.getElementById('cart-count').textContent = totalItems;
    
    // Actualizar items
    const cartItemsContainer = document.getElementById('cart-items');
    
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = `
            <div class="empty-cart">
                <div class="empty-cart-icon">🛒</div>
                <p>Tu carrito está vacío</p>
            </div>
        `;
    } else {
        cartItemsContainer.innerHTML = cart.map(item => `
            <div class="cart-item">
                <div class="emoji">${item.image}</div>
                <div class="cart-item-info">
                    <h4>${item.name}</h4>
                    <p class="price">€${item.price.toFixed(2)}</p>
                </div>
                <div class="cart-item-controls">
                    <button class="qty-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                    <span>${item.quantity}</span>
                    <button class="qty-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                    <button class="remove-btn" onclick="removeFromCart(${item.id})">🗑️</button>
                </div>
            </div>
        `).join('');
    }
    
    // Actualizar total
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    document.getElementById('cart-total').textContent = `€${total.toFixed(2)}`;
}

// Toggle carrito
function toggleCart() {
    const sidebar = document.getElementById('cart-sidebar');
    const overlay = document.getElementById('overlay');
    
    sidebar.classList.toggle('active');
    overlay.classList.toggle('active');
}

// Finalizar compra
function checkout() {
    if (cart.length === 0) {
        alert('Tu carrito está vacío');
        return;
    }
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0).toFixed(2);
    
    alert(`¡Gracias por tu compra! Total: €${total}`);
    
    cart = [];
    updateCartDisplay();
    toggleCart();
}

// Mostrar notificación
function showNotification(message) {
    // Crear elemento de notificación
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #4CAF50;
        color: white;
        padding: 15px 25px;
        border-radius: 8px;
        box-shadow: 0 2px 10px rgba(0,0,0,0.2);
        z-index: 10000;
        animation: slideIn 0.3s ease-out;
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Eliminar después de 3 segundos
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-out';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Agregar animaciones CSS dinámicamente
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Inicializar cuando cargue la página
document.addEventListener('DOMContentLoaded', initStore);