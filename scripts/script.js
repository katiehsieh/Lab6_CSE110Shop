// Script.js

window.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('data') === null) {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => {
        localStorage.setItem('data', JSON.stringify(data))
      });
  }
});