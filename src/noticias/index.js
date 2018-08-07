import {Creator} from '../../dist/nerdcreator';

import MHeader from '../../components/m-header';
import TbNoticias from './tableview';
import Fab from '../common/fab';

export class Noticias extends Creator{

    render(){
        return(
            `<div>
                <m-header h="2">Notícias</m-header>
                <tb-noticias></tb-noticias>
                <nd-fab add="add-noticias"></nd-fab>

            </div>

            `
        )
    }
    callBack(){
        
       
    }
}
customElements.define('nd-noticias',Noticias);