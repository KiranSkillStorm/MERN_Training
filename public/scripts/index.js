
//const axios = require('axios');



//these are for the buttons on the cards to load Company data
const loadCompanyA = document.getElementById("loadCompanyA");
const loadData = async (e) => {
    e.preventDefault();
    console.log('button works');

    const response = await fetch('/loadDataA', {
        method: 'GET'

    });
    if(response.status === 200){
        const data = await response.json();
        //console.log(Array.isArray(data));
        addData(data);
    }

    
}
    
loadCompanyA.addEventListener("click", loadData);



function addData(array) {

    const table = document.getElementById("rows");

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