export class Carousel {
    constructor(anterior, proximo, listaSlides, navegacao) {
        this.anterior = document.querySelector(anterior)
        this.proximo = document.querySelector(proximo)
        this.listaSlides = document.querySelector(listaSlides)
        this.navegacao = document.querySelector(navegacao)

        this.indicadores = this.getListaIndicadores()
        this.slides = this.getListaSlides()
        this.tamanhoSlide = this.getTamanhoSlide()

        this.indiceDoSlideAtual = 0

        this.proximo.addEventListener('click', this.proximoSlide.bind(this))
        this.anterior.addEventListener('click', this.slideAnterior.bind(this))
        this.navegacao.addEventListener('click', this.pularParaSlide.bind(this))

        this.preparaSlides()
    }

    getListaSlides() {
        return Array.from(this.listaSlides.children)
    }
    
    getListaIndicadores() {
        return Array.from(this.navegacao.children)
    }

    getTamanhoSlide() {
        return this.slides[0].getBoundingClientRect().width
    }

    getSlideAtual() {
        return this.slides[this.indiceDoSlideAtual]
    }

    getIndiceAtual(){
        return this.indicadores[this.indiceDoSlideAtual]
    }

    proximoSlide(event){
        let proximaPosicao = this.indiceDoSlideAtual + 1
        
        if(proximaPosicao > this.slides.length - 1){
            proximaPosicao = 0
        }
        
        this.vaParaSlide(proximaPosicao)
        event.target.classList.add('carousel__botao--active')
        this.resetArrow(event)
    }
    
    slideAnterior(event){
        let posicaoAnterior = this.indiceDoSlideAtual - 1
        if(posicaoAnterior < 0){
            posicaoAnterior = this.slides.length - 1
        }
        this.vaParaSlide(posicaoAnterior)
        event.target.classList.add('carousel__botao--active')
        this.resetArrow(event)
    }

    resetArrow(event) {
        const botao = event.target
        const tiraActive = (function inativo() {this.classList.remove('carousel__botao--active')}).bind(botao)
        setTimeout(tiraActive, 1000)
    }

    vaParaSlide(posicao) {
        const indicadorAtual = this.getIndiceAtual()
        this.indiceDoSlideAtual = posicao
        const indicadorSelecionado = this.getIndiceAtual()

        this.scrollParaSlide(this.getSlideAtual())
        this.atualizaIndicadores(indicadorAtual, indicadorSelecionado)
    }

    scrollParaSlide(slideSelecionado) {
        this.listaSlides.style.transform = `translateX(-${slideSelecionado.style.left})`
    }

    atualizaIndicadores(indicadorAtual, indicadorSelecionado) {
        indicadorAtual.classList.remove('carousel__indicador--ativo')
        indicadorSelecionado.classList.add('carousel__indicador--ativo')
    }

    pularParaSlide(event) {
        if(event.target === event.currentTarget) return
        const indicadorSelecionado = event.target.getAttribute('data-indicador')
        this.vaParaSlide(parseInt(indicadorSelecionado))
    }
    
    preparaSlides() {
        this.slides.forEach((slide, i) => {
            slide.style.left = this.tamanhoSlide * i+'px'
        })
    }
}
        
