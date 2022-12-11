const smallScreenMql = window.matchMedia('(max-width: 640px)');
const testimonialTexts = document.querySelectorAll('.testimonial-text');
const body = document.querySelector('body');


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