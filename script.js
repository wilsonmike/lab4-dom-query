// #1 VENDING MACHINE
// Create four buttons. Each button represents a different product with a different price. Also
// display a total, which starts at $0.00. Whenever a button is clicked, update the total by adding
// the price of that item.

let snacks = document.querySelectorAll(".snack-price");
let sum = 0; 

document.querySelectorAll('.snack-price').forEach((item) => {
    item.addEventListener('click', event => {
        let total = parseFloat(item.getAttribute("data-price"));
        sum += total;
        let totalCost = document.querySelector(".total-cost");
        totalCost.classList.add("money-line");
        totalCost.innerText = `Your total is $${sum} dollars`; 
    });
});

let rewind = document.querySelector(".reset-total");
rewind.addEventListener('click', () => {
    let totalCost = document.querySelector(".total-cost");
    totalCost.innerText = ""; 
});

let formMoney = document.querySelector(".form-money");
formMoney.addEventListener("submit" , (e) => {
    e.preventDefault();
    let formData = new FormData(formMoney);
    let numberofCoins = formData.get("howMany");
    let typeofcoin = formData.get("coin");
    for (let i = 1; i <= numberofCoins; i++) {
        let newCoin = document.createElement("div");
        newCoin.innerText = `${typeofcoin}`; 
        let coinContainer = document.querySelector(".coin-container");
        coinContainer.append(newCoin);
        newCoin.classList.add("coin-img"); 
        newCoin.addEventListener("click", () => {
            newCoin.style.display = "none";
        });
    }
    formMoney.reset(); 
});

let lightBulb = document.querySelector(".light-bulb");
let onButton = document.querySelector(".on-btn");
onButton.addEventListener("click", () => {
    lightBulb.classList.add("on-yellow");
});
let offButton = document.querySelector(".off-btn");
offButton.addEventListener("click", () => {
    lightBulb.classList.remove("on-yellow");
});
let toggleButton = document.querySelector(".toggle-btn");
toggleButton.addEventListener("click", () => {
    lightBulb.classList.toggle("on-yellow");
});
let endButton = document.querySelector(".destroy");
endButton.addEventListener("click", () => {
    lightBulb.style.display = "none"; 
    onButton.style.backgroundColor = "red"; 
    offButton.style.backgroundColor = "red";
    toggleButton.style.backgroundColor = "red";
});