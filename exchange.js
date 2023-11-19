import searchBars from "./search.js"
const openIcon = document.querySelector('.open')
const closeIcon = document.querySelector('.close')
const overlay = document.querySelector('.bar-overlay')
const close1 = document.querySelector('.close-1')
const border = document.querySelector('.border')
const body = document.querySelector('.body')
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
window.addEventListener('load', ()=>{
    overlay.classList.remove('show-overlay')
    border.style.display = 'none'
  })
  const url = 'https://api.coincap.io/v2/exchanges'
  const fetchData = async ()=>{
    const response = await fetch(url)
    const product = await response.json()
    const display = product.data
    searchBars(display, body)
 const ocean = display.map((item)=>{
    const{name} = item
    const{rank} = item
    const{tradingPairs} = item
    const newTrade = parseFloat(tradingPairs)
    const newTrade2 = (newTrade.toFixed(2))
    const{percentTotalVolume: total} = item
    const newTotal = parseFloat(total)
    const newTotal2 = (newTotal.toFixed(2))
    const{volumeUsd} = item
    const newVol = parseFloat(volumeUsd) / 10000000
    const newVol2 = (newVol.toFixed(2)) 
    return `<h3 class="rank">${rank}</h3>
    <h3 class="name">${name}
    <h3 class="price">${newTrade2}</h3>
    <h3 class="cap">$${newVol2} b</h3>
     <h3 class="percent">${newTotal2}%</h3>`
 }).join('')
body.innerHTML = `${ocean}`
  }
  window.addEventListener('load', ()=>{
setInterval(fetchData, 1000)
  })
 