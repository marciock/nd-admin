import {Creator} from '../../dist/nerdcreator';
import {NdPost,NdFormData} from '../../dist/nerdhttp';

import {MInput,MArea,MFile} from '../../components/m-forms';
import {MRow} from '../../components/m-row';
import {FabForm} from '../common/fab-form';
import {MHeader} from '../../components/m-header';

import {PathName} from '../common/pathname';

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
        

        const db=[
            {
                id:'titulo',
                name:'titulo'
            },
            {
                id:'descricao',
                name:'descricao'
            },
            {
                id:'mes',
                name:'mes'
            },
            {
                id:'ano',
                name:'ano'
            },
            {
                id:'arquivo',
                name:'arquivo'
            }
            
        ]
       

       
       

        save.addEventListener('click',()=>{
            const data=new NdFormData();


            const mydata=data.push(db);
            const ndpost=new NdPost(HOST+'ggnomotor/modules/indicadores/services/Insert.php',mydata);
            ndpost.show();
            
            alert('Salvo com Sucesso!');

            const path=new PathName('#/indicadores','nd-indicadores');

        })
    }

}
customElements.define('add-indicadores',AddIndicadores);