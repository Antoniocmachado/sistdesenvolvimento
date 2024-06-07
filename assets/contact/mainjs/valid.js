const input = document.querySelector('#phone');
const inputlength = input.value.length; 
const spanError = document.querySelector('.span-phone');

//receber seletor do id celular
var celular = document.getElementById('phone');

celular.addEventListener('input', () => {
    //remover caracteres não numéricos usando a expressão regular /\D/g, "" e limitar a 11 digitos
    var limparValor = celular.value.replace(/\D/g, '').substring(0,11);    
    // dividir a string em um array de caracteres individuais    
    var numerosArray = limparValor.split(""); 
     //cria uma variável para o campo numero formatado
     var numeroFormatado = "";
    //acessa o if qdo a quantidade de numeros é maior que zero 12034567-89
    if(numerosArray.length > 0){
        //formata o ddd e cacatena o valor
        //slice-extrai uma parte do array
        //join-une os elementos do array em uma unica string
        numeroFormatado += `(${numerosArray.slice(0,2).join('')})`;
    }
     //acessa o if quando a quantidade de numeros é maior que 2
     if(numerosArray.length > 2){
        numeroFormatado += ` ${numerosArray.slice(2,7).join('')}`;
     }
     if(numerosArray.length > 7){
        numeroFormatado += `-${numerosArray.slice(7,11).join('')}`;
     }
    //enviar par ao numero o campo formatado
    celular.value  = numeroFormatado;
});
input.addEventListener('keypress',() => {     
    let inputlength = input.value.length;
    console.log(inputlength); 
    if(inputlength < 14){
        console.log(`digitado = ${inputlength}`);
        setError(spanError); 
    }else if(inputlength === 14 || inputlength === '' ){ 
        console.log("vazio ou < 11")      
        removeError(spanError); 
    }else if(inputlength === 0){ 
    console.log("vazio")      
    removeError(spanError); 
    }          
 });
function setError(index){
    // spanError.style.border = '0.2px solid #e90505';
    spanError.style.display = 'block';
}
// função para limpar o error:
function removeError(index){
    // spanError.style.border = '0.2px solid #0183d9';
    spanError.style.display = '';   
}