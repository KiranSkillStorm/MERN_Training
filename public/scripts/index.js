const xhr = new XMLHttpRequest();

//these are for the buttons on the cards to load Company data
const loadCompanyA = document.getElementById("loadCompanyA");
const loadData = async (e) => {
    e.preventDefault();
    console.log('button works');
    
    //xhr.open('GET', '/api/inv-router');
    //xhr.send();
}
loadCompanyA.addEventListener("click", loadData);

