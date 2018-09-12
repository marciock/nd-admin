import {Creator} from '../../dist/nerdcreator';

import MHeader from '../../components/m-header';
import TbIndicadores from './tableview';
import Fab from '../common/fab';

export class Indicadores extends Creator{

    render(){
        return(
            `<div>
                <m-header h="2">Indicadores</m-header>
                <tb-indicadores id="tabela"></tb-indicadores>
                <nd-fab add="add-indicadores" edit-component="edit-indicadores"></nd-fab>

            </div>

            `
        )
    }
    callBack(){
        const tabela=this.querySelector('#tabela');
        const edit=document.getElementById('edit');

        edit.addEventListener('click',()=>{
           this.setState('envia',()=>{
               return tabela.value;
           })
        })
        
       
    }
}
customElements.define('nd-indicadores',Indicadores);