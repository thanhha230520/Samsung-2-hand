document.addEventListener("DOMContentLoaded", function() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const totalPriceElement = document.getElementById("total-price");
    const checkoutForm = document.getElementById("checkout-form");

    function calculateTotal() {
        let total = cart.reduce((sum, item) => sum + (parseInt(item.price.replace(/\D/g, "")) * item.quantity), 0);
        totalPriceElement.innerText = total.toLocaleString() + "đ";
        return total;
    }

    checkoutForm.addEventListener("submit", function(event) {
        event.preventDefault();

        let order = {
            name: document.getElementById("name").value,
            phone: document.getElementById("phone").value,
            address: document.getElementById("address").value,
            payment: document.getElementById("payment").value,
            total: calculateTotal(),
            items: cart
        };

        localStorage.setItem("order", JSON.stringify(order));
        localStorage.removeItem("cart");

        alert("Đơn hàng đã được đặt thành công!");
        window.location.href = "order.html";
    });

    calculateTotal();
});
