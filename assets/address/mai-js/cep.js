const input = document.querySelector(".required");
const inputLength = input.value.length;
const spanError = document.querySelector('#cep-required');
const labelError = document.querySelector('#cep');

//receber seletor do id celular
var cep = document.getElementById('cep');

cep.addEventListener('input', () => {    
    var clearValue = cep.value.replace(/\D/g, '').substring(0,8);   //remover caracteres não numéricos usando a expressão regular /\D/g, "" e limitar a 11 digitos 
     
    var numerosArray = clearValue.split(""); // dividir a string em um array de caracteres individuais      
     var numeroFormatado = "";//cria uma variável para o campo numero formatado
    //acessa o if qdo a quantidade de numeros é maior que zero 
    if(numerosArray.length > 0){
        //formata o ddd e concatena o valor
        //slice-extrai uma parte do array
        //join-une os elementos do array em uma unica string        
        var inputValue = input.value;
        console.log(inputValue)
        numeroFormatado += `${numerosArray.slice(0,5).join('')}`;
    }
     //acessa o if quando a quantidade de numeros é maior que 4
    //  if(numerosArray.length <= 4){
    //     numeroFormatado += ` ${numerosArray.slice(0,4).join('')}`;
    //  }
     if(numerosArray.length > 5){
        numeroFormatado += `-${numerosArray.slice(5,8).join('')}`;
     }
    //enviar par ao numero o campo formatado
    cep.value  = numeroFormatado;
});

input.addEventListener('keypress',() => {     
    let inputlength = input.value.length;
    if(inputlength < 8){
        console.log(`menor que 8: ${inputlength}`);
        setError(spanError); 
       if(inputlength <= 7){
        console.log(`menor igual a 7: ${inputlength}`);
            setError(spanError);
       } 
    }else if(inputlength >= 8){ 
        console.log(`maior que 8: ${inputlength}`);     
        removeError(spanError); 
    }    
        
 });

function setError(){    
    // inputFields.style.border = '0.2px solid #e90505';
    spanError.style.display = 'block';
}
// função para limpar o error:
function removeError(){
    input.style.border = '0.2px solid #0183d9';
    spanError.style.display = '';   
}