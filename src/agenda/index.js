import {Creator} from '../../dist/nerdcreator';

import MHeader from '../../components/m-header';
import TbAgenda from './tableview';
import Fab from '../common/fab';

export class Agenda extends Creator{

    render(){
        return(
            `<div>
                <m-header h="2">Agenda GGNO</m-header>
                <tb-agenda></tb-agenda>
                <nd-fab add="add-agenda"></nd-fab>

            </div>

            `
        )
    }
    callBack(){
        
       
    }
}
customElements.define('nd-agenda',Agenda);