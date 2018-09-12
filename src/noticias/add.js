import {Creator} from '../../dist/nerdcreator';
import {NdPost,NdFormData} from '../../dist/nerdhttp';

import {MInput,MArea,MFile} from '../../components/m-forms';
import {MRow} from '../../components/m-row';
import {FabForm} from '../common/fab-form';
import {MHeader} from '../../components/m-header';
import {SelectUnidade} from '../common/select-unidade';

import {PathName} from '../common/pathname';

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
                <select-unidade id="unidade" content="Escolha a Unidade"></select-unidade>
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
            <m-file id="imagem1">Imagem</m-file>
         </m-row>
         <m-row>
            <m-file id="imagem2">Imagem</m-file>
         </m-row>
         <m-row>
            <m-file id="imagem3">Imagem</m-file>
         </m-row>
         <m-row>
            <m-file id="imagem4">Imagem</m-file>
         </m-row>
         <m-row>
            <m-file id="imagem5">Imagem</m-file>
         </m-row>
                
            
            <fab-form url-cancel="#/noticias" component="nd-noticias"></fab-form>
            </div>

            `
        )
    }
    callBack(){

        const save=this.querySelector('#save');

        const images=this.querySelectorAll('m-file');
       
        const db=[
            {
                id:'titulo',
                name:'titulo'
            },
            {
                id:'unidade',
                name:'unidade'
            },
            {
                id:'resumo',
                name:'resumo'
            },
            {
                id:'descricao',
                name:'descricao'
            },
            {
                id:'data',
                name:'data'
            }
           
            
        ]



        save.addEventListener('click',()=>{
            
            const data=new NdFormData();

            const mydata=data.push(db);
            
            images.forEach((f)=>{
                if(f !==null){
                    mydata.append(f.id,f.value);
                }
            })

            const ndpost=new NdPost(HOST+'ggnomotor/modules/noticias/services/Insert.php',mydata);
           ndpost.show();

            alert('Salvo com Sucesso !');

            const path=new PathName('#/noticias','nd-noticias');
            
        })
    }

}
customElements.define('add-noticias',AddNoticias);

/*

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
               <m-file id="imagem1">Imagem</m-file>
            </m-row>
            <m-row>
               <m-file id="imagem2">Imagem</m-file>
            </m-row>
            <m-row>
               <m-file id="imagem3">Imagem</m-file>
            </m-row>
            <m-row>
               <m-file id="imagem4">Imagem</m-file>
            </m-row>
            <m-row>
               <m-file id="imagem5">Imagem</m-file>
            </m-row>
*/