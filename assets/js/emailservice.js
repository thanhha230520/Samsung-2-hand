const sgMail = require('@sendgrid/mail');
sgMail.setApiKey('SENDGRID_API_KEY'); // Thay bằng API Key của bạn

function sendOrderConfirmationEmail(customerEmail, orderId, orderDetails) {
    const msg = {
        to: customerEmail,
        from: 'no-reply@samsung2hand.com',
        subject: 'Xác nhận đơn hàng của bạn',
        text: `Cảm ơn bạn đã mua hàng tại Samsung 2 Hand! \n
               Đơn hàng của bạn đã được xác nhận. \n
               Mã đơn hàng: ${orderId} \n
               Chi tiết đơn hàng: ${orderDetails} \n
               Chúng tôi sẽ sớm giao hàng đến bạn.`,
        html: `<p>Cảm ơn bạn đã mua hàng tại Samsung 2 Hand!</p>
               <p>Đơn hàng của bạn đã được xác nhận. <br>
               Mã đơn hàng: <strong>${orderId}</strong> <br>
               Chi tiết đơn hàng: <strong>${orderDetails}</strong></p>
               <p>Chúng tôi sẽ sớm giao hàng đến bạn.</p>`
    };

    sgMail
        .send(msg)
        .then(() => {
            console.log('Email xác nhận đã được gửi!');
        })
        .catch((error) => {
            console.error(error);
        });
}

module.exports = sendOrderConfirmationEmail;
