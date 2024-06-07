const input = document.querySelector("#cpf");
const inputlength = input.value.length;  
const labelerror = document.getElementById('errorcpf');


input.addEventListener('keypress', () => {  
    let inputlength = input.value.length;            
     console.log(inputlength)         
     if(inputlength >= 0){
        if(inputlength === 3 || inputlength === 7){
            input.value += '.';
        }else if(inputlength === 11){
            input.value += '-' 
            removeError(labelerror);                                       
        }         
     }      
});
function validCpf(){
    let inputlength = input.value.length;
    if(inputlength < 14){        
        console.log("Obrigatório 11 digitos")
        setError(labelerror)
    }else if(inputlength = 14){
        console.log("função remove erro");
        removeError(labelerror);             
    }else if(inputlength === ' '){
        removeError(labelerror);  
    }
}
function setError(labelerror){
    labelerror.style.display ='block';
    // labelerror.style.border = '0.2px solid #e90505';    
}
function removeError(labelerror){
    // labelerror.style.display ='block';
    // labelerror.style.border = '0.2px solid #0183d9';
    labelerror.style.display = 'none';   
}


