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
    const itemElem = document.createElement('product-item');
    document.getElementById('image').src = items[i].image;
    document.getElementById('image').alt = items[i].title;
    document.getElementById('title').textContent = items[i].title;
    document.getElementById('price').textContent = "$" + items[i].price;
    document.getElementById('product-list').appendChild(itemElem);
  }
});