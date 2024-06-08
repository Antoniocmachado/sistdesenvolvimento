const form = document.getElementById('form__login');
const campos = document.querySelectorAll('.required');
const spans = document.querySelectorAll('.span-required'); 
const emailRegex = /\S+@\S+\.\S+/;   // /^\w\+(\[-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;  
const input = document.getElementById('email');      

// configurar botão para não enviar nada vazio
form.addEventListener('submit', (event) => {  
    event.preventDefault();
    // console.log('vazio'); 
    empty();  
    emailValidate();
    mainPasswordValidate();   
});
function setError(index){
    campos[index].style.border = '0.2px solid #e90505';
    spans[index].style.display = 'block';
}
function removeError(index){     
    campos[index].style.border = '0.2px solid #0183d9';
    spans[index].style.display = 'none';     
}
function resetError(index){
    campos[index].style.border = 'none';
    spans[index].style.display = 'none';     
}
function emailValidate(){    
    const inputlength = input.value.length     
    if(!emailRegex.test(campos[0].value)){        
        setError(0);        
     }else{
        resetError(0);
     }
    if (inputlength > 0){        
    }else if(inputlength === 0){       
        resetError(0);
    }  	
}
function mainPasswordValidate(){
    const inputlength = input.value.length     
    if(campos[1].value.length < 1){
        resetError(1);
    } 
    if(campos[1].value.length > 0){
        console.log("qt caracteres",campos[1].value.length);        
        if(campos[1].value.length > 8){
            removeError(1);            
        }else{            
            setError(1);
        }          
     }	
} 
function empty(){
    if(campos === ''){
        // console.log("campos obrigatorios")
    }
}