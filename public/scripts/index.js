//import axios from "axios";
let axios = require('axios');



//these are for the buttons on the cards to load Company data
const loadCompanyA = document.getElementById("loadCompanyA");
const loadData = async (e) => {
    e.preventDefault();
    console.log('button works');

    axios({
        method: 'GET',
        url: '/api/inv-router'
    })
    .then(res => console.log(res))
    .catch(err => console.error(err));
    
    //xhr.open('GET', '/api/inv-router');
    //xhr.send();
}
loadCompanyA.addEventListener("click", loadData);

