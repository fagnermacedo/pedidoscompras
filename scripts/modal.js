
const openModal = () => document.getElementById('modal')
.classList.add('active')

const closeModal = () => {
    clearFields()
    document.getElementById('modal').classList.remove('active')

}


// ************ CRUD - Create Read Update and Delete ***************************

const getLocalStore = () => JSON.parse(localStorage.getItem('db_client')) || []
const setLocalStore = (dbClient) => localStorage.setItem('db_client', JSON.stringify(dbClient))


const deleteClient = (index) => {
    const dbClient = readClient()
    /* O método Splice() serve para remover ou atualizar os dados em um Array

        SINTAXE
        array.splice(indice[, deleteCount[, elemento1[, ...[, elementoN]]])

        indice -> Índice o qual deve iniciar a alteração na lista
        deleteCount -> Um inteiro indicando o número de antigos elemntos que devem ser removidos. Se deleteCount for igual a zero " 0 ", nenhum elemento 
        será removido.

        elemento1, ...,elementoN -> Elemento que será adicionado na lista
    */

    dbClient.splice(index,1)
    setLocalStore()
}

const updateClient = (index, client) => {
    const dbClient = readClient()
    dbClient[index] = client
    setLocalStore(dbClient)
}

const readClient = () => getLocalStore()

const creatClient = (client) => {
    const dbClient = getLocalStore()
    dbClient.push (client)
    setLocalStore(dbClient)
}

// ***********************************************************************************************


//Interação com o usuário

const isValidFields = () => {
    return document.getElementById('form').reportValidity() //Verificando se todos os campos do formulário foram preenchidos.
}

const clearFields = () => {
    const camposFields = document.querySelectorAll('.modal-field')
    camposFields.forEach(camposFields => camposFields.value = "")

}


const saveClient = () =>{
    
    if (isValidFields()){
        const client = {
            nome: document.getElementById('nome').value,
            email: document.getElementById('email').value,
            celular: document.getElementById('celular').value,
            cidade: document.getElementById('cidade').value

        }
        creatClient(client)
        updateTable()
        closeModal()
        
    }
}


const createRow = (client, index) => {
    const newRow = document.createElement('tr')
    newRow.innerHTML = `
        <td>${client.nome}</td>
        <td>${client.email}</td>
        <td>${client.celular}</td>
        <td>${client.cidade}</td>
        <td>
            <button type="button" class="button green" data-action="editar-${index}">editar</button>
            <button type="button" class="button red" data-action="excluir-${index}">excluir</button>
        </td>
    `
    document.querySelector('#tbClient>tbody').appendChild(newRow)
}

const clearTable = () => {
    const rows = document.querySelectorAll('#tbClient>tbody tr')
    rows.forEach(row => row.parentNode.removeChild(row))

}
const updateTable = () => {
    const dbClient = readClient()
    clearTable()
    dbClient.forEach(createRow)

}

// método para edição do delete de uma linha

const preencherCampos = (client) => {
    document.getElementById('nome').value = client.nome
    document.getElementById('email').value = client.email
    document.getElementById('celular').value = client.celular
    document.getElementById('cidade').value = client.cidade
}

const editClient = (index) => {
    const client = readClient()[index]
    preencherCampos(client)
    openModal()
}

const editDelete = (event) => {
    if(event.target.type == 'button'){
        // console.log (event.target.dataset.action.split('-')) Separando a ação do código do índice
        
        const [action, index] = event.target.dataset.action.split('-')
        
        if(action == 'editar'){  // Se verdadeiro, cliente será editado
            editClient(index)
        }else {

        }

        
    }
}


updateTable()

//Eventos
document.getElementById('incluirCliente')
.addEventListener('click', openModal)

document.getElementById('modalClose')
.addEventListener('click', closeModal)


document.getElementById('salvar')
.addEventListener('click',saveClient)


//  Botão Editar
document.querySelector('#tbClient>tbody')
.addEventListener('click', editDelete)
