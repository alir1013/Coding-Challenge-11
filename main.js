//Task 2:Add event listener for product selection and quantity input
//Extracts data from HTML
const productDropdown = document.getElementById('product-dropdown');
const quantityInput = document.getElementById('quantity');
const totalPrice = document.getElementById('total-price');

const placeOrderButton = document.getElementById('place-order'); 
const orderSummary = document.getElementById('order-summary');

//Adds event listeners to dropdown 
productDropdown.addEventListener('change', updateTotalPrice);
quantityInput.addEventListener('input', updateTotalPrice);

