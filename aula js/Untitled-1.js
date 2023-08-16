function Enviar(){                          

    var klaus= document.getElementById("nomeid");

    if(klaus != " "){

 

 

    }

}

function limpa_formulário_cep(){

//Essa função limpa o formulário e deixa ele sem nada

//escrito substituindo por vazio ("").

document.getElementById('rua').value=("");

document.getElementById('bairro').value=("");

document.getElementById('cidade').value=("");

document.getElementById('uf').value=("");

}

 

function meu_callback(conteudo) 

    if(!("erro" in conteudo)){}

    document.getElementById('rua').value=(conteudo.logradouro);

    document.getElementById('bairro').value=(conteudo.bairro);
    
    document.getElementById('cidade').value=(conteudo);
    
    document.getElementById('uf').value=();
    
    }
    else{

        limpa_formulário_cep();

        alert("Cep não encontrado")

    }

 



 

function pesquisacep(valor){

//Nova variavel "cep" somente com dígitos.

    var cep = valor.replace(/\D/g, '')
 //Verifica se campo cep possui valor informado.
   if(cep ! = " "){

    //Expressão regular para validar CEP.

        var validacep = /[0-9]{8}&/;

    }




