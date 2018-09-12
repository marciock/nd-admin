import {Creator} from '../../dist/nerdcreator';
import {NdPost,NdFormData,NdGet} from '../../dist/nerdhttp';

import {MInput,MArea,MFile} from '../../components/m-forms';
import {MRow} from '../../components/m-row';
import {FabForm} from '../common/fab-form';
import {MHeader} from '../../components/m-header';

import {PathName} from '../common/pathname';


export class EditNoticias extends Creator{

    render(){
       const id=this.state.envia();
       const endereco=`${HOST}ggnomotor/modules/noticias/services/Search.php?id=${id}`;
          const ndGet=new NdGet(endereco);
          const data=ndGet.show();
        console.log(id);
       
        return(
            `
            <div>
            <m-header h="3">Editar Noticias</m-header>
            ${
                data.map((f)=>{
                    return (
                        `
                        <m-row>
                        <m-input col="s8" id="titulo" edit="${f.titulo}">Título</m-input>
                    </m-row>
                    <m-row>
                        <select-unidade id="unidade" edit="${f.id_unidade}" content="${f.unidade}"></select-unidade>
                    </m-row>
                    <m-row>
                        <m-input col="s8" id="resumo" edit="${f.resumo}">Resumo</m-input>
                    </m-row>
                    <m-row>
                        <m-area col="s8" label="descricao" id="descricao" edit="${f.descricao}"></m-area>
                    </m-row>
                    <m-row>
                        <m-input col="s8" id="data" type="date" edit="${f.data}">Data</m-input>
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

                    `)
                })
            }

            
            
            
            <fab-form url-cancel="#/noticias" component="nd-noticias"></fab-form>
            </div>

            `
        )
    }
    callBack(){

        const save=this.querySelector('#save');
        const images=this.querySelectorAll('m-file');
       

        const labels=document.querySelectorAll('label');
        labels.forEach((f)=>{
            f.classList.add('active');
        })
        
        const id=this.state.envia();




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
            }
        ]
        
       
       

        save.addEventListener('click',()=>{
            const data=new NdFormData();


            let mydata=data.push(db);

            mydata.append('id',id);
            
            images.forEach((f)=>{
                if(f !==null){
                    mydata.append(f.id,f.value);
                }
            })
            


            
          
            const ndpost=new NdPost(HOST+'ggnomotor/modules/noticias/services/Update.php',mydata);
           ndpost.show();

           const path=new PathName('#noticias','nd-noticias');
               
          /*  alert('Salvo com sucesso');
            const host=window.location.pathname;
            const url='http://localhost'+host+'#/usuarios';
  
            console.log(url);
  
            window.location.assign(url);
           window.location.reload();
           */
            
        })
    }

}
customElements.define('edit-noticias',EditNoticias);