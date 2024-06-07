// const spanCep = document.getElementById('cep-required');
// const input = document.getElementById('cep');
// const inputCepLenght = input.value.length;
// const validCep = spanCep;
// const inputFields = document.querySelector(".required");
// const inputFieldsLength = inputFields.value.length;

// function isvalidCep(inputCepLenght){      
//     if(inputCepLenght === 5){
//         input.value += '-'; 
//     }
// }

//  input.addEventListener('keypress',() => {
//     let inputCepLenght = input.value.length;
//     if(inputCepLenght < 1){
//         removeError(spanCep);
//     }else if(inputCepLenght >= 1 && inputCepLenght < 5){
//         setError(spanCep)
//     }else if(inputCepLenght === 5){
//         isvalidCep(inputCepLenght)       
//     }else if(inputCepLenght === 8){ 
//         console.log("9 digitos")      
//         removeError(spanCep);
//     }
//  });
// function setError(spanCep){
//     spanCep.style.display ='block';
//     input.style.border = '0.2px solid #e90505';   
    
// }
// function removeError(spanCep){
//     // labelerror.style.display ='block';
//     input.style.border = '0.2px solid #0183d9';
//     spanCep.style.display = 'none';       
// }

// input.addEventListener('keypress',() => {
//     let inputFieldsLength = inputFields.value.length;    
//     if(inputFieldsLength > 3){

//         inputFields.style.border = '0.2px solid #0183d9';
        

//     }else if(inputFieldsLength < 3){
//         inputFields.style.border = '0.2px solid #FFFFFF';            
//     }
//  });