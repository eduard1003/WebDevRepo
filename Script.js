const productData = [
  {
      product_name: 'Xiaomi 11I Lite',
      product_price: 'P14,190', 
      product_picture: './xiaomi11i.jpg',
      product_num: 1

  },
  {
      product_name: 'Xiaomi 11I',
      product_price: 'P22,000', 
      product_picture: 'xiaomi11i.jpg',
      product_num: 2

  },
  {
      product_name: 'Xiaomi 11 Pro',
      product_price: 'P33,938', 
      product_picture: 'xiaomi11pro.jpg',
      product_num: 3

  },
  {
      product_name: 'RedmiNote 10S',
      product_price: 'P11,990', 
      product_picture: 'redminote10s.jpg',
      product_num: 4

  },
  {
      product_name: 'RedmiNote 10',
      product_price: 'P7,990', 
      product_picture: 'redminote10.jpg',
      product_num: 5

  },
  {
      product_name: 'RedmiNote 10v Pro',
      product_price: 'P13,590', 
      product_picture: 'redminote10pro.jpg',
      product_num: 6

  },
  {
      product_name: 'Poco F1',
      product_price: 'P6,000', 
      product_picture: 'pocof1.jpg',
      product_num: 7

  },
  {
      product_name: 'Poco X3',
      product_price: 'P13,990', 
      product_picture: 'pocox3.jpg',
      product_num: 8

  },
  {
      product_name: 'Poco F3',
      product_price: 'P20,190', 
      product_picture: 'Xpocof3.jpg',
      product_num: 9

  },
  {
      product_name: 'Poco F2',
      product_price: 'P20,990', 
      product_picture: 'F2.jpg',
      product_num: 10

  },
];

let cartItems = [];

getGridHTML = (product) => {

  const _String = `
  <div class="grid-item grid-item-${product.product_num}">
      <img src="${product.product_picture}" alt="" class="img-gt img-gt-${product.product_num}">
      <p class="label-gt label-gt-${product.product_num}">${product.product_name}</p>
      <div class="bottom-container">
          <p class="price-gt price-gt-${product.product_num}">${product.product_price}</p>
          <button id="btn-gt-${product.product_num}" class="btn-gt btn-gt-1${product.product_num}">add to cart</button>
      </div>
  </div>
`   
  

  return _String;
};

document.getElementById('section-grid').innerHTML =  `
  
  ${productData.map(getGridHTML).join('')}
`;



const btn1 = document.getElementById("btn-gt-1");
const btn2 = document.getElementById("btn-gt-2");
const btn3 = document.getElementById("btn-gt-3");
const btn4 = document.getElementById("btn-gt-4");
const btn5 = document.getElementById("btn-gt-5");
const btn6 = document.getElementById("btn-gt-6");
const btn7 = document.getElementById("btn-gt-7");
const btn8 = document.getElementById("btn-gt-8");
const btn9 = document.getElementById("btn-gt-9");
const btn10 = document.getElementById("btn-gt-10");

btn1.onclick = () => {
  addProductToCart(0);
  alert("Item 1 added to cart!");
};

btn2.onclick = () => {
  addProductToCart(1);
  alert("Item 2 added to cart!");
};

btn3.onclick = () => {
  addProductToCart(2);
  alert("Item 3 added to cart!");
};

btn4.onclick = () => {
  addProductToCart(3);
  alert("Item 4 added to cart!");
};

btn5.onclick = () => {
  addProductToCart(4);
  alert("Item 5 added to cart!");
};

btn6.onclick = () => {
  addProductToCart(5);
  alert("Item 6 added to cart!");
};

btn7.onclick = () => {
  addProductToCart(6);
  alert("Item 7 added to cart!");
};

btn8.onclick = () => {
  addProductToCart(7);
  alert("Item 8 added to cart!");
};

btn9.onclick = () => {
  addProductToCart(8);
  alert("Item 9 added to cart!");
};

btn10.onclick = () => {
  addProductToCart(9);
  alert("Item 10 added to cart!");
};


const addProductToCart = (num) => {
  const tempProduct = productData[num];
  cartItems.push(tempProduct);
  console.log(tempProduct.product_name);
}

const openCartModel = document.getElementById("button-cart");
const closeCartModel = document.getElementById("button-close-modal");
const overlay = document.getElementById("overlay");
const modal = document.getElementById("modal");

openCartModel.onclick = () => {
  //alert("button cart clicked!");
  modal.classList.add('active');
  overlay.classList.add('active');
  //insert function to add cart items here
  document.getElementById("modal-body").innerHTML = `
  ${cartItems.map(getCartItemsHTML).join('')}
  `;


}

closeCartModel.onclick = () => removeModal();

overlay.onclick = () => removeModal();

const removeModal = () => {
  modal.classList.remove('active');
  overlay.classList.remove('active');
}



getCartItemsHTML = (cartItems) => {

  const cString = `
  <div class="grid-item-cart grid-item-${cartItems.product_num}">
      <img src="${cartItems.product_picture}" alt="" class="img-gt-cart img-gt-${cartItems.product_num}">
      <p class="label-gt-cart label-gt-${cartItems.product_num}">${cartItems.product_name}</p>
      <div class="bottom-container-cart">
          <p class="price-gt-cart price-gt-${cartItems.product_num}">${cartItems.product_price}</p>
      </div>
  </div>
  `
  return cString;

}

