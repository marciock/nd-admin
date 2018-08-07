import {Creator} from '../../dist/nerdcreator';
import {NdGet} from '../../dist/nerdhttp';
import {MRadio} from '../../components/m-forms';

export class TbSetores extends Creator{

    render(){
        const db=new NdGet('http://localhost/ggnomotor/modules/setor/services/Lista.php');
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
                                    <td><m-radio  group="setor" value="${f.id_setor}">id</m-radio></td>
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
        const radio=this.querySelectorAll('m-radio');

        radio.forEach((f)=>{
            this.value=f.value;
        })

    }

}
customElements.define('tb-setores',TbSetores);