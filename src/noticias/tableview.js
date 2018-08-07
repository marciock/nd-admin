import {Creator} from '../../dist/nerdcreator';
import {NdGet} from '../../dist/nerdhttp';
import {MRadio} from '../../components/m-forms';

export class TbNoticias extends Creator{

    render(){
        const dbNoticias=new NdGet('http://localhost/ggnomotor/modules/noticias/services/Lista.php');
        const showNoticias=dbNoticias.show();
        
        return(
             `<div value=${this.getProps('value')}>
                <table>
                    <thead>
                        <tr>
                            <th>Selecione</th>
                            
                            <th>Título</th>
                        </tr>
                    </thead>
                    <tbody>
                    ${
                        showNoticias.map((f)=>{
                            

                            
                            return(
                                `<tr>
                                    <td><m-radio  group="noticias" value="${f.id_noticia}">id</m-radio></td>
                                    <td>${f.titulo}</td>
                                    <td>${f.data.split('-').reverse().join('/')}</td>
                                   
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
customElements.define('tb-noticias',TbNoticias);