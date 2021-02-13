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
          width: 100%;
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
    img.width = 200;
    img.height = '100%';
    
    const title = document.createElement('p');
    title.setAttribute('class', 'title');
    
    const price = document.createElement('p');
    price.setAttribute('class', 'price');
    
    const button = document.createElement('button');
    button.textContent = 'Add to Cart';
    button.addEventListener("click", function(){ alert('Added to Cart!'); })

    li.appendChild(img);
    li.appendChild(title);
    li.appendChild(price);
    li.appendChild(button);
    
    shadowRoot.appendChild(li);
  }

  setItem(item) {
    const shadow = this.shadowRoot;
    shadow.querySelector('image').src = item.image;
    shadow.querySelector('image').alt = item.title;
    shadow.querySelector('title').textContent = item.title;
    shadow.querySelector('price').textContent = '$' + item.price;
  }

}

customElements.define('product-item', ProductItem);