let cart = [];
let orders = [];

function toggleMenu() {
    document.getElementById('menu').classList.toggle('show');
}

function addToCart(product, price) {
    cart.push({ product, price });
    alert('Đã thêm vào giỏ hàng!');
    renderCart();
}

function renderCart() {
    const cartItems = document.getElementById('cartItems');
    cartItems.innerHTML = '';
    cart.forEach((item, index) => {
        cartItems.innerHTML += `<p>${item.product} - ${item.price.toLocaleString()}đ <button onclick="removeItem(${index})">Xóa</button></p>`;
    });
}

function removeItem(index) {
    cart.splice(index, 1);
    renderCart();
}

function checkout() {
    if(cart.length === 0) {
        alert('Giỏ hàng đang trống!');
        return;
    }
    orders.push([...cart]);
    cart = [];
    renderCart();
    alert('Thanh toán thành công!');
    renderOrders();
}

function renderOrders() {
    const orderList = document.getElementById('orderList');
    orderList.innerHTML = '';
    orders.forEach((order, idx) => {
        orderList.innerHTML += `<p>Đơn hàng #${idx+1}: ${order.length} sản phẩm</p>`;
    });
}

// CHAT BOT
function toggleChat() {
    document.getElementById('chatBody').classList.toggle('show');
}

function sendMsg(e) {
    if (e.key === 'Enter') {
        const input = document.getElementById('chatInput');
        const msg = input.value.trim();
        if (!msg) return;
        document.getElementById('chatBody').innerHTML += `<p><strong>Bạn:</strong> ${msg}</p>`;
        input.value = '';
        botReply(msg);
    }
}

function botReply(msg) {
    let reply = 'Xin lỗi, tôi chưa hiểu ý bạn.';
    if (msg.toLowerCase().includes('giá')) {
        reply = 'Shop có giá từ 5 triệu đến 15 triệu tùy sản phẩm.';
    } else if (msg.toLowerCase().includes('bảo hành')) {
        reply = 'Tất cả sản phẩm bảo hành 6 tháng.';
    } else if (msg.toLowerCase().includes('vip')) {
        reply = 'Thành viên VIP được giảm 10% và hỗ trợ riêng.';
    }
    document.getElementById('chatBody').innerHTML += `<p><strong>Bot:</strong> ${reply}</p>`;
}
