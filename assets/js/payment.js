document.getElementById('payment-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const paymentMethod = document.getElementById('payment-method').value;

    if (paymentMethod === 'momo') {
        alert('Thanh toán qua Momo');
    } else if (paymentMethod === 'vnpay') {
        alert('Thanh toán qua VNPay');
    } else if (paymentMethod === 'paypal') {
        alert('Thanh toán qua PayPal');
    }
});
