import {Creator} from '../../dist/nerdcreator';

import MHeader from '../../components/m-header';
import TbIndicadores from './tableview';
import Fab from '../common/fab';

export class Indicadores extends Creator{

    render(){
        return(
            `<div>
                <m-header h="2">Indicadores</m-header>
                <tb-indicadores></tb-indicadores>
                <nd-fab add="add-indicadores"></nd-fab>

            </div>

            `
        )
    }
    callBack(){
        
       
    }
}
customElements.define('nd-indicadores',Indicadores);