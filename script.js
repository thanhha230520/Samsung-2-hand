// Xử lý menu ẩn (menu 3 gạch)
document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.querySelector(".menu-toggle");
    const menuList = document.querySelector(".menu-list");

    menuToggle.addEventListener("click", function() {
        menuList.classList.toggle("show");
    });
});

// Xử lý thêm vào giỏ hàng
document.addEventListener("DOMContentLoaded", function() {
    const addToCartButtons = document.querySelectorAll(".add-to-cart");

    addToCartButtons.forEach(button => {
        button.addEventListener("click", function() {
            const product = this.parentElement;
            const productName = product.querySelector("h3").innerText;
            const productPrice = product.querySelector("p").innerText.replace("Giá: ", "");
            const productImage = product.querySelector("img").src;

            let cart = JSON.parse(localStorage.getItem("cart")) || [];
            let itemIndex = cart.findIndex(item => item.name === productName);

            if (itemIndex >= 0) {
                cart[itemIndex].quantity += 1;
            } else {
                cart.push({ name: productName, price: productPrice, image: productImage, quantity: 1 });
            }

            localStorage.setItem("cart", JSON.stringify(cart));
            alert("Đã thêm vào giỏ hàng!");
        });
    });
});
