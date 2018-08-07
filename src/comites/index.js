import {Creator} from '../../dist/nerdcreator';

import MHeader from '../../components/m-header';
import TbComites from './tableview';
import Fab from '../common/fab';

export class Comites extends Creator{

    render(){
        return(
            `<div>
                <m-header h="2">Comitês</m-header>
                <tb-comites></tb-comites>
                <nd-fab add="add-comites"></nd-fab>

            </div>

            `
        )
    }
    callBack(){
        
       
    }
}
customElements.define('nd-comites',Comites);