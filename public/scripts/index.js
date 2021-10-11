




//these are for the buttons on the cards to load Company data
const loadCompanyA = document.getElementById("loadCompanyA");
const loadData = async (e) => {
    e.preventDefault();
    console.log('button works');

    axios({
        method: 'GET',
        url: './Project_1/routes/api/inv-router.js'
    })
    .then(response => res.send(response.array))
    .catch(err => console.error(err));
    
    
loadCompanyA.addEventListener("click", console.log('click recieved'));

}