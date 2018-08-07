import {Creator} from '../../dist/nerdcreator';

import MHeader from '../../components/m-header';
import TbDocumentos from './tableview';
import Fab from '../common/fab';

export class Documentos extends Creator{

    render(){
        return(
            `<div>
                <m-header h="2">Documentos</m-header>
                <tb-documentos></tb-documentos>
                <nd-fab add="add-documentos"></nd-fab>

            </div>

            `
        )
    }
    callBack(){
        
       
    }
}
customElements.define('nd-documentos',Documentos);