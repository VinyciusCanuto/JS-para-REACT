import areaQuadrado from "./function.js";

//console.log(areaQuadrado(5))

// arrow function
//   function Soma (a, b) {}
//      return a + b
//}

const soma = (a, b) => a+ b;

// destructuring

function MouseMose(event) {
    const clientY = event.clientY
   const clientX = event.clientX
}

const MouseMoving = (event) =>{
    const {clientX, clientY} = event
}

const MouseHandle = ({clientX, clientY}) => console.log(clientX, clientY)

//document.documentElement.addEventListener('mousemove', MouseHandle);

// Arrays 

const frutas = ['Banana', 'Maça' , 'Pera']


// Rest

const showList = (empresa, ...funcionarios) => {
    funcionarios.forEach((funcionario) => {
        console.log(funcionario, empresa)
    })

}

//showList('Senai', 'Carlos', 'Letícia', 'Bruno', 'Marcia')

// Spread

const numeros = [12, 13, 21, 30, 4, 6, 7]

const maior = Math.max(...numeros) //Math.max: ver o maior numero || Math.min: ver o menor numero
//console.log(maior)

const carro = {
    cor: 'prata',
    ano: 2008,
    modelo: 'ka'
}

const marcaCarro = {...carro, marca: 'ford', acessório: 'teto solar'}
//console.log(marcaCarro)

//Arrays MAP e FILTER

const compras = [
    'R$ 200',
    '150',
    'R$ 550',
    'R$ 300',
    '550',
    '550',
    'Shampoo',
    'Creme de gato'
]

const precoFiltro = compras.filter((preco) => (preco.includes('0')))
//console.log(precoFiltro)

const precosNumeros = precoFiltro.map((precos) => Number(precos.replace('R$', '')))
//console.log(precosNumeros)

// Operadores ternários

const csa = 3
const crb = 2

const vencedor = crb > csa ? 'CRB venceu' : 'CSA venceu'

const situacaoAtiva = true
const mensagem = situacaoAtiva && 'Situação ativa'

//console.log(mensagem)