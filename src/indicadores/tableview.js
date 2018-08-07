import {Creator} from '../../dist/nerdcreator';
import {NdGet} from '../../dist/nerdhttp';
import {MRadio} from '../../components/m-forms';

export class TbIndicadores extends Creator{

    render(){
        const dbIndicadores=new NdGet('http://localhost/ggnomotor/modules/indicadores/services/Lista.php');
        const showIndicadores=dbIndicadores.show();
        
        return(
             `<div value=${this.getProps('value')}>
                <table>
                    <thead>
                        <tr>
                            <th>Selecione</th>
                            
                            <th>Título</th>
                            <th>Descrição</th>
                            <th>Mês/Ano</th>
                            <th>Indicador</th>
                        </tr>
                    </thead>
                    <tbody>
                    ${
                        showIndicadores.map((f)=>{
                            

                            
                            return(
                                `<tr>
                                    <td><m-radio  group="noticias" value="${f.id_indicadores}">id</m-radio></td>
                                    <td>${f.titulo}</td>
                                    <td>${f.descricao}</td>
                                    <td>${f.mes}/${f.ano}</td>
                                    
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
customElements.define('tb-indicadores',TbIndicadores);