// Função ativada através da propriedade onclick
//Parametros passados para a função. Propriedade do botão. Ex: ('otimo', this, 'red')


function openStatus(statusName,elmnt,color) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none"; //elementro não será mostrado
        
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundColor = ""; //Elemento não terá 
    }

    //Define um elemento DIV para não ser exibido. A propriedade display:none oculta o elemento.
    //A propriedade BLOCK faz com que o elemento seja renderizado como um elemento de nível de bloco.
    document.getElementById(statusName).style.display = "block";
    elmnt.style.backgroundColor = color;

    }
    // Obtem o elemento com o id="defaultOpen" e clica nele.
    document.getElementById("defaultOpen").click();


    /*
    ##############################################################################################################
                      Informações referentes ao Formulário da página HTML e funções dos botões na página
    ##############################################################################################################
    */

    var botaoIncluir = document.querySelector("#incluir-pedido");

    botaoIncluir.addEventListener("click", function(event){
        event.preventDefault();

        var form = document.querySelector(".formulario-principal");

        var nome = form.nome.value
        var precoUnitario = form.preco.value;
        var multiplo = form.multiplo.value;

        
        var listaTr = document.createElement("tr");

        var checkBoxTd = document.createElement("td");
        var idTd = document.createElement("td");
        var nomeTd = document.createElement("td");
        var precoUnitarioTd = document.createElement("td");
        var multiploTd = document.createElement("td");

        nomeTd.textContent = nome;
        precoUnitarioTd.textContent = precoUnitario;
        multiploTd.textContent = multiplo;

        listaTr.appendChild(checkBoxTd);
        listaTr.appendChild(idTd);
        listaTr.appendChild(nomeTd);
        listaTr.appendChild(precoUnitarioTd);
        listaTr.appendChild(multiploTd);

        var tabela = document.querySelector(".tabela-pedidos");

        tabela.appendChild(listaTr);

    });
