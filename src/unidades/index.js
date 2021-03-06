import {Creator} from '../../dist/nerdcreator';

import MHeader from '../../components/m-header';
import TbUnidades from './tableview';
import Fab from '../common/fab';

export class Unidades extends Creator{

    render(){
        return(
            `<div>
                <m-header h="2">Unidades</m-header>
                <tb-unidades id="tabela"></tb-unidades>
                <nd-fab add="add-unidades" edit-component="edit-unidades"></nd-fab>

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
customElements.define('nd-unidades',Unidades);