import {Creator} from '../../dist/nerdcreator';
import {NdGet} from '../../dist/nerdhttp';
import {MRadio} from '../../components/m-forms';

export class TbComites extends Creator{

    render(){
        const dbComite=new NdGet(HOST+'ggnomotor/modules/comites/services/Lista.php');
        const showComite=dbComite.show();
        console.log(showComite);
        return(
             `<div value=${this.getProps('value')}>
                <table>
                    <thead>
                        <tr>
                            <th>Selecione</th>
                            
                            <th>Comitê</th>
                        </tr>
                    </thead>
                    <tbody>
                    ${
                        showComite.map((f)=>{
                            return(
                                `<tr>
                                    <td><m-radio  group="comite" value="${f.id_comite}">id</m-radio></td>
                                    <td>${f.comite}</td>
                                   
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
customElements.define('tb-comites',TbComites);