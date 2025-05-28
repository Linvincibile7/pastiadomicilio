
const utenti = [
  {   
    nome: "Gino",
    cognome: "Bernasconi",
    email: "gino.bernasconi@gmail.com",
    telefono: "3485449020",
    avs: "100012",
    indirizzo: "Via della pace 5, Locarno",
    allergie: "Nessuno",
    stato_salute: "Buono",
    parente: "Valentino Bernasconi"
  },
  {   
    nome: "Tiziana",
    cognome: "Falardi",
    email: "tiz.falardi@hotmail.it",
    telefono: "3397769122",
    avs: "100022",
    indirizzo: "Via Pratocarasso 12, Bellinzona",
    allergie: "Glutine, Lattosio e Crostacei",
    stato_salute: "Fragile",
    parente: "Valeria Falardi"
  },
  {  
    nome: "Pasqualino",
    cognome: "Verdi",
    email: "paqualino.verdi@outlook.com",
    telefono: "3377822016",
    avs: "100035",
    indirizzo: "Via Tesserete 45, Lugano",
    allergie: "Pesce",
    stato_salute: "Fragile",
    parente: "Luca Verdi"
  },
  {
    nome: "Mario",
    cognome: "Rossi",
    email: "m.rossi@email.it",
    telefono: "3456789012",
    avs: "100001",
    indirizzo: "Via Roma 1, Lugano",
    allergie: "Glutine",
    stato_salute: "Fragile",
    parente: "Simone Rossi"
  },
  {
    nome: "Giulia",
    cognome: "Bianchi",
    email: "g.bianchi@email.it",
    telefono: "3456789013",
    avs: "100002",
    indirizzo: "Via Ceresio 5, Bellinzona",
    allergie: "Lattosio",
    stato_salute: "Buono",
    parente: "Vanessa Bianchi"
  },
  {
    nome: "Paolo",
    cognome: "Esposito",
    email: "p.esposito@email.it",
    telefono: "3456789016",
    avs: "100003",
    indirizzo: "Via San Gottardo 23, Locarno",
    allergie: "Lattosio",
    stato_salute: "Buono",
    parente: "Gioele Esposito"
  },
  {
    nome: "Marco",
    cognome: "Conti",
    email: "m.conti@email.it",
    telefono: "3456789018",
    avs: "100007",
    indirizzo: "Via Taiada 4, Arbedo",
    allergie: "Crostacei",
    stato_salute: "Fragile",
    parente: "Antonio Conti"
  },
  {
    nome: "Chiara",
    cognome: "Ricci",
    email: "c.ricci@email.it",
    telefono: "3456789019",
    avs: "100008",
    indirizzo: "Via Gerre 10, Biasca",
    allergie: "Nessuno",
    stato_salute: "Buono",
    parente: "Francesca Ricci"
  }
];


const tabella = document.getElementById("tabellaUtenti").querySelector("tbody");

utenti.forEach(utente => {
  const tr = document.createElement("tr");

  const campi = [
    { label: "Nome", valore: utente.nome },
    { label: "Cognome", valore: utente.cognome },
    { label: "Email", valore: utente.email },
    { label: "Telefono", valore: utente.telefono },
    { label: "AVS", valore: utente.avs },
    { label: "Indirizzo", valore: utente.indirizzo },
    { label: "Allergie o Intolleranze", valore: utente.allergie || "-" },
    { label: "Stato di salute", valore: utente.stato_salute || "-" },
    { label: "Parente di riferimento", valore: utente.parente || "-" },
  ];

  campi.forEach(campo => {
    const td = document.createElement("td");
    td.textContent = campo.valore;
    td.setAttribute("data-label", campo.label);
    tr.appendChild(td);
  });

  tabella.appendChild(tr);
});