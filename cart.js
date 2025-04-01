let cart = JSON.parse(localStorage.getItem('cart')) || [];

function updateCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = '';

    cart.forEach(item => {
        const div = document.createElement('div');
        div.classList.add('cart-item');
        div.innerHTML = `
            <p>${item.name} - ${item.price} VNĐ</p>
            <p>Số lượng: ${item.quantity}</p>
            <button class="remove-item" data-id="${item.id}">Xóa</button>
        `;
        cartItemsContainer.appendChild(div);
    });

    const checkoutButton = document.getElementById('checkout');
    checkoutButton.addEventListener('click', () => {
        window.location.href = 'payment.html';
    });
}

document.addEventListener('DOMContentLoaded', updateCart);

document.getElementById('cart-items').addEventListener('click', function(event) {
    if (event.target.classList.contains('remove-item')) {
        const itemId = event.target.dataset.id;
        cart = cart.filter(item => item.id !== itemId);
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCart();
    }
});
