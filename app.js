let amountElement = document.querySelector(".buttonOne");
let group = document.querySelector(".btn-group1");
let groupOne= document.querySelector(".btn-groupTwo");
let currency = new Currency("RUB","USD");
let input= document.querySelector(".buttonThree");
eventListeners();
const numberMask = IMask(
    document.querySelector('input[name=to]'), {
        mask: Number,
        radix: '.',
        mapToRadix: [',']
    });
const numberMaskk = IMask(
    document.querySelector('input[name=from]'), {
        mask: Number,
        radix: '.',
        mapToRadix: [',']
    });
function eventListeners() {
    amountElement.addEventListener("input",exchangeCurrency);
    group.addEventListener("click", first)
    groupOne.addEventListener("click", second)
    
}
function first(e){
    currency.changeAmount(amountElement.value);
    currency.changeFirstCurrency(e.target.textContent)

    currency.exchange()
    .then(result => input.value=result)
    .catch(err => console.log(err));
}
function second(e){
    currency.changeAmount(amountElement.value);
    currency.changeSecondCurrency(e.target.textContent)
    currency.exchange()
    .then(result =>input.value=result)
    .catch(err => console.log(err));
   
}
function exchangeCurrency(){
    currency.changeAmount(amountElement.value);
    currency.exchange()
    .then(result => input.value=result)
    .catch(err => console.log(err));
}
