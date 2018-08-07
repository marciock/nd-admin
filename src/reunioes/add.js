import {Creator} from '../../dist/nerdcreator';
import {NdPost} from '../../dist/nerdhttp';

import {MInput,MArea,MFile} from '../../components/m-forms';
import {MRow} from '../../components/m-row';
import {FabForm} from '../common/fab-form';
import {MHeader} from '../../components/m-header';
import SelectComite from '../common/select-comite';
import SelectLocal from '../common/select-local';


export class AddReunioes extends Creator{

    render(){
        return(
            `
            <div>
            <m-header h="3">Cadastro de Reuniões</m-header>
            <m-row>
                <m-input col="s8" id="assunto">Assunto</m-input>
            </m-row>
            <m-row>
                <select-comite></select-comite>
                
            </m-row>
            <m-row>
                <select-local></select-local>
            </m-row>
            <m-row>
                <m-input col="s8" id="data" type="date">Data</m-input>
            </m-row> 
            <m-row>
                <m-input col="s8" id="inicio" type="time">Hora Inicial</m-input>
            </m-row>
            <m-row>
                <m-input col="s8" id="termino" type="time">Hora Final</m-input>
            </m-row>
            <m-row>
                <m-area col="s8" label="descricao" id="descricao"></m-area>
            </m-row>
            <m-row>
                <m-area col="s8" label="participantes" id="participantes"></m-area>
             </m-row>
            
            
            <fab-form url-cancel="#/reunioes" component="nd-reunioes"></fab-form>
            </div>

            `
        )
    }
    callBack(){

        const save=this.querySelector('#save');
        const assunto=this.querySelector('#assunto');
        const comites=this.querySelector('#comites');
        const local=this.querySelector('#local');
        const data=this.querySelector('#data');
        const inicio=this.querySelector('#inicio');
        const termino=this.querySelector('#termino');
        const descricao=this.querySelector('#descricao');
        const participantes=this.querySelector('#participantes');



        const formdata=new FormData();

       

        save.addEventListener('click',()=>{
            formdata.append('assunto',assunto.value);
            formdata.append('id_comites',comites.value);
            formdata.append('id_local',local.value);
            formdata.append('data',data.value);
            formdata.append('hora_inicial',inicio.value);
            formdata.append('hora_final',final.value);
            formdata.append('descricao',descricao.value);
            formdata.append('participantes',participantes.value);
          
            const ndpost=new NdPost('http://localhost/ggnomotor/modules/reunioes/services/Insert.php',formdata);
            ndpost.show();
            
        })
    }

}
customElements.define('add-reunioes',AddReunioes);