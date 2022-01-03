const button = document.getElementById("convert-button")
const select = document.getElementById("currency-select")
const dolar = 5.53
const euro = 6.41
const bitcoin = 267.30

const convertValues =  () => {
    const inputReal = document.getElementById("input-real").value
    const realValueText = document.getElementById("real-value-text")
    const currencyValuetext = document.getElementById("currency-value-text")
   
    // const data = await fetch ("http://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL,BTC-BRL").then(response => response.json())
    // console.log(data)

    realValueText.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
    }).format(inputReal)

    if (select.value === 'US$ Dólar americano') {
        currencyValuetext.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        }).format(inputReal / dolar)
    }

    if (select.value === '€ Euro') {
        currencyValuetext.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR",
        }).format(inputReal / euro)
    }
    if (select.value === 'Bitcoin') {
        currencyValuetext.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC",
        }).format(inputReal / bitcoin)
    }



}

changeCurrency = () => {
    const currencyName = document.getElementById("currency-name")
    const currencyImg = document.getElementById("currency-img")

    if (select.value === 'US$ Dólar americano') {
        currencyName.innerHTML = 'Dólar americano'
        currencyImg.src = "./assets/eua.png"
    }


    if (select.value === '€ Euro') {
        currencyName.innerHTML = 'Euro'
        currencyImg.src = "./assets/euro.png"

    }
    if (select.value === 'Bitcoin') {
        currencyName.innerHTML = 'Bitcoin'
        currencyImg.src = "./assets/bitcoin.png"

    }

    convertValues()
}

button.addEventListener("click", convertValues)
select.addEventListener("change", changeCurrency)
