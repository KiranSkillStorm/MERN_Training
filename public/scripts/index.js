
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

    const table = document.createElement('table', class{""});
    
}