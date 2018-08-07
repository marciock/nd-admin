import {Creator} from '../../dist/nerdcreator';
import {NdPost} from '../../dist/nerdhttp';
import {MInput} from '../../components/m-forms';
import {MRow} from '../../components/m-row';
import {FabForm} from '../common/fab-form';
import {MHeader} from '../../components/m-header';

export class AddSetores extends Creator{

    render(){
        return(
            `
            <div>
            <m-header h="3">Cadastro de Setores</m-header>
            <m-row>
                <m-input col="s8" id="setor">Setor</m-input>
            </m-row>
            <fab-form url-cancel="#/setores" component="nd-setores"></fab-form>
            </div>

            `
        )
    }
    callBack(){
        const save=this.querySelector('#save');
        const setor=this.querySelector('#setor');
        
        



        const formdata=new FormData();

       

        save.addEventListener('click',()=>{
            formdata.append('setor',setor.value);
          
            
            
          
            const ndpost=new NdPost('http://localhost/ggnomotor/modules/setor/services/Insert.php',formdata);
            ndpost.show();
            
        })
    }
    

}
customElements.define('add-setores',AddSetores);