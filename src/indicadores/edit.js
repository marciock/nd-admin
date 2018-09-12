import {Creator} from '../../dist/nerdcreator';
import {NdPost,NdFormData,NdGet} from '../../dist/nerdhttp';

import {MInput,MArea,MFile} from '../../components/m-forms';
import {MRow} from '../../components/m-row';
import {FabForm} from '../common/fab-form';
import {MHeader} from '../../components/m-header';

import {PathName} from '../common/pathname';


export class EditIndicadores extends Creator{

    render(){
       const id=this.state.envia();
       const endereco=`${HOST}ggnomotor/modules/indicadores/services/Search.php?id=${id}`;
          const ndGet=new NdGet(endereco);
          const data=ndGet.show();

       
        return(
            `
            <div>
            <m-header h="3">Editar Indicadores</m-header>
            ${
                data.map((f)=>{
                    return (
                        `
                        <m-header h="3">Cadastro de Indicadores</m-header>
                        <m-row>
                            <m-input col="s8" id="titulo" edit="${f.titulo}">Título</m-input>
                        </m-row>
                    
                        <m-row>
                            <m-area col="s8" label="descricao" id="descricao" edit="${f.descricao}"></m-area>
                        </m-row>
                        <m-row>
                            <m-input col="s4" id="mes" type="number" edit="${f.mes}" >Mês</m-input>
                        </m-row>
                        <m-row>
                            <m-input col="s4" id="ano" type="number" edit="${f.ano}">Ano</m-input>
                        </m-row>
                    <m-row>
                      <m-input col="s8" id="old" edit="${f.arquivo}">Arquivo</m-input>
                   </m-row>
                    
                    
                    <m-row>
                       <m-file id="arquivo" >Escolha Novo Arquivo</m-file>
                        
                    </m-row>

                    `)
                })
            }

            
            
            
            <fab-form url-cancel="#/indicadores" component="nd-indicadores"></fab-form>
            </div>

            `
        )
    }
    callBack(){

        const save=this.querySelector('#save');
      //  const assunto=this.querySelector('#assunto');
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
                id:'old',
                name:'old'
            }
            
        ]
        

       

        save.addEventListener('click',()=>{
            const data=new NdFormData();


            let mydata=data.push(db);

            mydata.append('id',id);
            if(arquivo.value !==null){
                mydata.append('arquivo',arquivo.value);
            }


            
          
            const ndpost=new NdPost(HOST+'ggnomotor/modules/indicadores/services/Update.php',mydata);
           ndpost.show();

           const path=new PathName('#indicadores','nd-indicadores');
               
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
customElements.define('edit-indicadores',EditIndicadores);