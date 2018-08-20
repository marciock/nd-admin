import {Creator} from '../../dist/nerdcreator';
import {NdPost,NdFormData} from '../../dist/nerdhttp';

import {MInput,MArea,MFile} from '../../components/m-forms';
import {MRow} from '../../components/m-row';
import {FabForm} from '../common/fab-form';
import {MHeader} from '../../components/m-header';

import SelectTipo from '../common/select-tipo';
import SelectSetor from '../common/select-setor';

import {PathName} from '../common/pathname';

export class AddDocumentos extends Creator{

    render(){
        return(
            `
            <div>
            <m-header h="3">Cadastro de Documentos</m-header>
            <m-row>
                <m-input col="s8" id="titulo">Título</m-input>
            </m-row>
          
            <m-row>
                <select-tipo id="tipo"></select-tipo>
            </m-row>
            <m-row>
                <m-area col="s8" label="descricao" id="descricao"></m-area>
            </m-row>
            
            <m-row>
               <m-file id="arquivo">Arquivo</m-file>
                
            </m-row>
            <fab-form url-cancel="#/documentos" component="nd-documentos"></fab-form>
            </div>

            `
        )
    }
    callBack(){

        const save=this.querySelector('#save');
        

       
        const db=[
            {
                id:'titulo',
                name:'titulo'
            },
            {
                id:'tipo',
                name:'tipo'
            },
            {
                id:'descricao',
                name:'descricao'
            },
            {
                id:'arquivo',
                name:'arquivo'
            }
        ]
        

       

        save.addEventListener('click',()=>{
            const data=new NdFormData();


            const mydata=data.push(db);
            const ndpost=new NdPost(HOST+'ggnomotor/modules/documentos/services/Insert.php',mydata);
            ndpost.show();
            
            alert('Salvo com sucesso');
            const path=new PathName('#/documentos','nd-documentos');

            
        })
    }

}
customElements.define('add-documentos',AddDocumentos);