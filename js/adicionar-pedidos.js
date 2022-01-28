var botaoIncluir = document.querySelector("#incluir-pedido");

    botaoIncluir.addEventListener("click", function(event){
        event.preventDefault();

        var cliente = document.getElementById("clienteSelect").value;
           
        var form = document.querySelector(".formulario-principal");        
        var nome = form.nome.value;
        var precoUnitario = form.preco.value;
        var multiplo = form.multiplo.value;   
        /* 
        // Criando o campo CheckBox na Tabela
        var checkBoxTd = document.createElement("td"); //Primeiro cria-se a célula para depois adicionar o checkbox
        var checkBox = document.createElement("input");
        checkBox.type = "checkbox" */
        //Pegando o último valor do ID, para ser incrementado quando adicionado um novo pedido
        //var ultimoId = document.getElementsByClassName("id");
        
        //console.log(ultimoId.value);
        var listaTr = document.createElement("tr");  
        var clienteTd = document.createElement("td");
        var idTd = document.createElement("td");
        var nomeTd = document.createElement("td");
        var precoUnitarioTd = document.createElement("td");
        var multiploTd = document.createElement("td");

        clienteTd.textContent = cliente;
        nomeTd.textContent = nome;
        precoUnitarioTd.textContent = precoUnitario;
        multiploTd.textContent = multiplo;

       // listaTr.appendChild(checkBoxTd);
        listaTr.appendChild(idTd);
        listaTr.appendChild(nomeTd);
        listaTr.appendChild(precoUnitarioTd);
        listaTr.appendChild(multiploTd);

        var tabela = document.querySelector(".tabela-pedidos");

        tabela.appendChild(listaTr);

        form.reset();
    });


