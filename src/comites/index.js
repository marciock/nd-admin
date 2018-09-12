import {Creator} from '../../dist/nerdcreator';

import MHeader from '../../components/m-header';

import Fab from '../common/fab';

export class Comites extends Creator{

    render(){

        window.location.href=COMITES;

        return(
            `<div>
                

            </div>

            `
        )
    }
    callBack(){
       
    }
}
customElements.define('nd-comites',Comites);