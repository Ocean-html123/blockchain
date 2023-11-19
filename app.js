import searchBar from "./fetch.js"
const boddy = document.querySelector('.body')
const border = document.querySelector('.border')
const percent = document.querySelector('.percent')


const url2 = 'https://api.coincap.io/v2/assets'
window.addEventListener('load', ()=>{
    border.style.display = 'none'
})
const fetchDat = async () =>{

    const response = await fetch(url2)
    const coin = await response.json()
   const product = coin.data
   const bloc = product.map((item) =>{
    const {name} = item
    return` <h5>${name}</h5>`
   }).join('')
   border.innerHTML = `${bloc}`
}
fetchDat()

const url = 'https://api.coincap.io/v2/assets'

const fetchData = async () =>{

    const response = await fetch(url)
    const coin = await response.json()
   const product = coin.data
   searchBar(product,border)
  
   const block = product.map((item) =>{
    const {id} = item
    const {rank} = item
    const {name} = item
    const {priceUsd} = item
    const {marketCapUsd: marketCap } = item
  const {symbol} = item
  const {changePercent24Hr} = item
   const newPrice = parseFloat(priceUsd)
  const newPrice2 = (newPrice.toFixed(2))
  const newMarket = parseFloat(marketCap) / 1000000000
  const newMarket2 = (newMarket.toFixed(2))
  const newPercent = parseFloat(changePercent24Hr)
  const newPercent2 = (newPercent.toFixed(2))
 

   return `  <h3 class="rank">${rank}</h3>
   <h3 class="name">${name}
    <p class="text">${symbol}</p>
   </h3>
   <h3 class="price">$${newPrice2}</h3>
   <h3 class="cap">$${newMarket2} b</h3>
    <h3 class="percent">${newPercent2}%</h3>
   `
   }).join('')

    boddy.innerHTML = `${block}`
 
    
}
window.addEventListener('DOMContentLoaded', () => {
  setInterval(fetchData,1000)
})

window.addEventListener('load', ()=>{
  overlay.classList.remove('show-overlay')
})

const openIcon = document.querySelector('.open')
const closeIcon = document.querySelector('.close')
const overlay = document.querySelector('.bar-overlay')
const close1 = document.querySelector('.close-1')

openIcon.addEventListener('click', () => {
 if(!overlay.classList.contains('show-overlay')){
overlay.classList.add('show-overlay')
 }
})
closeIcon.addEventListener('click', () => {
  if(overlay.classList.contains('show-overlay')){
    overlay.classList.remove('show-overlay')
     }
})
close1.addEventListener('click', ()=>{
  border.style.display = 'none'
})