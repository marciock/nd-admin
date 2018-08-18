import {Creator} from '../../dist/nerdcreator';
import {NdGet} from '../../dist/nerdhttp';
import {MRadio} from '../../components/m-forms';

export class TbDocumentos extends Creator{

    render(){
        const db=new NdGet('http://localhost/ggnomotor/modules/documentos/services/Lista.php');
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
                                        <td><m-radio  group="documentos" value="${f.id_documentos}">id</m-radio></td>
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
        const radio=this.querySelectorAll('m-radio');

        radio.forEach((f)=>{
            this.value=f.value;
        })

    }

}
customElements.define('tb-documentos',TbDocumentos);

