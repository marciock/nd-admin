import {Creator} from '../../dist/nerdcreator';
import {NdGet} from '../../dist/nerdhttp';
import {MRadio} from '../../components/m-forms';

export class TbDoumentos extends Creator{

    render(){
        const db=new NdGet('http://localhost/ggnomotor/modules/documentos/services/Lista.php');
        const showDoumentos=db.show();
        
        return(
             `<div value=${this.getProps('value')}>
                <table>
                    <thead>
                        <tr>
                            <th>Selecione</th>
                            
                            <th>Data</th>
                            <th>Titulo</th>
                            <th>Chave</th>
                            <th>Arquivo</th>
                        </tr>
                    </thead>
                    <tbody>
                    ${
                        
                            showDoumentos.map((f)=>{
                                

                                
                                return(
                                    `<tr>
                                        <td><m-radio  group="documentos" value="${f.id_documentoss}">id</m-radio></td>
                                        <td>${f.titulo}</td>
                                        <td>${f.data.split('-').reverse().join('/')}</td>
                                        <td>${f.chave}</td>
                                        
                                        
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
customElements.define('tb-documentos',TbDoumentos);