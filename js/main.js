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
    if(newProduct.count > 1){
        for(let i=0; i<newProduct.count; i++){
            productData.push(newProduct); // pushing new product information in the array

        }
    }else{
        productData.push(newProduct); // pushing new product information in the array
    }


    

    // saving data in the local storage
    localStorage.setItem('product', JSON.stringify(productData));
    
    clearData()
    displayData()
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

//display product info (read the data)
function displayData(){
    let table = '';
    for(i=0; i<productData.length; i++){
        table += `
        <tr>
        <td>${i}</td>
        <td>${productData[i].title}</td>
        <td>${productData[i].price}</td>
        <td>${productData[i].taxes}</td>
        <td>${productData[i].ads}</td>
        <td>${productData[i].discount}</td>
        <td>${productData[i].total}</td>
        <td>${productData[i].category}</td>

        <td><button id="update">update</button></td>
        <td><button onclick="deleteData(${i})" id="delete">delete</button></td>


        </tr>
        
        `
    }
    
    
    document.getElementById('tbody').innerHTML = table;
    let btnDelete = document.getElementById('deleteAll');
    if(productData.length > 0){
        btnDelete.innerHTML = `
        <button onclick="deleteAll()">Delete All</button>
        
        `
    }else{
        btnDelete.innerHTML = '';
    }

}
displayData()

 

// delte the product
function deleteData(i){

    productData.splice(i,1)
    localStorage.product = JSON.stringify(productData);
    displayData()
}
// delete all products 
function deleteAll(){
    localStorage.clear();
    productData.splice(0);
    displayData();
}


// adding unlimited proudcts (count)

// update the product
// searching 
// checking data 