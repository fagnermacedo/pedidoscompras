var botaoBuscarPedidos = document.querySelector("#buscar-produtos");

botaoBuscarPedidos.addEventListener("click", function() {

    var xhr = new XMLHttpRequest();

    xhr.open("GET","https://raw.githubusercontent.com/fagnermacedo/pedidoscompras/main/db.json");

    xhr.addEventListener("load", function() {
        var erroAjax = document.querySelector("#erro-ajax");

        if(xhr.status == 200){
            erroAjax.classList.add("invisibel");
            var resposta = xhr.responseText;
            var pedidos = JSON.parse(resposta);

            console.log(pedidos);

            pedidos.forEach(function(pedidos){
                adicionaPedidosNaTabela(pedidos);
            });
        }else {
            erroAjax.classList.remove("invisivel");
        }
    });

    xhr.send();

});
function adicionaPedidosNaTabela(pedidos) {
    var pedidosTr = montaTr(pedidos);
    var tabela = document.querySelector(".tabela-pedidos");
    tabela.appendChild(pedidosTr);
}

function montaTr(pedidos) {
    var pedidosTr = document.createElement("tr");
    pedidosTr.classList.add("pedidos");

    /* pedidosTr.appendChild(montaTd(pedidos.checkbox, "info-checkbox"));*/
    pedidosTr.appendChild(montaTd(pedidos.id, "info-id")); 
    pedidosTr.appendChild(montaTd(pedidos.nome, "info-produto"));
    pedidosTr.appendChild(montaTd(pedidos.preco, "info-preco"));
    pedidosTr.appendChild(montaTd(pedidos.multiplo, "info-multiplo"));

    return pedidosTr;
}

function montaTd(dado, classe) {
    var td = document.createElement("td");
    td.classList.add(classe);
    td.textContent = dado;

    return td;
}