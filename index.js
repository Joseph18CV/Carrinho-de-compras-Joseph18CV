const productsList = [
    {
        Id: 1,
        Nome: "Uva Crimson",
        Valor: 35.99
    },
    {
        Id: 2,
        Nome: "Vinho Canção",
        Valor: 17.98
    },
    {
        Id: 3,
        Nome: "Água de coco",
        Valor: 5.99
    },
    {
        Id: 4,
        Nome: "Mamão",
        Valor: 9.98
    },
    {
        Id: 5,
        Nome: "Água Tônica",
        Valor: 10.98
    },
]

const body = document.querySelector("body")

const conteudo = document.createElement("main")
conteudo.classList.add("principal")

const tituloPagina = document.createElement("h1")
tituloPagina.innerText = "Virtual Market"

const divComeco = document.createElement("div")
divComeco.classList.add("comeco")

const item = document.createElement("p")
item.classList.add("item")
item.innerText = "Item"
const valor = document.createElement("p")
valor.classList.add("valor")
valor.innerText = "Valor"

divComeco.appendChild(item)
divComeco.appendChild(valor)


body.appendChild(conteudo)
conteudo.appendChild(tituloPagina)
conteudo.appendChild(divComeco)


const secaoProdutos = document.createElement("section")
secaoProdutos.classList.add("secao")
conteudo.appendChild(secaoProdutos)

const listaProdutos = document.createElement("ul")
listaProdutos.classList.add("lista")
secaoProdutos.appendChild(listaProdutos)

const sectionProducts = document.querySelector(".secao")
const listProducts = document.querySelector(".lista")

function createProduct (objeto) {
    for (let i = 0; i < objeto.length; i++){
        console.log(objeto[i])  
        const listP = document.createElement("li")
        listP.classList.add("produtos")

        let nome = document.createElement("p")
        nome.innerText = `${objeto[i].Nome}`
        let valor = document.createElement("span")
        valor.innerText = `R$ ${objeto[i].Valor}`

        listP.appendChild(nome)
        listP.appendChild(valor)

        listaProdutos.appendChild(listP)
    }
}
console.log(createProduct(productsList))

const divFinal = document.createElement("div")
divFinal.classList.add("final")

const totalSomaProducts = document.querySelector(".final")

function somaTotal (objeto) {
    let soma = 0
    let total = document.createElement("span")
        total.innerText = "Total"
    let totalSoma = document.createElement("p")
    
    for (let i = 0; i < objeto.length; i++){
        soma += objeto[i].Valor 
    }
    
    totalSoma.innerText = `R$ ${soma}`

    divFinal.appendChild(total)
    divFinal.appendChild(totalSoma)
    conteudo.appendChild(divFinal)

}
console.log(somaTotal(productsList))

const finalizarCompra = document.createElement("button")
finalizarCompra.innerText = "Finalizar Compra"

conteudo.appendChild(finalizarCompra)

