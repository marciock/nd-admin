import {Creator} from '../../dist/nerdcreator';

import MHeader from '../../components/m-header';
import TbReunioes from './tableview';
import Fab from '../common/fab';

export class Reunioes extends Creator{

    render(){
        return(
            `<div>
                <m-header h="2">Reuniões dos Comitês</m-header>
                <tb-reunioes></tb-reunioes>
                <nd-fab add="add-reunioes"></nd-fab>

            </div>

            `
        )
    }
    callBack(){
        
       
    }
}
customElements.define('nd-reunioes',Reunioes);