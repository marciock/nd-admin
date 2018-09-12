import {Creator} from '../../dist/nerdcreator';
import {NdPost,NdFormData,NdGet} from '../../dist/nerdhttp';

import {MInput,MArea,MFile} from '../../components/m-forms';
import {MRow} from '../../components/m-row';
import {FabForm} from '../common/fab-form';
import {MHeader} from '../../components/m-header';

import {PathName} from '../common/pathname';


export class EditUnidades extends Creator{

    render(){
       const id=this.state.envia();
       const endereco=`${HOST}ggnomotor/modules/unidades/services/Search.php?id=${id}`;
          const ndGet=new NdGet(endereco);
          const data=ndGet.show();

       
        return(
            `
            <div>
            <m-header h="3">Editar Setores</m-header>
            ${
                data.map((f)=>{
                    return (
                        `
                        <m-row>
                          <m-input col="s8" id="unidade" edit="${f.unidade}">Unidades</m-input>
                        </m-row>

                    `)
                })
            }

            
            
            
            <fab-form url-cancel="#/setores" component="nd-setores"></fab-form>
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
                id:'unidade',
                name:'unidade'
            },
            
        ]

       

        save.addEventListener('click',()=>{
            const data=new NdFormData();


            let mydata=data.push(db);

            mydata.append('id',id);

            
          
            const ndpost=new NdPost(HOST+'ggnomotor/modules/unidades/services/Update.php',mydata);
           ndpost.show();

           const path=new PathName('#/unidades','nd-unidades');
               
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
customElements.define('edit-unidades',EditUnidades);