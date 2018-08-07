export class NdValidatorEmpty {

    push(data){

     
      data.map((f)=>{
        let elementjs=document.getElementById(f.id);
          
        
        const div=document.createElement('div');

        elementjs.addEventListener('focusout',()=>{
          console.log(elementjs.value);
          div.innerHTML=f.message;
          elementjs.parentNode.insertBefore(div,elementjs.nextSibling);
  
         elementjs.focus();
          
          if(elementjs.value !==undefined & elementjs.value !==''){
           
            elementjs.parentNode.removeChild(div);
 
             
          }
         

        })
    
      })
    }
   
}






