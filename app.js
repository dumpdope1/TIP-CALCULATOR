const totalAmountHolder = document.querySelector('.totalAmountHolder p');
const tipAmountHolder = document.querySelector('.tipAmountHolder p');
const amountHolder = document.querySelector('.amountHolder');
const button = document.querySelector('.button');
const peopleHolder = document.querySelector('.peopleHolder');

function tipCalculator () {
const fifteenPercent = document.querySelector('.btn15');
const fivePercent = document.querySelector('.btn5');
const tenPercent = document.querySelector('.btn10');
const tewentyfivePercent = document.querySelector('.btn25');
const fiftyPercent = document.querySelector('.btn50');
const custom = document.querySelector('.custom');

//START OF custom CODE
custom.addEventListener('click', function () {
    customPercentage = `0.${custom.value}`;
    const customPercentTip = amountHolder.value * +customPercentage / peopleHolder.value;
    const customPercentCalculation = customPercentTip + amountHolder.value / peopleHolder.value;

    tipAmountHolder.innerHTML = `$${customPercentTip.toFixed(2)}`;
    totalAmountHolder.innerHTML = `$${customPercentCalculation.toFixed(2)}`;
})
//END OF custom CODE


// START OF fiftyPercent CODE
fiftyPercent.addEventListener("click", function () {
    const fiftyPercentTip = amountHolder.value * 0.50 / peopleHolder.value;
    const fiftyPercentCalculation = fiftyPercentTip + amountHolder.value / peopleHolder.value;

    tipAmountHolder.innerHTML = `$${fiftyPercentTip.toFixed(2)}`;
    totalAmountHolder.innerHTML = `$${fiftyPercentCalculation.toFixed(2)}`;
})
//END OF START OF fiftyPercent CODE

// START OF tewentyfivePercent CODE
tewentyfivePercent.addEventListener("click", function () {
    const tewentyfivePercentTip = amountHolder.value * 0.25 / peopleHolder.value;
    const tewentyfivePercentCalculation = tewentyfivePercentTip + amountHolder.value / peopleHolder.value;

    tipAmountHolder.innerHTML = `$${tewentyfivePercentTip.toFixed(2)}`;
    totalAmountHolder.innerHTML = `$${tewentyfivePercentCalculation.toFixed(2)}`;
})
// END OF tewentyfivePercent CODE

//START OF tenPercent CODE
tenPercent.addEventListener("click", function () {
    const tenPercentTip = amountHolder.value * 0.10 / peopleHolder.value;
    const tenPercentCalculation = tenPercentTip + amountHolder.value / peopleHolder.value;

    tipAmountHolder.innerHTML = `$${tenPercentTip.toFixed(2)}`;
    totalAmountHolder.innerHTML = `$${tenPercentCalculation.toFixed(2)}`;
})
//END OF tenPercent CODE

//START OF fivePercent CODE
fivePercent.addEventListener("click", function () {
    const fiverPercentTip = amountHolder.value * 0.05 / peopleHolder.value;
    const fivePercentCalculation = fiverPercentTip + amountHolder.value / peopleHolder.value;

    tipAmountHolder.innerHTML = `$${fiverPercentTip.toFixed(2)}`;
    totalAmountHolder.innerHTML = `$${fivePercentCalculation.toFixed(2)}`;
})
//END OF five percent CODE

// START OF fifteenPercent CODE 
fifteenPercent.addEventListener("click", function () {
    const calculation = amountHolder.value * 0.15 / peopleHolder.value;
    const fifteenPercentCalculation = calculation + amountHolder.value / peopleHolder.value;

    tipAmountHolder.innerHTML = `$${calculation.toFixed(2)}`;
    totalAmountHolder.innerHTML = `$${fifteenPercentCalculation.toFixed(2)}`;
})
// END OF fifteenPercent CODE

// CALCULATOR APP RESET FUNCTION
const reset = document.querySelector('.reset')

reset.addEventListener("click", function() {

    tipAmountHolder.innerHTML = `$0.00`;
    totalAmountHolder.innerHTML = `$0.00`;
    amountHolder.value = "";
    peopleHolder.value = "";
})
// END OF CALCULATOR APP RESET FUNCTION
}

tipCalculator();
