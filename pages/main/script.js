const smallScreenMql = window.matchMedia('(max-width: 640px)');
const testimonialTexts = document.querySelectorAll('.testimonial-text');
const testimonials = document.querySelectorAll('.testimonial');
const body = document.querySelector('body');
const testimonialsSlider = document.querySelector('#testimonials-slider');


testimonialTexts.forEach((el) => el.addEventListener('click', (e) => {
    if (smallScreenMql.matches) {
        const popupEl = document.createElement('div');
        popupEl.classList.add('popup');
        const popUpMessage = document.createElement('div');
        popUpMessage.classList.add('popup-message');
        popUpMessage.appendChild(
            document.createTextNode(e.target.textContent)
        );
        const closeBtn = document.createElement('button');
        closeBtn.appendChild(document.createTextNode('Close'));
        popUpMessage.appendChild(closeBtn);

        popupEl.appendChild(popUpMessage);
        [popupEl, closeBtn].forEach((el) => el.addEventListener('click', () => popupEl.remove()));

        body.appendChild(popupEl);
      }
}));


let previousSliderValue = new Number(testimonialsSlider.value) - 1;
testimonialsSlider.addEventListener('change', (e) => {
    const max = new Number(testimonialsSlider.getAttribute('max')) - 1;
    const step = new Number(testimonialsSlider.getAttribute('step'));
    const curr = new Number(testimonialsSlider.value) - 1;

    const indexesToShow = [];
    if (curr > previousSliderValue) {
        if (curr - previousSliderValue > step) {
            for (let i = curr - step + 1; i <= curr; i++) {
                indexesToShow.push(i);
            }
        } else {
            for (let i = previousSliderValue + 1; i <= previousSliderValue + step; i++) {
                indexesToShow.push(i);
            }
        }
    } else {
        for (let i = curr - step + 1; i <= curr; i++) {
            indexesToShow.push(i);
        }
    }

    for(let i = 0; i <= max; i++) {
        if (indexesToShow.includes(i)) {
            testimonials[i].classList.remove('hidden');
        } else {
            testimonials[i].classList.add('hidden');
        }
    }
    previousSliderValue = new Number(e.target.value) - 1;
});