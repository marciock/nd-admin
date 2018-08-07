
import {NdOrderBind} from '../../dist/nerdbinds';
import {NdGet} from '../../dist/nerdhttp';

 class Order{

    constructor() {

        this.data=new NdGet('http://localhost/ggnomotor/modules/usuarios/services/Lista.php');
        
        return this.data.show();
       
    }
}

    export class OrderNormal{

        constructor(){

            const data=new Order();
            const db=data;
            const tbody=document.querySelector('tbody');
            let view= db.map((f)=>{
                 return(
                 `<tr>
                 <td><m-radio  group="usuarios" value="${f.id_usuarios}"></m-radio></td>
                 <td>${f.nome}</td>
                 <td>${f.chave}</td>
                 <td>${f.email}</td>
                 </tr>
                 `
                 )
                 }).join('');
     
                
     
              return  tbody.innerHTML=view;
        }
        
      
    
}

    export class OrderFilter{

        constructor(id,filter){

            const data=new Order();
            const db=data;
        const order=new NdOrderBind(db);
        const bt=document.getElementById(id);
        const tbody=document.querySelector('tbody');

        bt.addEventListener('click',()=>{
           
          let  show=order.filter(filter);
            let view= show.map((f)=>{
                return(
                `<tr>
                <td><m-radio  group="usuarios" value="${f.id_usuarios}"></m-radio></td>
                <td>${f.nome}</td>
                <td>${f.chave}</td>
                <td>${f.email}</td>
                </tr>
                `
                )
                }).join('');
    
            
                tbody.innerHTML=view;

        })
        }

        
    }
    



