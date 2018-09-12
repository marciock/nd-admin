import {Creator} from '../../dist/nerdcreator';

import MHeader from '../../components/m-header';
import TbIdeias from './tableview';
import Fab from '../common/fab';

export class Ideias extends Creator{

    render(){
        return(
            `<div>
                <m-header h="2">Ideias</m-header>
                <tb-ideias id="tabela"></tb-ideias>
                <nd-fab add="add-ideias" edit-component="edit-ideias"></nd-fab>

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
customElements.define('nd-ideias',Ideias);