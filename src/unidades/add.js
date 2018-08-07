import {Creator} from '../../dist/nerdcreator';
import {NdPost,NdFormData} from '../../dist/nerdhttp';
import {MInput} from '../../components/m-forms';
import {MRow} from '../../components/m-row';
import {FabForm} from '../common/fab-form';
import {MHeader} from '../../components/m-header';

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

        const formdata=new NdFormData(db)

        save.addEventListener('click',()=>{
          //  formdata.append('unidade',unidade.value);
          
            
            
          
            const ndpost=new NdPost('http://localhost/ggnomotor/modules/unidades/services/Insert.php',formdata);
            ndpost.show();

            
            alert('Salvo com sucesso');
            const host=window.location.pathname;
            const url=`http://localhost${host}#/unidades`;
  
            console.log(host);
  
            window.location.assign(url);
           window.location.reload();
            
        })
    }

}
customElements.define('add-unidades',AddUnidades);