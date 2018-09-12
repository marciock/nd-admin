import {Creator} from '../../dist/nerdcreator';

import MHeader from '../../components/m-header';
import TbUnidades from './tableview';
import Fab from '../common/fab';

export class Setores extends Creator{

    render(){
        return(
            `<div>
                <m-header h="2">Setores</m-header>
                <tb-setores id="tabela"></tb-setores>
                <nd-fab add="add-setores" edit-component="edit-setores"></nd-fab>

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
customElements.define('nd-setores',Setores);