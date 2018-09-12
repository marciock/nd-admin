import {Creator} from '../../dist/nerdcreator';
import {NdSession} from '../../dist/nerdhttp';

import MHeader from '../../components/m-header';
import TbPrivilegios from './tableview';
import FabEdit from '../common/fab-edit';

export class Privilegios extends Creator{

    render(){
        
        return(
            `<div>
                <m-header h="2">Privilégios</m-header>
                <tb-privilegios id="tabela"></tb-privilegios>
                <fab-edit  edit-component="edit-privilegios" ></fab-edit>

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
customElements.define('nd-privilegios',Privilegios);