function criaCartao( categoria, pergunta, resposta){
    let container = document. getElementById('container')
    let  cartao = documenet. creatElement ('article')
    cartao.className = 'cartao'

    cartao.innerHTML = `
    <div class ="cartao_conteudo">
        <h3>${categoria}</h3>
        <div class = "cartao_conteudo_pergunta">
<p> ${pergunta} </p>
        </div>
<div class= "cartao_conteudo_resposta">
    <p>${resposta}</p>
<div>
</div>

`
let respotaEstaVisivel = false

function viraCartao (){
    respostaEstaVisivel = !respostaEstaVisivel
    cartao.classList.toggle('active', resostaEstaVisivel)
}
cartao.addeventListener ('click',viraCartao)

container.appendChild(cartao)
}