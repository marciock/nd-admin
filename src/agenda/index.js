import {Creator} from '../../dist/nerdcreator';

import MHeader from '../../components/m-header';
import TbAgenda from './tableview';
import Fab from '../common/fab';

export class Agenda extends Creator{

    render(){
        return(
            `<div>
                <m-header h="2">Agenda GGNO</m-header>
                <tb-agenda id="tabela"></tb-agenda>
                <nd-fab add="add-agenda" edit-component="edit-agenda"></nd-fab>

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
customElements.define('nd-agenda',Agenda);