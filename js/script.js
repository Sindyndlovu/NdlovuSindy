let cart = [];

function addToCart(productName) {
    cart.push(productName);
    renderCart();
    document.getElementById('cartSection').style.display = 'block';
}

function renderCart() {
    const cartItems = document.getElementById('cartItems');
    cartItems.innerHTML = '';
    cart.forEach((item, index) => {
        const li = document.createElement('li');
        li.innerHTML = `${item} <button onclick="removeFromCart(${index})">Remove</button>`;
        cartItems.appendChild(li);
    });
}

function removeFromCart(index) {
    cart.splice(index, 1);
    renderCart();
    if (cart.length === 0) {
        document.getElementById('cartSection').style.display = 'none';
    }
}

function completeOrder() {
    if (cart.length === 0) {
        alert('Your cart is empty! Add some products before completing the order.');
        return;
    }
    alert('Order completed successfully!');
    cart = [];
    renderCart();
    document.getElementById('cartSection').style.display = 'none';
}
