import {Creator} from '../../dist/nerdcreator';
import {NdSession} from '../../dist/nerdhttp';

import MHeader from '../../components/m-header';
import TbUsuarios from './tableview';
import Fab from '../common/fab';

export class Usuarios extends Creator{

    render(){
        
        return(
            `<div>
                <m-header h="2">Usuários</m-header>
                <tb-usuarios id="tabela"></tb-usuarios>
                <nd-fab add="add-usuarios" edit-component="edit-usuarios"></nd-fab>

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
customElements.define('nd-usuarios',Usuarios);