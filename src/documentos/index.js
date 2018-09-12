import {Creator} from '../../dist/nerdcreator';

import MHeader from '../../components/m-header';
import TbDocumentos from './tableview';
import Fab from '../common/fab';

export class Documentos extends Creator{

    render(){
        return(
            `<div>
                <m-header h="2">Documentos</m-header>
                <tb-documentos id="tabela"></tb-documentos>
                <nd-fab add="add-documentos" edit-component="edit-documentos"></nd-fab>

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
customElements.define('nd-documentos',Documentos);