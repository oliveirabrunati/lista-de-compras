const itensLista = ['pão', 'manteiga'];

function adicionarItem(){
    
    itensLista.push(document.getElementById('novoItem').value);

    // console.log(itensLista);

    exibirListaCompras();
}

function exibirListaCompras(){

    for(let posicao = 0; posicao length; posicao++){
        
        let listaCompras = document.getElementById('listaCompras');
        let lista = document.createElement('li');
        let itemVerificado = document.createElement('input');
        itemVerificado.type = 'checkbox';
        let itens = document.createElement('label');
        itens.appendChild(document.createTextNode(itensLista[posicao]));
        
        lista.appendChild(itemVerificado);
        lista.appendChild(itens);
        listaCompras.appendChild(lista);
        
        console.log(listaCompras);
    }

}