function criaCartao(categoria, pergunta, resposta) {
    let container = document.getElementById('container')
    let cartao = document.createElement('article')
    cartao.className = cartao

    cartao.innerHTML = `
     <div class="cartao__conteudo">
            <h3>Historia</h3>
            <div class="cartao__conteudo__pergunta">
              <p>Em que ano começou a Primeira Guerra Mundial?</p>
              </div>
            <div class="cartao__conteudo__resposta">
                <p>Em 1914.</p>
            </div>
        </div>
    `
container.appendChild(cartao)

}
    