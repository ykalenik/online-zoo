const paymentAmountInput = document.querySelector('.payment-form input[name="another-amount"]');

paymentAmountInput.oninput = (event) => {
    if (paymentAmountInput.value.length > paymentAmountInput.maxLength) {
        paymentAmountInput.value = paymentAmountInput.value.slice(0, paymentAmountInput.maxLength);
}};