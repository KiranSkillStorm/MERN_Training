const xhr = new XMLHttpRequest();

//these are for the buttons on the cards to load Company data
const loadCompanyA = document.getElementById("loadCompanyA");
const fn = async (e) => {
    e.preventDefault();
    console.log('button works');
    xhr.onload = () => {
        const data = JSON.parse(xhr.response);
        console.log(data);
        var table = document.getElementById("table");
        for(x of data) {
            const row = document.createElement('tr');
            row.innerHTML += `<td>${x.name}</td>`;
            row.innerHTML += `<td>${x.Quantity}</td>`;
            row.innerHTML += `<td>${x.Price}</td>`;
            row.innerHTML += `<td class="col-md-1"><button class="btn btn-dark" type="button">EDIT<i class="bi bi-pen"></i></button></td>`;
        }
        table.appendChild(row);
    }
    xhr.open('GET', '/api/inv-router');
    xhr.send();
}
loadCompanyA.addEventListener("click", fn);

/*const loadCompanyA = document.getElementById("loadCompanyB");
const fn = () => {}
loadCompanyB.addEventListener("click", fn);

const loadCompanyA = document.getElementById("loadCompanyC");
const fn = () => {}
loadCompanyC.addEventListener("click", fn);*/