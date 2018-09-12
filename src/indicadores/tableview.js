import {Creator} from '../../dist/nerdcreator';
import {NdGet} from '../../dist/nerdhttp';


export class TbIndicadores extends Creator{

    render(){
        const dbIndicadores=new NdGet(HOST+'ggnomotor/modules/indicadores/services/Lista.php');
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
                                    <td><p><label><input  type="radio"   value="${f.id_indicadores}" name="id_indicadores"/><span></span></label></p></td>
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
        const input=this.querySelectorAll('input');
 
 
      
        input.forEach((f)=>{
          f.addEventListener('click',()=>{
           
            this.value=f.value
            console.log(this.value);
          })
        })
    }

}
customElements.define('tb-indicadores',TbIndicadores);