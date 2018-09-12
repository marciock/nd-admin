import {Creator} from '../../dist/nerdcreator';
import {NdGet} from '../../dist/nerdhttp';


export class TbIdeias extends Creator{

    render(){
        const db=new NdGet(HOST+'ggnomotor/modules/ideias/services/Lista.php');
        const show=db.show();
       // console.log(show);
        return(
             `<div value=${this.getProps('value')}>
                <table>
                    <thead>
                        <tr>
                            <th>Selecione</th>
                            
                            <th>Chave</th>
                            <th>Nome</th>
                           
                            <th>Titulo</th>
                            <th>Descricao</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                    ${
                        show.map((f)=>{
                            

                            
                            return(
                                `<tr>
                                    <td><p><label><input  type="radio"   value="${f.id_ideias}" name="id_ideias"/><span></span></label></p></td>
                                   
                                   
                                    <td>${f.chave}</td>
                                   
                                    <td>${f.nome}</td>
                                    <td>${f.titulo}</td>
                                    <td>${f.descricao}</td>
                                   
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
customElements.define('tb-ideias',TbIdeias);