import {Creator} from '../../dist/nerdcreator';
import {NdGet} from '../../dist/nerdhttp';


export class TbDocumentos extends Creator{

    render(){
        const db=new NdGet(HOST+'ggnomotor/modules/documentos/services/Lista.php');
        const show=db.show();
        
        return(
             `<div value=${this.getProps('value')}>
                <table>
                    <thead>
                        <tr>
                            <th>Selecione</th>
                            
                            <th>Data</th>
                            <th>Titulo</th>
                           
                            <th>Arquivo</th>
                        </tr>
                    </thead>
                    <tbody>
                    
                        ${
                                                
                            show.map((f)=>{
                                

                                
                                return(
                                    `<tr>
                                        <td><p><label><input  type="radio"   value="${f.id_documentos}" name="id_reunoes"/><span></span></label></p></td>
                                        <td>${f.titulo}</td>
                                        <td>${f.data.split('-').reverse().join('/')}</td>
                                       
                                        
                                        
                                        <td><a href="${f.arquivo}" >Visualizar</a></td>
                                    
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
customElements.define('tb-documentos',TbDocumentos);

