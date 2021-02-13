// product-item.js

class ProductItem extends HTMLElement {
  // TODO
  constructor(){
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
    <li class="product">
      <img id="img" src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="Fjallraven - Foldstack No. 1 Backpack, Fits 15 Laptops" width=200px>
      <p id="title" class="title">Fjallraven - Foldstack No. 1 Backpack, Fits 15 Laptops</p>
      <p id="price" class="price">$109.95</p>
      <button id="button">Add to Cart</button>
    </li>
    `;

    /*
    const list = document.createElement('li');
    list.class = "product";

    let imgURL = this.hasAttribute('img') ? this.getAttribute('img') : "";
    
    let img = shadowRoot.getElementById('img');
    img.src = imgURL;
    img.alt = this.getAttribute('text');
    img.width = "200px";  
    list.appendChild(img);
    
    const title = list.appendChild(document.createElement('p'));
    title.class = 'title';
    title.textContent = this.getAttribute('text');

    const price = list.appendChild(document.createElement('p'));
    price.class = 'price';
    price.textContent = this.getAttribute('price');

    const button = list.appendChild(document.createElement('button'));
    button.setAttribute("onclick", "alert('Added To Cart!')");
    */
    //this.shadowRoot.append(list);
  }
}

customElements.define('product-item', ProductItem);