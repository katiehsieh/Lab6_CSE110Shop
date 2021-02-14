// product-item.js

class ProductItem extends HTMLElement {
  constructor() {
    super();
    
    const shadowRoot = this.attachShadow({mode: 'open'});
    shadowRoot.innerHTML = `
      <style>
        .price {
          color: green;
          font-size: 1.8em;
          font-weight: bold;
          margin: 0;
        }
        
        .product {
          align-items: center;
          background-color: white;
          border-radius: 5px;
          display: grid;
          grid-template-areas: 
          'image'
          'title'
          'price'
          'add';
          grid-template-rows: 67% 11% 11% 11%;
          height: 450px;
          filter: drop-shadow(0px 0px 6px rgb(0,0,0,0.2));
          margin: 0 30px 30px 0;
          padding: 10px 20px;
          width: 200px;
        }
        
        .product > button {
          background-color: rgb(255, 208, 0);
          border: none;
          border-radius: 5px;
          color: black;
          justify-self: center;
          max-height: 35px;
          padding: 8px 20px;
          transition: 0.1s ease all;
        }
        
        .product > button:hover {
          background-color: rgb(255, 166, 0);
          cursor: pointer;
          transition: 0.1s ease all;
        }
        
        .product > img {
          align-self: center;
          justify-self: center;
          max-width: 100%;
          max-height: 100%;
        }
        
        .title {
          font-size: 1.1em;
          margin: 0;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        
        .title:hover {
          font-size: 1.1em;
          margin: 0;
          white-space: wrap;
          overflow: auto;
          text-overflow: unset;
        }
      </style>
    `;

    const li = document.createElement('li');
    li.setAttribute('class', 'product');

    const img = document.createElement('img');
    img.setAttribute('id', 'img');
    
    const title = document.createElement('p');
    title.setAttribute('class', 'title');
    title.setAttribute('id', 'title');
    
    const price = document.createElement('p');
    price.setAttribute('class', 'price');
    price.setAttribute('id', 'price');
    
    const button = document.createElement('button');
    button.innerText = 'Add to Cart';
    button.setAttribute('id', 'button');
    button.onclick = () => this.onButtonClicked();

    li.appendChild(img);
    li.appendChild(title);
    li.appendChild(price);
    li.appendChild(button);

    shadowRoot.appendChild(li);
  }

  setItem(item) {
    const shadow = this.shadowRoot;
    shadow.getElementById('img').src = item.image;
    shadow.getElementById('img').alt = item.title;
    shadow.getElementById('title').innerText = item.title;
    shadow.getElementById('price').innerText = '$' + item.price;
  }

  onButtonClicked() {
    const shadow = this.shadowRoot;
    if (shadow.getElementById('button').innerText == 'Add to Cart') {
      shadow.getElementById('button').innerText = 'Remove from Cart';
      cartCount += 1;
      document.getElementById('cart-count').innerText = cartCount;
      alert('Added to Cart!');
    }
    else {
      shadow.getElementById('button').innerText = 'Add to Cart';
      cartCount -= 1;
      document.getElementById('cart-count').innerText = cartCount;
      alert('Removed from Cart!');
    }
  }
}

customElements.define('product-item', ProductItem);