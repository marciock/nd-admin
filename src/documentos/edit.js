import {Creator} from '../../dist/nerdcreator';
import {NdPost,NdFormData,NdGet} from '../../dist/nerdhttp';

import {MInput,MArea,MFile} from '../../components/m-forms';
import {MRow} from '../../components/m-row';
import {FabForm} from '../common/fab-form';
import {MHeader} from '../../components/m-header';

import {PathName} from '../common/pathname';


export class EditDocumentos extends Creator{

    render(){
       const id=this.state.envia();
       const endereco=`${HOST}ggnomotor/modules/documentos/services/Search.php?id=${id}`;
          const ndGet=new NdGet(endereco);
          const data=ndGet.show();

       
        return(
            `
            <div>
            <m-header h="3">Editar Documentos GGNO</m-header>
            ${
                data.map((f)=>{
                    return (
                        `
                        <m-row>
                        <m-input col="s8" id="titulo" edit="${f.titulo}">Título</m-input>
                    </m-row>
                  
                    <m-row>
                        <select-tipo id="tipo" edit="${f.id_tipo}" content="${f.tipo}"></select-tipo>
                    </m-row>
                    <m-row>
                        <m-area col="s8" label="descricao" id="descricao" edit="${f.descricao}"></m-area>
                    </m-row>
                    <m-row>
                      <m-input col="s8" id="old" edit="${f.arquivo}">Título</m-input>
                   </m-row>
                    
                    
                    <m-row>
                       <m-file id="arquivo" >Escolha Novo Arquivo</m-file>
                        
                    </m-row>

                    `)
                })
            }

            
            
            
            <fab-form url-cancel="#/documentos" component="nd-documentos"></fab-form>
            </div>

            `
        )
    }
    callBack(){

        const save=this.querySelector('#save');
        const assunto=this.querySelector('#assunto');
        const arquivo=this.querySelector('#arquivo');

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
                id:'tipo',
                name:'tipo'
            },
            {
                id:'old',
                name:'old'
            },
            {
                id:'descricao',
                name:'descricao'
            },
           
        ]
        

       

        save.addEventListener('click',()=>{
            const data=new NdFormData();


            let mydata=data.push(db);

            mydata.append('id',id);
            if(arquivo.value !==null){
                mydata.append('arquivo',arquivo.value);
            }


            
          
            const ndpost=new NdPost(HOST+'ggnomotor/modules/documentos/services/Update.php',mydata);
           ndpost.show();

           const path=new PathName('#documentos','nd-documentos');
               
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
customElements.define('edit-documentos',EditDocumentos);