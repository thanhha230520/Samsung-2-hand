document.addEventListener("DOMContentLoaded", function() {
    let order = JSON.parse(localStorage.getItem("order"));
    const orderInfoContainer = document.getElementById("order-info");

    if (order) {
        let orderHTML = `
            <p><strong>Họ và Tên:</strong> ${order.name}</p>
            <p><strong>Số điện thoại:</strong> ${order.phone}</p>
            <p><strong>Địa chỉ:</strong> ${order.address}</p>
            <p><strong>Phương thức thanh toán:</strong> ${order.payment}</p>
            <h3>Tổng tiền: ${order.total.toLocaleString()}đ</h3>
            <h4>Danh sách sản phẩm:</h4>
            <ul>
        `;

        order.items.forEach(item => {
            orderHTML += `<li>${item.name} - ${item.quantity} x ${item.price}</li>`;
        });

        orderHTML += `</ul>`;

        orderInfoContainer.innerHTML = orderHTML;
    } else {
        orderInfoContainer.innerHTML = "<p>Không có đơn hàng nào.</p>";
    }
});
