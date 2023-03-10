import { Negociacao } from "../models/negociacao.js";

export class NegociacaoController {
    #campoData
    #quantidadeAcoes

    constructor(campoData, quantidadeAcoes, campoValor) {
        this._campoData = document.querySelector('#dataNegociacao');
        this._quantidadeAcoes = document.querySelector('#quantidadeAcoes');
        this.campoValor = document.querySelector('#valorNegociacao');
        this.tabela = document.getElementById('tabela-negociacoes');
    }

    criarNegociacao() {
        
        let data = new Date(this._campoData.value + "T00:00:00-03:00").toLocaleDateString();
        let quantidade = parseInt(this._quantidadeAcoes.value);
        let valor = parseFloat(this.campoValor.value);
        var novaNegociacao = new Negociacao(data, quantidade, valor);
        console.log(novaNegociacao);

        
        
        // Cria uma nova linha na tabela
        const novaLinha = document.createElement('tr');
        
        // Cria uma nova celula na tabela e insri o valor da data
        const novaColuna = document.createElement('td');
        novaColuna.innerHTML = novaNegociacao.date
        const celulaData = document.querySelector('#data');
        
        // Cria uma nova celula na tabela e inseri a quantidade
        const celNovaNegociacao = document.createElement('td');
        celNovaNegociacao.innerHTML = novaNegociacao.quantidade;
        const celulaQuantidade = document.querySelector('#quantidade');
        
        
        // Cria uma nova celula na tabela e inserio valor 
        const celulaVal = document.createElement('td');
        celulaVal.innerHTML = novaNegociacao.valor;
        const celulaValor = document.querySelector('#valor');


        // Adiciona as células à nova linha
        novaLinha.appendChild(novaColuna);
        novaLinha.appendChild(celNovaNegociacao);
        novaLinha.appendChild(celulaVal);

        // Adiciona a nova linha à tabela
        this.tabela.querySelector('tbody').appendChild(novaLinha);
    }
}
function enviar() {
    const controller = new NegociacaoController();
    document.querySelector('#cadastrar')
        .addEventListener('click', event => {
            event.preventDefault();
            controller.criarNegociacao();
        });

}
enviar()



