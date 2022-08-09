// project variables 

// input data variables declaration
let title = document.getElementById('title');
let price = document.getElementById('price');
let taxes = document.getElementById('taxes');
let ads = document.getElementById('ads');
let discount = document.getElementById('discount');
let total = document.getElementById('total');
let count = document.getElementById('count');
let category = document.getElementById('category');
let submit = document.getElementById('submit');

// calculating the total price 
function calculeTotal(){
    if(price.value != ""){
        let reslut = (+price.value + +taxes.value + +ads.value) - +discount.value;
        total.innerHTML = reslut;
        total.style.background = '#060';
    }else{
        total.innerHTML = '';
        total.style.background = '#red';

    }

}

// creating new product

let productData = [] // store and saving new product information
if(localStorage.product != null){
    productData = JSON.parse(localStorage.product);
}else{
    productData = [];
}

submit.onclick = function(){

    // create new product object
    let newProduct = {
        title: title.value,
        price: price.value,
        ads: ads.value,
        taxes: taxes.value,
        discount: discount.value,
        total: total.innerHTML,
        count: count.value,
        category: category.value,
    }
    // pushing new product information in the array

    productData.push(newProduct);

    // saving data in the local storage
    localStorage.setItem('product', JSON.stringify(productData)) 
    
    clearData();
}

// clear inputs after saving data
function clearData(){
    title.value = '';
    price.value = '';
    taxes.value  = '';
    ads.value = '';
    discount.value = '';
    total.innerHTML = '';
    count.value = '';
    category.value = '';
}

// display product info (read the data)
// adding unlimited proudcts (count)
// delte the product
// update the product
// searching 
// checking data 