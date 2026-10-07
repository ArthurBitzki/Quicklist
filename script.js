console.log("conectado")

const item = document.getElementById("new-item")
const form = document.querySelector("form")
const lista = document.getElementById("shopping-list")

form.onsubmit = (event) =>{
    event.preventDefault()

    adicionar()
}

function adicionar(){
    if(item.value === ""){
        alert("Adicione algum item a lista")
    } else{
        let novoItem = document.createElement("li")
        novoItem.classList.add("shopping-list__item")
    
        let checkbox = document.createElement("input")
        checkbox.type = "checkbox"
        checkbox.classList.add("checkbox-edit")

        let texto = document.createElement("span")
        texto.classList.add("shopping-list__item-name")
        texto.textContent = item.value

        let botaoRemover = document.createElement("button")
        botaoRemover.classList.add("shopping-list__remove")
        botaoRemover.type= "button"

        let imgRemover = document.createElement("img")
        imgRemover.src = "icons/lixeira.svg"
        imgRemover.alt = ""
        imgRemover.classList.add("img-edit")

        botaoRemover.appendChild(imgRemover)

        botaoRemover.onclick = () =>{
            novoItem.remove()
        }
        novoItem.appendChild(checkbox)
        novoItem.appendChild(texto)
        novoItem.appendChild(botaoRemover)

        lista.appendChild(novoItem)

        item.value = ""
    }
}