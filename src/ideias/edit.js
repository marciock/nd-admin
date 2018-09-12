import {Creator} from '../../dist/nerdcreator';
import {NdPost,NdFormData,NdGet} from '../../dist/nerdhttp';

import {MInput,MArea,MFile} from '../../components/m-forms';
import {MRow} from '../../components/m-row';
import {FabForm} from '../common/fab-form';
import {MHeader} from '../../components/m-header';

import {PathName} from '../common/pathname';


export class EditIdeias extends Creator{

    render(){
       const id=this.state.envia();
       const endereco=`${HOST}ggnomotor/modules/ideias/services/Search.php?id=${id}`;
          const ndGet=new NdGet(endereco);
          const data=ndGet.show();

       
        return(
            `
            <div>
            <m-header h="3">Ideias</m-header>
            ${
                data.map((f)=>{
                    return (
                        `
                    <m-row>
                     <m-input col="s8" id="chave" edit="${f.chave}" >Chave</m-input>
                    </m-row>
                    
                    <m-row>
                       <m-input col="s8" id="nome" edit="${f.nome}">Nome Completo</m-input>
                    </m-row>
                    <m-row>
                        <m-input col="s3" id="titulo" edit="${f.titulo}">Título</m-input>
                    </m-row> 
                    
                    
                    <m-row>
                        <m-area col="s8" label="Descrição" id="descricao" edit="${f.descricao}"></m-area>
                     </m-row>
                     <m-row>
                      <m-input col="s3" id="data" type="date" edit="${f.data}">Data de Criação</m-input>
                     </m-row> 

                    `)
                })
            }

            
            
            
            <fab-form url-cancel="#/ideias" component="nd-ideias"></fab-form>
            </div>

            `
        )
    }
    callBack(){

        const save=this.querySelector('#save');
        


        const labels=document.querySelectorAll('label');
        labels.forEach((f)=>{
            f.classList.add('active');
        })
        
        const id=this.state.envia();



        const db=[
            {
                id:'chave',
                name:'chave'
            },
            {
                id:'nome',
                name:'nome'
            },
            {
                id:'titulo',
                name:'titulo'
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


            let mydata=data.push(db);
            const myid=this.state.envia();
            mydata.append('id',myid);

            
          
            const ndpost=new NdPost(HOST+'ggnomotor/modules/ideias/services/Update.php',mydata);
           ndpost.show();

           const path=new PathName('#ideias','nd-ideias');
               
           alert('Salvo com sucesso');
           /* 
            const host=window.location.pathname;
            const url='http://localhost'+host+'#/usuarios';
  
            console.log(url);
  
            window.location.assign(url);
           window.location.reload();
           */
            
        })
    }

}
customElements.define('edit-ideias',EditIdeias);