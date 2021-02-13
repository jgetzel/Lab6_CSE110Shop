// Script.js
let storage = window.localStorage

let container = document.getElementById("product-list");
let cartCount = document.getElementById("cart-count");

window.addEventListener('DOMContentLoaded', () => {
  // TODO
    if(!storage.getItem('fetch')){
      fetch('https://fakestoreapi.com/products')
        .then(data => data.json())
        .then(success => onFetched(success));
    }
    else{
      initialize();
    }
});

function onFetched(success){
  storage.setItem('fetch', JSON.stringify(success));

  initialize();
}

function initialize(){
  let jsonData = JSON.parse(storage.getItem('fetch'));

  for (let i = 0; i < jsonData.length; i++){
    let product = document.createElement('product-item');
    product.shadowRoot.getElementById('img').setAttribute('src', jsonData[i].image);
    product.shadowRoot.getElementById('title').textContent = jsonData[i].title;
    product.shadowRoot.getElementById('price').textContent = jsonData[i].price;
    product.shadowRoot.getElementById('button').addEventListener('click', function(){
      let button = product.shadowRoot.getElementById('button');
      let index = i;
      if(button.textContent == "Add to Cart"){
        alert("Added To Cart!");
        button.textContent = "Remove from Cart";
        cartCount.textContent = Number(cartCount.textContent) + 1;
        storage.setItem(`item-${index}`,'added');
      }
      else{
        button.textContent = "Add to Cart";
        cartCount.textContent = Number(cartCount.textContent) - 1;
        storage.setItem(`item-${index}`,'not-added');
      }
    });

    let item = storage.getItem(`item-${i}`);
    if(item == 'added'){
      product.shadowRoot.getElementById('button').textContent = "Remove from Cart";
      cartCount.textContent = Number(cartCount.textContent) + 1;
    }
    else if(item == 'not-added'){
      product.shadowRoot.getElementById('button').textContent = "Add to Cart";
    }

    container.appendChild(product);
  }
}
