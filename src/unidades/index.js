import {Creator} from '../../dist/nerdcreator';

import MHeader from '../../components/m-header';
import TbUnidades from './tableview';
import Fab from '../common/fab';

export class Unidades extends Creator{

    render(){
        return(
            `<div>
                <m-header h="2">Unidades</m-header>
                <tb-unidades></tb-unidades>
                <nd-fab add="add-unidades"></nd-fab>

            </div>

            `
        )
    }
    callBack(){
        
       
    }
}
customElements.define('nd-unidades',Unidades);