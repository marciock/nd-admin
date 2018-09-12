import {Creator} from '../../dist/nerdcreator';

import MHeader from '../../components/m-header';
import TbNoticias from './tableview';
import Fab from '../common/fab';

export class Noticias extends Creator{

    render(){
        return(
            `<div>
                <m-header h="2">Noticias</m-header>
                <tb-noticias id="tabela"></tb-noticias>
                <nd-fab add="add-noticias" edit-component="edit-noticias"></nd-fab>

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
customElements.define('nd-noticias',Noticias);