import {Creator} from '../../dist/nerdcreator';
import {NdPost} from '../../dist/nerdhttp';
import {MInput} from '../../components/m-forms';
import {MRow} from '../../components/m-row';
import {FabForm} from '../common/fab-form';
import {MHeader} from '../../components/m-header';

export class AddComites extends Creator{

    render(){
        return(
            `
            <div>
            <m-header h="3">Cadastro de Comitês</m-header>
            <m-row>
                <m-input col="s8" id="comite">Comitê</m-input>
            </m-row>
            <fab-form url-cancel="#/comites" component="nd-comites"></fab-form>
            </div>

            `
        )
    }
    callBack(){
        const save=this.querySelector('#save');
        const setor=this.querySelector('#comite');
        
        



        const formdata=new FormData();

       

        save.addEventListener('click',()=>{
            formdata.append('comite',comtie.value);
          
            
            
          
            const ndpost=new NdPost('http://localhost/ggnomotor/modules/comites/services/Insert.php',formdata);
            ndpost.show();
            
        })
    }

}
customElements.define('add-comites',AddComites);