//Task 2:Add event listener for product selection and quantity input
//Extracts data from HTML
const productDropdown = document.getElementById('product-dropdown');
const quantityInput = document.getElementById('quantity');
const totalPriceElement = document.getElementById('total-price');

const placeOrderButton = document.getElementById('place-order'); 
const orderSummary = document.getElementById('order-summary');

//Task 3:Calculate and update total price dynamically based on product and quantity
//Creating a Function to Update total price

function updateTotalPrice() {
    const productPrice = parseFloat(productDropdown.value);
    const quantity = parseInt(quantityInput.value);
    const totalPrice = productPrice * quantity;
    
    totalPriceElement.textContent = totalPrice.toFixed(2);
}
//Adds event listeners to dropdown 
productDropdown.addEventListener('change', updateTotalPrice);
quantityInput.addEventListener('input', updateTotalPrice);

//Task 4:
// Handle order submission
placeOrderButton.addEventListener('click', function() {
    const selectedProduct = productDropdown.options[productDropdown.selectedIndex].text;
    const quantity = quantityInput.value;
    const totalPrice = totalPriceElement.textContent;
    
    orderSummary.textContent = `Your order contains ${quantity} of ${selectedProduct}. The total price: $${totalPrice}`; //response for when place order button is clicked
});
