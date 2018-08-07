import {Creator} from '../../dist/nerdcreator';
import {NdPost} from '../../dist/nerdhttp';

import {MInput,MArea,MFile} from '../../components/m-forms';
import {MRow} from '../../components/m-row';
import {FabForm} from '../common/fab-form';
import {MHeader} from '../../components/m-header';


export class AddIndicadores extends Creator{

    render(){
        return(
            `
            <div>
            <m-header h="3">Cadastro de Indicadores</m-header>
            <m-row>
                <m-input col="s8" id="titulo">Título</m-input>
            </m-row>
           
            <m-row>
                <m-area col="s8" label="descricao" id="descricao"></m-area>
            </m-row>
            <m-row>
                <m-input col="s4" id="mes" type="number">Mês</m-input>
            </m-row>
            <m-row>
                <m-input col="s4" id="ano" type="number">Ano</m-input>
            </m-row>
            <m-row>
               <m-file id="arquivo">Arquivo</m-file>
                
            </m-row>
            <fab-form url-cancel="#/indicadores" component="nd-indicadores"></fab-form>
            </div>

            `
        )
    }
    callBack(){

        const save=this.querySelector('#save');
        const titulo=this.querySelector('#titulo');
        const descricao=this.querySelector('#descricao');
        const mes=this.querySelector('#mes');
        const ano=this.querySelector('#ano');
        const arquivo=this.querySelector('#arquivo');

       

        const formdata=new FormData();

       

        save.addEventListener('click',()=>{
            formdata.append('titulo',titulo.value);
            formdata.append('descricao',descricao.value);
            formdata.append('mes',mes.value);
            formdata.append('ano',ano.value);
            formdata.append('arquivo',arquivo.value);
            const ndpost=new NdPost('http://localhost/ggnomotor/modules/indicadores/services/Insert.php',formdata);
            ndpost.show();
            
        })
    }

}
customElements.define('add-indicadores',AddIndicadores);