const input = document.querySelector("#cpf");
const inputLength = input.value.length;
const labelError = document.querySelector('#errorcpf');

//receber seletor do id celular
var cpf = document.getElementById('cpf');

cpf.addEventListener('input', () => {    
    var clearValue = cpf.value.replace(/\D/g, '').substring(0,11);      
    var numerosArray = clearValue.split(""); 
    // console.log("numero",clearValue);   
    console.log(numerosArray);
     var numeroFormatado = "";//cria uma variável para o campo numero formatado    
    //acessa o if qdo a quantidade de numeros é maior que zero 
    if(numerosArray.length > 0){
        //formata o ddd e concatena o valor
        //slice-extrai uma parte do array
        //join-une os elementos do array em uma unica string
        var inputValue = input.value;
        // console.log(inputValue.length)
        numeroFormatado += `${numerosArray.slice(0,3).join('')}`;
        console.log("Formatado",numeroFormatado );
        if(numerosArray.length <= 11){
            console.log("deletou numero");
            setError(labelError); 
        }            
    }    
     //acessa o if quando a quantidade de numeros é maior que 3
     if(numerosArray.length >= 3){        
        numeroFormatado += `.${numerosArray.slice(3,6).join('')}`;
        console.log(numerosArray.length);
        console.log("formatado",numeroFormatado );
     }
     if(numerosArray.length >= 7){
        console.log(inputValue.length)
        numeroFormatado += `.${numerosArray.slice(6,9).join('')}`;
        console.log(numeroFormatado );
     }
     if(numerosArray.length >= 9){
        console.log(inputValue.length)
        numeroFormatado += `-${numerosArray.slice(9,11).join('')}`;
        console.log("formatado",numeroFormatado );        
     }
     if(numerosArray.length === 11){
        console.log("numero array = 11",numerosArray.length);
        console.log("formatado",numerosArray.length );  
        removeError(labelError);           
     } 
     if(!numerosArray.length){
        console.log("numero array = 11",numerosArray.length);
        console.log("formatado",numerosArray.length );  
        resetError(labelError);           
     }     
    //enviar par ao numero o campo formatado    
    cpf.value  = numeroFormatado;
});

input.addEventListener('keypress',() => {     
    let inputlength = input.value.length;
    if(inputlength < 14){
        // console.log(`menor que 14: ${inputlength}`);
        setError(labelError); 
    //    if(inputlength <= 14){
    //     // console.log(`menor igual a 14: ${inputlength}`);
    //         setError(labelError);
    //    } 
    }else if(inputlength >= 14){ 
        console.log(`teria que limpar: ${inputlength}`);     
        removeError(labelError); 
    }         
 });
function setError(){    
    // inputFields.style.border = '0.2px solid #e90505';
    labelError.style.display = 'block';
}
// função para limpar o error:
function removeError(){
    input.style.border = '0.2px solid #0183d9';
    labelError.style.display = '';   
}
function resetError(){
    input.style.border = '';
    labelError.style.display = '';   
}