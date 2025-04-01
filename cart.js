document.addEventListener("DOMContentLoaded", function() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const cartItemsContainer = document.getElementById("cart-items");
    const totalPriceElement = document.getElementById("total-price");

    function renderCart() {
        cartItemsContainer.innerHTML = "";
        let total = 0;

        cart.forEach((item, index) => {
            let itemTotal = parseInt(item.price.replace(/\D/g, "")) * item.quantity;
            total += itemTotal;

            let row = `
                <tr>
                    <td><img src="${item.image}" width="50"> ${item.name}</td>
                    <td>${item.price}</td>
                    <td>
                        <button class="quantity-btn minus" data-index="${index}">-</button>
                        ${item.quantity}
                        <button class="quantity-btn plus" data-index="${index}">+</button>
                    </td>
                    <td>${itemTotal.toLocaleString()}đ</td>
                    <td><button class="remove-btn" data-index="${index}">Xóa</button></td>
                </tr>
            `;
            cartItemsContainer.innerHTML += row;
        });

        totalPriceElement.innerText = total.toLocaleString() + "đ";
        attachEventListeners();
    }

    function attachEventListeners() {
        document.querySelectorAll(".quantity-btn.plus").forEach(button => {
            button.addEventListener("click", function() {
                let index = this.dataset.index;
                cart[index].quantity++;
                updateCart();
            });
        });

        document.querySelectorAll(".quantity-btn.minus").forEach(button => {
            button.addEventListener("click", function() {
                let index = this.dataset.index;
                if (cart[index].quantity > 1) {
                    cart[index].quantity--;
                    updateCart();
                }
            });
        });

        document.querySelectorAll(".remove-btn").forEach(button => {
            button.addEventListener("click", function() {
                let index = this.dataset.index;
                cart.splice(index, 1);
                updateCart();
            });
        });
    }

    function updateCart() {
        localStorage.setItem("cart", JSON.stringify(cart));
        renderCart();
    }

    renderCart();
});
