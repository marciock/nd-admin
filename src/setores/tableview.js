import {Creator} from '../../dist/nerdcreator';
import {NdGet} from '../../dist/nerdhttp';


export class TbSetores extends Creator{

    render(){
        const db=new NdGet(HOST+'ggnomotor/modules/setor/services/Lista.php');
        const show=db.show();
        
        return(
             `<div value=${this.getProps('value')}>
                <table>
                    <thead>
                        <tr>
                            <th>Selecione</th>
                            
                            <th>Setor</th>
                        </tr>
                    </thead>
                    <tbody>
                    ${
                        show.map((f)=>{
                            return(
                                `<tr>
                                    <td><p><label><input  type="radio"   value="${f.id_setor}" name="id_setor"/><span></span></label></p></td>
                                    <td>${f.setor}</td>
                                   
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
customElements.define('tb-setores',TbSetores);