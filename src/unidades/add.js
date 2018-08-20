import {Creator} from '../../dist/nerdcreator';
import {NdPost,NdFormData} from '../../dist/nerdhttp';
import {MInput} from '../../components/m-forms';
import {MRow} from '../../components/m-row';
import {FabForm} from '../common/fab-form';
import {MHeader} from '../../components/m-header';

import {PathName} from '../common/pathname';

export class AddUnidades extends Creator{

    render(){
        return(
            `
            <div>
            <m-header h="3">Cadastro de Unidades</m-header>
            <m-row>
                <m-input col="s8" id="unidade">Unidades</m-input>
            </m-row>
            <fab-form url-cancel="#/unidades" component="nd-unidades"></fab-form>
            </div>

            `
        )
    }
    callBack(){
        const save=this.querySelector('#save');
        const setor=this.querySelector('#unidade');
        
        

        const db=[{
            id:'unidade',
            name:'unidade'
        }]

        //const formdata=new FormData();

        

        save.addEventListener('click',()=>{

            const formdata=new NdFormData(db)
                   
            const ndpost=new NdPost(HOST+'ggnomotor/modules/unidades/services/Insert.php',formdata);
            ndpost.show();
            alert('Salvo com Sucesso !');

            const path=new PathName('#/unidades','nd-unidades');

            
        })
    }

}
customElements.define('add-unidades',AddUnidades);