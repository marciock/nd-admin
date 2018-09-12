import {Creator} from '../../dist/nerdcreator';
import {NdGet} from '../../dist/nerdhttp';


export class TbUnidades extends Creator{

    render(){
        const db=new NdGet(HOST+'ggnomotor/modules/unidades/services/Lista.php');
        const show=db.show();
        
        return(
             `<div value=${this.getProps('value')}>
                <table>
                    <thead>
                        <tr>
                            <th>Selecione</th>
                            
                            <th>Unidade</th>
                        </tr>
                    </thead>
                    <tbody>
                    ${
                        show.map((f)=>{
                            return(
                                `<tr>
                                    <td><p><label><input  type="radio"   value="${f.id_unidade}" name="id_unidade"/><span></span></label></p></td>
                                    <td>${f.unidade}</td>
                                   
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
            console.log(this.value);
          })
        })

    }

}
customElements.define('tb-unidades',TbUnidades);