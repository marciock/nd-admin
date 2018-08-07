import {Creator} from '../../dist/nerdcreator';
import {NdPost} from '../../dist/nerdhttp';
import {MInput} from '../../components/m-forms';
import {MRow} from '../../components/m-row';
import {FabForm} from '../common/fab-form';
import {MHeader} from '../../components/m-header';

export class AddLocais extends Creator{

    render(){
        return(
            `
            <div>
            <m-header h="3">Cadastro de Cidaddes</m-header>
            <m-row>
                <m-input col="s8" id="cidade">Cidade</m-input>
            </m-row>
            <fab-form url-cancel="#/locais" component="nd-locais"></fab-form>
            </div>

            `
        )
    }
    callBack(){
        const save=this.querySelector('#save');
        const setor=this.querySelector('#cidade');
        
        



        const formdata=new FormData();

       

        save.addEventListener('click',()=>{
            formdata.append('cidade',cidade.value);
          
            
            
          
            const ndpost=new NdPost('http://localhost/ggnomotor/modules/local/services/Insert.php',formdata);
            ndpost.show();
            
        })
    }

}
customElements.define('add-locais',AddLocais);