// Script.js

window.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('data') === null) {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => {
        localStorage.setItem('data', JSON.stringify(data))
      });
  }

  const items = JSON.parse(localStorage.getItem('data'));
  for (let i = 0; i < items.length; i++) {
    document.getElementById('product-list').appendChild(new ProductItem(items[i]));
  }
});