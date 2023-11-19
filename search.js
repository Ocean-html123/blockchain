const form = document.querySelector('.form')
const input = document.querySelector('.input')
const border = document.querySelector('.border')

const searchBars = (ocean, body)=>{
form.addEventListener('keyup', ()=>{
    const searchInput = input.value.toLowerCase()
    if (searchInput) {
        border.style.display = 'block'
       const boss = ocean.filter((item)=>{
      
        const{name} = item
        
        return item.name.toLowerCase().startsWith(searchInput)
       })
border.innerHTML = boss.map((items) =>{
    const {name} = items
    return `
    <h3 class="name">${name}</h3>
   `
}).join('')
    }
})
}
export default searchBars