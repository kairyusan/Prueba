let LIST_URL = "http://data.fixer.io/api/latest?access_key=22c82c0115ab5764d14fc0e3a16d651e";

fetch(LIST_URL)
    .then(respuesta => respuesta.json())
    .then(monedas => {
        document.getElementById('lis').innerHTML += `Dólar USA = ${monedas.rates.USD}
        <br>Yuan Chino = ${monedas.rates.CNY}
        <br>Dólar Australiano = ${monedas.rates.AUD}
        <br>Yen = ${monedas.rates.JPY}
        <br>Real = ${monedas.rates.BRL}
        <br>Rublo ruso = ${monedas.rates.RUB} 
        <br>Libra GBR = ${monedas.rates.GBP}`;
    })