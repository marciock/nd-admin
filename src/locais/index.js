import {Creator} from '../../dist/nerdcreator';

import MHeader from '../../components/m-header';
import TbUnidades from './tableview';
import Fab from '../common/fab';

export class Locais extends Creator{

    render(){
        return(
            `<div>
                <m-header h="2">Locais</m-header>
                <tb-locais></tb-locais>
                <nd-fab add="add-locais"></nd-fab>

            </div>

            `
        )
    }
    callBack(){
        
       
    }
}
customElements.define('nd-locais',Locais);