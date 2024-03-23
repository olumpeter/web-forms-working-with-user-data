const housePriceInput = document.querySelector('#house_price_input');
const housePriceOutput = document.querySelector('#house_price_output');

housePriceOutput.textContent = housePriceInput.value;

housePriceInput.addEventListener('input', () => {
    housePriceOutput.textContent = housePriceInput.value;
})