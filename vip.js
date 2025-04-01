document.addEventListener("DOMContentLoaded", function() {
    const vipForm = document.getElementById("vip-form");
    const vipStatus = document.getElementById("vip-status");

    function loadVipInfo() {
        let vipInfo = JSON.parse(localStorage.getItem("vipMember"));
        if (vipInfo) {
            vipStatus.innerHTML = `
                <h3>🎉 Bạn đã là thành viên VIP!</h3>
                <p><strong>Họ và Tên:</strong> ${vipInfo.name}</p>
                <p><strong>Số điện thoại:</strong> ${vipInfo.phone}</p>
                <p><strong>Email:</strong> ${vipInfo.email}</p>
                <p>💎 Bạn được giảm giá 10% cho mọi đơn hàng!</p>
            `;
        }
    }

    vipForm.addEventListener("submit", function(event) {
        event.preventDefault();

        let vipMember = {
            name: document.getElementById("vip-name").value,
            phone: document.getElementById("vip-phone").value,
            email: document.getElementById("vip-email").value
        };

        localStorage.setItem("vipMember", JSON.stringify(vipMember));

        alert("Chúc mừng! Bạn đã trở thành thành viên VIP 🎉");
        loadVipInfo();
    });

    loadVipInfo();
});
