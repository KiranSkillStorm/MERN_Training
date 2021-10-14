
//const axios = require('axios');
//const fetch = require('node-fetch');



//LOAD COMPANY A
const loadCompanyA = document.getElementById("loadCompanyA");
const loadDataA = async (e) => {
    e.preventDefault();
    console.log('button works');
    const response = await fetch('/loadData/A', {
        method: 'GET'
    });
    if(response.status === 200){
        const data = await response.json();
        //console.log(Array.isArray(data));
        addData(data);
    } 
}    
if(loadCompanyA){
    loadCompanyA.addEventListener("click", loadDataA);
}

//LOAD COMPANY B
const loadCompanyB = document.getElementById("loadCompanyB");
const loadDataB = async(e)=> {
    e.preventDefault();
    const response = await fetch('/loadData/B', {
        method:'GET'
    });
    console.log(response);
    if(response.status === 200){
        const data = await response.json();
        console.log(data);
        addData(data);
    }
}
if(loadCompanyB){
    loadCompanyB.addEventListener("click", loadDataB);
}

//LOAD COMPANY C
const loadCompanyC = document.getElementById("loadCompanyC");
const loadDataC = async(e)=> {
    e.preventDefault();
    const response = await fetch('/loadData/C', {
        method:'GET'
    });
    console.log(response);
    if(response.status === 200){
        const data = await response.json();
        console.log(data);
        addData(data);
    }
}
if(loadCompanyC){
    loadCompanyC.addEventListener("click", loadDataC);
}

//ADD ITEM
const addItem = document.getElementById("addItem");
const postItem = async(e) => {
    e.preventDefault();
    const name = document.getElementById("itemNameA").value;
    const quantity = document.getElementById("itemQuantA").value;
    const price = document.getElementById("itemPriceA").value;
    const warehouseNum = document.getElementById("warehouseNumA").value;
    console.log(name, quantity, price, warehouseNum);
    const request = await fetch('/manage/addItem', {
        method:'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name,
            quantity,
            price,
            warehouseNum
        })
        
    });
    console.log(request);
}
addItem.addEventListener('click', postItem);

//UPDATE ITEM
const updateItem = document.getElementById("updateItem");
updateItem.addEventListener("click", async (e) =>{
    e.preventDefault();
    const request = await fetch('/manage/updateItem', {
        method: 'PUT',
        header: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: itemName.value,
            Quantity: itemQuant.value,
            Price: itemPrice.value,
            warehouseNum: warehouseNum.value
        })
    });
    console.log(request);
});

//DELETE ITEM
const deleteItem = document.getElementById("deleteItem");
deleteItem.addEventListener("click", async (e) =>{
    e.preventDefault();
    const warehouseNum = document.getElementById("warehouseNumD").value;
    const name = document.getElementById("itemNameD").value;
    console.log(warehouseNum,name);
    const request = await fetch('/manage/deleteItem', {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name,
            warehouseNum
        })
    });
    console.log(request);
});

function addData(array) {
    const table = document.getElementById("rows");
    table.innerHTML = "";
    for(var y=0; y<array.length; y++){
        const newRow = document.createElement('tr');
        const newCell = document.createElement('td');
        newCell.textContent = array[y].name;
        newRow.appendChild(newCell);
        const newCell1 = document.createElement('td');
        newCell1.textContent = array[y].quantity;
        newRow.appendChild(newCell1);
        const newCell2 = document.createElement('td');
        newCell2.textContent = array[y].price;
        newRow.appendChild(newCell2);
        table.appendChild(newRow);
    } 
}

