// კალათისათვის პროდუქტის დამატების ფუნქცია
let cart = [];

document.querySelectorAll('.add-to-cart-button').forEach(button => {
    button.addEventListener('click', function() {
        const productName = this.parentElement.querySelector('h3').textContent;
        cart.push(productName);
        alert(`${productName} დამატებულია კალათში!`);
        updateCart(); // კალათის განახლება
    });
});

// კალათის განახლება
const cartList = document.getElementById('cart-list');

function updateCart() {
    cartList.innerHTML = ''; // გასუფთავება
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        cartList.appendChild(li);
    });
}

// რეგისტრაციის ფორმის პროცესირება
document.getElementById('registration-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('რეგისტრაცია წარმატებით დასრულდა!');
    this.reset(); // ფორმის გაწვდვა
});

// შესვლის ფორმის პროცესირება
document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('შესვლა წარმატებით დასრულდა!');
    this.reset(); // ფორმის გაწვდვა
});

// კონტაქტის ფორმის პროცესირება
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('შეტყობინება გაგზავნილია!');
    this.reset(); // ფორმის გაწვდვა
});
