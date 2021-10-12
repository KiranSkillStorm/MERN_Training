
//const axios = require('axios');



//these are for the buttons on the cards to load Company data
const loadCompanyA = document.getElementById("loadCompanyA");
const loadData = async (e) => {
    e.preventDefault();
    console.log('button works');

    // axios({
    //     method: 'GET',
    //     url: './Project_1/routes/api/inv-router.js'
    // })
    // .then(response => addData(response.array)
    // .catch(err => console.error(err)));

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
    // var rowID = $("#table >tbody >tr").length;
    // $(table).bootstrapTable('insertRow', {
    //     index: rowID,
    //     row: array[0]
    // });
    const cont = document.getElementById('tContainer');
    const table = document.createElement('table');
    table.setAttribute('class','table table-striped table-secondary table-hover');
    const newRow = document.createElement('tr');
    for(var i=0; i<3;i++){
        const newCell = document.createElement('td');
        newCell.textContent = array[i];
        //console.log(array[i]);
        newRow.appendChild(newCell);
    }
    //apped row to table
    table.appendChild(newRow);
    cont.appendChild(table);
    
}