let inputPrice = document.getElementById('inputPrice');
let inputSale = document.getElementById('inputSale');
let par = document.getElementsByClassName('output')[0];
let finalPrice;
function percentage(cash, per) {
    return cash/100*per;
};
function sumCalc() {
    let price = inputPrice.value;
    let sale = inputSale.value;
    return price - percentage(price, sale);
};

inputSale.oninput = function () {
    finalPrice = sumCalc();
    par.innerText = `Кінцева ціна ${finalPrice} грн`;
};
inputPrice.oninput = function () {
    if (isNaN(Number(inputPrice.value))) {
        alert('Впишіть тільки цифри! Без % та букв!');  
    }
};
inputSale.addEventListener ('input', function () {
    if (isNaN(Number(inputSale.value))) {
        alert('Впишіть тільки цифри! Без % та букв!');  
    }
});
