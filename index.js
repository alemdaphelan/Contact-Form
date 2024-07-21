

const radioButtons = document.querySelectorAll('input[type="radio"]');
[...radioButtons].forEach(radio => {
    radio.addEventListener('change', () => {
        [...document.querySelectorAll('.radio-icon')].forEach(icon => {
            icon.classList.remove('selected');
        });
        [...document.querySelectorAll('.radio-input')].forEach(input => {
            input.classList.remove('clicked');
            input.style.borderColor = "hsl(186, 15%, 59%)"
        })
        const id = radio.id;
        document.querySelector(`.radio-icon[data-target="${id}"]`).classList.add('selected');
        document.querySelector(`.radio-input[data-target="${id}"]`).classList.add('clicked');
        document.querySelector(`.radio-input[data-target="${id}"]`).style.borderColor = "hsl(169, 82%, 27%)"
    });
});
document.querySelector('input[type="radio"]:checked')?.dispatchEvent(new Event('change'));
const form = document.querySelector('form');
let isSubmited = false;
const nofitication = document.getElementById('nofitication');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    nofitication.style.display = "block"
    setTimeout(() => nofitication.style.display = "none", 2500);
})