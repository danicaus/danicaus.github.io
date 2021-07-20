import { Carousel } from "./carousel.js";

// const previousPage=document.querySelector('.-btPrevious')
// const nextPage=document.querySelector('.-btNext')
// const slider=document.querySelector('.timeline-slider')
// var x = 0

// previousPage.addEventListener('click', function moveBack(){
//     x = x + 270
//     slider.style = `transform:translateX(${x}px);`
// })

// nextPage.addEventListener('click', function moveForward(){
//     x = x - 270
//     slider.style = `transform:translateX(${x}px);`
// })



const anterior = '[data-anterior]'
const proximo = '[data-proximo]'
const listaProdutos = '[data-lista-slides]'
const navegacao = '[data-navegacao]'


new Carousel(anterior, proximo,listaProdutos,navegacao)