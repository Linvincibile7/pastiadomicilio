function aggiungiAlCarrello(nome, prezzo) {
    let carrello = JSON.parse(localStorage.getItem("carrello")) || [];

    carrello.push({ nome: nome, prezzo: prezzo });
    
    localStorage.setItem("carrello", JSON.stringify(carrello));

    alert(`${nome} è stato aggiunto al carrello!`);
}

function mostraCarrello() {
    let carrello = JSON.parse(localStorage.getItem("carrello")) || [];
    let listaCarrello = document.getElementById("lista-carrello");
    let totale = 0;

    listaCarrello.innerHTML = "";
    
    carrello.forEach((item, index) => {
        totale += item.prezzo;
        listaCarrello.innerHTML += `
            <li>
                ${item.nome} - CHF ${item.prezzo.toFixed(2)}
                <button onclick="rimuoviDalCarrello(${index})">Rimuovi</button>
            </li>
        `;
    });
    document.getElementById("totale").innerText = `Totale: CHF ${totale.toFixed(2)}`;
}

function rimuoviDalCarrello(index) {
    let carrello = JSON.parse(localStorage.getItem("carrello")) || [];

    carrello.splice(index, 1);

    localStorage.setItem("carrello", JSON.stringify(carrello));

    mostraCarrello();
}

function svuotaCarrello() {
    localStorage.removeItem("carrello");
    mostraCarrello();
}