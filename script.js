let priceInput = document.querySelector(".priceInput")
let inc = document.querySelector(".inc")
let dec = document.querySelector(".dec")
let price = document.querySelector(".result")
let qtd = document.querySelector(".qtd")
let qtdVal = parseInt(qtd.innerText)
let btnAdd = document.querySelector(".add")
let clear = document.querySelector(".clear")
let innerPrice = price.innerText
console.log(btnAdd)


if (localStorage) {
    var armazenamento = localStorage.getItem('preco')
    priceInput.value = armazenamento
    priceInput.disabled = true
    let res = parseFloat(armazenamento * qtdVal)
    let finalResult = res.toLocaleString('pt-BR', {style: 'currency', currency:'BRL', currencyDisplay:'symbol'}) 
    price.innerText = finalResult

  }


function submit(){
  let priceNumber = priceInput.value
  localStorage.setItem('preco', priceInput.value);
  price.textContent = priceNumber
  priceInput.disabled = true
  localStorage.getItem('preco')

  if (qtdVal>=1) {
    let res = parseFloat(priceNumber * qtdVal)
    let finalResult = res.toLocaleString('pt-BR', {style: 'currency', currency:'BRL', currencyDisplay:'symbol'}) 
    price.innerText = finalResult
  }
  

  
}

function increase() {

  let priceNumber = parseFloat(priceInput.value)
  
  qtdVal = qtdVal + 1
  qtd.innerText = qtdVal

   if(priceNumber){
        let res = parseFloat(priceNumber * qtdVal)
        let finalResult = res.toLocaleString('pt-BR', {style: 'currency', currency:'BRL', currencyDisplay:'symbol'}) 
        price.innerText = finalResult
        priceInput.disabled = true
      }
}

function decrease() {
  let priceNumber = parseFloat(priceInput.value)
  let innerPrice = price.innerText

    if(qtdVal>1) {
    qtdVal = qtdVal - 1
    qtd.innerText = qtdVal
    console.log(qtdVal)
}
 
  let res = parseFloat(priceNumber * qtdVal)
  let finalResult = res.toLocaleString('pt-BR', {style: 'currency', currency:'BRL', currencyDisplay:'symbol'}) 
  price.innerText = finalResult
}

function clearAll() {
  localStorage.clear()
  priceInput.disabled = false
  priceInput.value = ""
   price.innerText = "0"

}


console.log(localStorage)
btnAdd.addEventListener('click',submit)
inc.addEventListener('click', increase)
dec.addEventListener('click', decrease)
clear.addEventListener('click', clearAll)
