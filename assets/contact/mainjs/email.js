const form = document.getElementById('form-user');
const fieldForm = document.querySelectorAll('.input__fields');
const span = document.querySelectorAll('.span-email'); 
// const emailRegex = /\S+@\S+\.\S+/;           

// form.addEventListener('submit', (event) => {  
//     // event.preventDefault();
//     console.log(campos.value); 
//     empty();  
//     emailValidate();
//     // mainPasswordValidate();
//     // nameValidate();
// });


// function emailValidate(){
//     console.log('Validando email...');   
//     if(!emailRegex.test(fieldForm[1].value)){
//         setError(1);
//         console.log('INVALIDO');        
//      }  
//      else{
//         removeError(1); 	
//         console.log('VALIDO');
//      }	
// }
// //função para setar o error:
// function setError(index){
//     fieldForm[index].style.border = '0.2px solid #e90505';
//     span[index].style.display = 'block';
// }

// //função para limpar o error:
// function removeError(index){
//     fieldForm[index].style.border = '0.2px solid #0183d9';
//     span[index].style.display = '';   
// }
// function empty(){
//     if(campos === ''){
//         console.log("campos obrigatorios")
//     }
// }
// function mainPasswordValidate(){
//     if(campos[1].value.length < 8)
//     {
//         setError(1);	
//         // console.log('Invalidado');
//      }
//      else
//     {
//         removeError(1); 	
//         // console.log('VALIDO');
//         //  comparePassword();
//      }	
// } 

// function empty(){
//     if(campos === ''){
//         console.log("campos obrigatorios")
//     }
// }


// // função para setar o error:
// function setError(index){
//     campos[index].style.border = '0.2px solid #e90505';
//     spans[index].style.display = 'block';
// }

// // função para limpar o error:
// function removeError(index){
//     campos[index].style.border = '0.2px solid #0183d9';
//     spans[index].style.display = '';   
// }


// function mainPasswordValidate(){
//     if(campos[1].value.length < 8){
//         setError(1);      
//      }
//      else{
//         removeError(1); 	
//         // console.log('VALIDO');
//         //  comparePassword();
//      }	
// } 
