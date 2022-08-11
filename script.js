let priceInput = document.querySelector(".priceInput")
let inc = document.querySelector(".inc")
let dec = document.querySelector(".dec")
let price = document.querySelector(".result")
let qtd = document.querySelector(".qtd")
let qtdVal = parseInt(qtd.innerText)
let btnAdd = document.querySelector(".add")
let innerPrice = price.innerText
console.log(btnAdd)

function submit(){
  let priceNumber = parseFloat(priceInput.value)
  
  price.textContent = priceNumber
  priceInput.disabled = true

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


btnAdd.addEventListener('click',submit)
inc.addEventListener('click', increase)
dec.addEventListener('click', decrease)