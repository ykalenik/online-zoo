const customPaymentAmountInput = document.querySelector('.payment-form input[name="another-amount"]');
const paymentAmountInputs = document.querySelectorAll('input[name=payment-amout]');
const paymentAmountWrappers = document.querySelectorAll('.payment-slider-wrapper');

window.addEventListener("resize", (e) => {
    const width = window.innerWidth;
    if (width <= 1000 && width >= 640) {
        hideAmouts(['5000']);
        showAmouts(['2000', '1000']);
    } else if (width < 640) {
        hideAmouts(['5000', '2000', '1000']);
    } else {
        paymentAmountWrappers.forEach((el) => el.classList.remove('hidden'));
    }
});

paymentAmountInputs.forEach((el) => el.addEventListener('click', (e) => {
    customPaymentAmountInput.value = e.target.value;
}));

customPaymentAmountInput.oninput = (event) => {
    if (customPaymentAmountInput.value.length > customPaymentAmountInput.maxLength) {
        customPaymentAmountInput.value = customPaymentAmountInput.value.slice(0, customPaymentAmountInput.maxLength);
    }
    paymentAmountInputs.forEach((amountEl) => {
        amountEl.checked = event.target.value === amountEl.value;
    })
};

function hideAmouts(amountsToHide) {
    paymentAmountWrappers.forEach((el) => {
        const currentPaymentAmout = el.querySelector('input').value;
        if (amountsToHide.includes(currentPaymentAmout)) {
            el.classList.add('hidden');
        }
    });
}

function showAmouts(amountsToShow) {
    paymentAmountWrappers.forEach((el) => {
        const currentPaymentAmout = el.querySelector('input').value;
        if (amountsToShow.includes(currentPaymentAmout)) {
            el.classList.remove('hidden');
        }
    });
}