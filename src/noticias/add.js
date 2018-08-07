import {Creator} from '../../dist/nerdcreator';
import {NdPost} from '../../dist/nerdhttp';

import {MInput,MArea,MFile} from '../../components/m-forms';
import {MRow} from '../../components/m-row';
import {FabForm} from '../common/fab-form';
import {MHeader} from '../../components/m-header';
import SelectUnidade from '../common/select-unidade';

export class AddNoticias extends Creator{

    render(){
        return(
            `
            <div>
            <m-header h="3">Cadastro de Notícias</m-header>
            <m-row>
                <m-input col="s8" id="titulo">Título</m-input>
            </m-row>
            <m-row>
                <select-unidade id="unidade"></select-unidade>
            </m-row>
            <m-row>
                <m-input col="s8" id="resumo">Resumo</m-input>
            </m-row>
            <m-row>
                <m-area col="s8" label="descricao" id="descricao"></m-area>
            </m-row>
            <m-row>
                <m-input col="s8" id="data" type="date">Data</m-input>
            </m-row>
            <m-row>
               <m-file id="imagem">Imagem</m-file>
                
            </m-row>
            <fab-form url-cancel="#/noticias" component="nd-noticias"></fab-form>
            </div>

            `
        )
    }
    callBack(){

        const save=this.querySelector('#save');
        const titulo=this.querySelector('#titulo');
        const unidade=this.querySelector('#unidade');
        const resumo=this.querySelector('#resumo');
        const descricao=this.querySelector('#descricao');
        const data=this.querySelector('#data');
        const imagem=this.querySelector('#imagem');



        const formdata=new FormData();

       

        save.addEventListener('click',()=>{
            formdata.append('titulo',titulo.value);
            formdata.append('id_unidade',unidade.value);
            formdata.append('resumo',resumo.value);
            formdata.append('descricao',descricao.value);
            formdata.append('data',data.value);
            formdata.append('imagem',imagem.value);
            const ndpost=new NdPost('http://localhost/ggnomotor/modules/noticias/services/Insert.php',formdata);
            ndpost.show();
            
        })
    }

}
customElements.define('add-noticias',AddNoticias);