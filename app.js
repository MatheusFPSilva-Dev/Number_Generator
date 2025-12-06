tecla();



function sortear(){ 
    let quant = parseInt(document.getElementById("quantidade").value);
    let de = parseInt(document.getElementById("de").value);
    let ate = parseInt(document.getElementById("ate").value);

    let NumAle;
    let sorteados = [];

    for( let i = 0;i < quant; i++){
        NumAle = NumAleatorio(de,ate);
        while(sorteados.includes(NumAle)){
            NumAle = NumAleatorio(de,ate);
        }
           
        sorteados.push(NumAle);
    }

    
    let NumSort = document.getElementById("NumSort");
    NumSort.innerText = sorteados.join(" | ");


    AltBtn();
    
   
   //document.getElementById("btn-reiniciar").disabled = false;
   //let cor = document.getElementById("btn-reiniciar").style;
   //cor.background = "#1875E8";
   //cor.cursor = "pointer";
}

function reiniciar(){
    let NumSort = document.getElementById("NumSort");
    let quant = parseInt(document.getElementById("quantidade").value);
    let de = parseInt(document.getElementById("de").value);
    let ate = parseInt(document.getElementById("ate").value);
    limparinput(quant,"quantidade");
    limparinput(de,"de");
    limparinput(ate,"ate");
    limpartext(NumSort,"NumSort");
   
    AltBtn();

    //document.getElementById("btn-reiniciar").disabled = true;
    //let cor = document.getElementById("btn-reiniciar").style;
    //cor.background = "#6f6f70";
    //cor.cursor = "not-allowed";
     
}

function AltBtn(){
    let botao = document.getElementById("btn-reiniciar");
    if(botao.disabled == true){
        botao.disabled = false;
    }else{
        botao.disabled = true;
    }

    if(botao.classList.contains("container__botao-desabilitado")){
        botao.classList.remove("container__botao-desabilitado");
        botao.classList.add("container__botao");
}else{
        botao.classList.remove("container__botao");
        botao.classList.add("container__botao-desabilitado");
        
    }

}

function NumAleatorio(min,max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function tecla(){
    document.addEventListener('keydown', function(a){
    if(a.key === 'Enter'){
        sortear();
    }
});
}
function limparinput(doc,id){
     doc = document.getElementById(id).value = "";
}
function limpartext(doc,id){
     doc = document.getElementById(id).innerText = "";
}
