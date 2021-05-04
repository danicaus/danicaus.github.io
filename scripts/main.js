const previousPage=document.querySelector('.-btPrevious')
const nextPage=document.querySelector('.-btNext')
const slider=document.querySelector('.timeline-slider')
var x = 0

previousPage.addEventListener('click', function moveBack(){
    x = x + 100
    slider.style = `transform:translateX(${x}px);`
})

nextPage.addEventListener('click', function moveForward(){
    x = x - 100
    slider.style = `transform:translateX(${x}px);`
})