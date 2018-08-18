import {Creator} from '../../dist/nerdcreator';
import {NdGet} from '../../dist/nerdhttp';
import {MRow} from '../../components/m-row';

export class TbPrivilegios extends Creator{

    render(){
        const db=new NdGet('http://localhost/ggnomotor/modules/privilegios/services/Lista.php');
        const show=db.show();
        
        return(
             `<div value=${this.getProps('value')}>
             
                <m-row>

                </m-row>
                <m-row>
                <table>
                    <thead>
                        <tr>
                           
                            
                            <th>Cadastros</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                    ${
                        show.map((f)=>{
                            return(
                                `<tr>
                                   
                                    <td></td>
                                   
                                </tr>
                                `
                            )
                        }).join('')
                    }
                        
                    </tbody>

                </table>
                
            </m-row>
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
customElements.define('tb-privilegios',TbPrivilegios);