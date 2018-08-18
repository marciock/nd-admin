import {Creator} from '../../dist/nerdcreator';
import {NdSession} from '../../dist/nerdhttp';

import MHeader from '../../components/m-header';
import TbPrivilegios from './tableview';
import Fab from '../common/fab';

export class Privilegios extends Creator{

    render(){
        
        return(
            `<div>
                <m-header h="2">Privilégios</m-header>
                <tb-privilegios></tb-privilegios>
                <nd-fab add="add-privilegios" ></nd-fab>

            </div>

            `
        )
    }
    callBack(){
       
    }
}
customElements.define('nd-privilegios',Privilegios);