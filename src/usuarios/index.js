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
                <tb-usuarios></tb-usuarios>
                <nd-fab add="add-usuarios" ></nd-fab>

            </div>

            `
        )
    }
    callBack(){
       
    }
}
customElements.define('nd-usuarios',Usuarios);