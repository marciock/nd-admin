import {Creator} from '../../dist/nerdcreator';
import {NdPost} from '../../dist/nerdhttp';

import {MInput,MArea,MFile} from '../../components/m-forms';
import {MRow} from '../../components/m-row';
import {FabForm} from '../common/fab-form';
import {MHeader} from '../../components/m-header';

import SelectTipo from '../common/select-tipo';
import SelectSetor from '../common/select-setor';

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
                <select-setor id="setor"></select-setor>
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
        const titulo=this.querySelector('#titulo');
        const descricao=this.querySelector('#descricao');
        const setor=this.querySelector('#setor');
        const tipo=this.querySelector('#tipo');
        const arquivo=this.querySelector('#arquivo');

       

        const formdata=new FormData();

       

        save.addEventListener('click',()=>{
            formdata.append('titulo',titulo.value);
            formdata.append('descricao',descricao.value);
            formdata.append('id_setor',setor.value);
            formdata.append('id_tipo',tipo.value);
            formdata.append('arquivo',arquivo.value);
            const ndpost=new NdPost('http://localhost/ggnomotor/modules/documentos/services/Insert.php',formdata);
            ndpost.show();
            
        })
    }

}
customElements.define('add-documentos',AddDocumentos);