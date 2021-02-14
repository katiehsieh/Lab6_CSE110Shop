// Script.js
let cartCount = 0;

window.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('data') === null) {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => {
        localStorage.setItem('data', JSON.stringify(data))
      });
  }

  if (localStorage.getItem('cart') === null) {
    localStorage.setItem('cart', '[]');
  }
  
  const items = JSON.parse(localStorage.getItem('data'));
  const cart = JSON.parse(localStorage.getItem('cart'));

  for (let i = 0; i < items.length; i++) {
    const itemElem = document.createElement('product-item');
    itemElem.setItem(items[i]);

    if (cart[items[i].id] != null) {
      itemElem.onButtonClicked();   // add item to cart
    }

    document.getElementById('product-list').appendChild(itemElem);
  }
});