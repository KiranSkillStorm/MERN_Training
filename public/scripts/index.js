
//const axios = require('axios');



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
loadCompanyA.addEventListener("click", loadDataA);

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
loadCompanyB.addEventListener("click", loadDataB);

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
loadCompanyC.addEventListener("click", loadDataC);

//get to update page
// const loadUpdate = async() => {
//     const response = await fetch('/form', {
        
//     });
    
// }


function addData(array) {

    const table = document.getElementById("rows");
    table.innerHTML = "";
    for(var y=0; y<array.length; y++){
        const newRow = document.createElement('tr');
        const newCell = document.createElement('td');
        newCell.textContent = array[y].name;
        newRow.appendChild(newCell);
        const newCell1 = document.createElement('td');
        newCell1.textContent = array[y].Quantity;
        newRow.appendChild(newCell1);
        const newCell2 = document.createElement('td');
        newCell2.textContent = array[y].Price;
        newRow.appendChild(newCell2);
        table.appendChild(newRow);
    }

    
    
}