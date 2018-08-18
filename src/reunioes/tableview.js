import {Creator} from '../../dist/nerdcreator';
import {NdGet} from '../../dist/nerdhttp';
import {MRadio} from '../../components/m-forms';

export class TbReunioes extends Creator{

    render(){
        const db=new NdGet('http://localhost/ggnomotor/modules/reunioes/services/Lista.php');
        const show=db.show();
        console.log(show);
        return(
             `<div value=${this.getProps('value')}>
                <table>
                    <thead>
                        <tr>
                            <th>Selecione</th>
                            
                            <th>Data</th>
                            <th>Assunto</th>
                            <th>Comitê</th>
                            <th>Local</th>
                            <th>Inicio</th>
                            <th>Término</th>
                        </tr>
                    </thead>
                    <tbody>
                    ${
                        show.map((f)=>{
                            

                            
                            return(
                                `<tr>
                                    <td><m-radio  group="reunioes" value="${f.id_reunioescomites}">id</m-radio></td>
                                   
                                    <td>${f.data.split('-').reverse().join('/')}</td>
                                    <td>${f.assunto}</td>
                                    <td>${f.comite}</td>
                                    <td>${f.local}</td>
                                    <td>${f.hora_inicial}</td>
                                    <td>${f.hora_final}</td>
                                   
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
customElements.define('tb-reunioes',TbReunioes);