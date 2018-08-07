import {Creator} from '../../dist/nerdcreator';

import MHeader from '../../components/m-header';
import TbUnidades from './tableview';
import Fab from '../common/fab';

export class Setores extends Creator{

    render(){
        return(
            `<div>
                <m-header h="2">Setores</m-header>
                <tb-setores></tb-setores>
                <nd-fab add="add-setores"></nd-fab>

            </div>

            `
        )
    }
    callBack(){
        
       
    }
}
customElements.define('nd-setores',Setores);