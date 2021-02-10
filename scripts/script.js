// Script.js

window.addEventListener('DOMContentLoaded', () => {
  fetch('https://fakestoreapi.com/products')
  .then(response => response.json())
  .then(data => {
      localStorage.setItem('data', JSON.stringify(data))
  });
});