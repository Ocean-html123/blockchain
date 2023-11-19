const form = document.querySelector('.form')
const input = document.querySelector('.input')

const searchBar = (ocean,border) =>{

    let searchInput = input.value.toLowerCase()

    form.addEventListener('keyup', ()=>{

        if (searchInput) {
            border.style.display = 'block'
            const newName = ocean.filter((item) =>{

                const {name} = item
              
                return item.name.toLowerCase().startsWith(searchInput)

            })
border.innerHTML = newName.map((items)=>{
    const {name} = items
    return `<h5>${name}</h5>`
}).join('')
        } else {
             border.innerHTML = '';
        }
    })
}
export default searchBar