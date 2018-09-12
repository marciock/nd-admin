import {Creator} from '../../dist/nerdcreator';
import {NdGet} from '../../dist/nerdhttp';


export class TbNoticias extends Creator{

    render(){
        const dbNoticias=new NdGet(HOST+'ggnomotor/modules/noticias/services/Lista.php');
        const showNoticias=dbNoticias.show();
        
        return(
             `<div value=${this.getProps('value')}>
                <table>
                    <thead>
                        <tr>
                            <th>Selecione</th>
                            
                            <th>Título</th>
                        </tr>
                    </thead>
                    <tbody>
                    ${
                        showNoticias.map((f)=>{
                            

                            
                            return(
                                `<tr>
                                    <td><p><label><input  type="radio"   value="${f.id_noticias}" name="id_noticias"/><span></span></label></p></td>
                                    <td>${f.titulo}</td>
                                    <td>${f.data.split('-').reverse().join('/')}</td>
                                   
                                </tr>
                                `
                            )
                        }).join('')
                    }
                        
                    </tbody>

                </table>
                
               
             </div>
             `
        )
    }
    callBack(){
        const input=this.querySelectorAll('input');
 
 
      
        input.forEach((f)=>{
          f.addEventListener('click',()=>{
           
            this.value=f.value
          //  console.log(this.value);
          })
        })

    }

}
customElements.define('tb-noticias',TbNoticias);