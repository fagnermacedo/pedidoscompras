
const openModal = () => document.getElementById('modal')
.classList.add('active')

const closeModal = () => document.getElementById('modal')
.classList.remove('active')


// ************ CRUD - Create Read Update and Delete ***************************

const getLocalStore = () => JSON.parse(localStorage.getItem('db_client'))  ?? []
const setLocalStore = (dbClient) => localStorage.setItem('db_client', JSON.stringify(dbClient))

const updateClient = 

const readClient = getLocalStore()

const creatClient = (client) => {
    const dbClient = getLocalStore()
    dbClient.push()
    setLocalStore(dbClient)
}

// ***********************************************************************************************

//Eventos
document.getElementById('incluirCliente')
.addEventListener('click', openModal)

document.getElementById('modalClose')
.addEventListener('click', closeModal)