import {Creator} from '../../dist/nerdcreator';
import {NdPost,NdFormData} from '../../dist/nerdhttp';


import {MRow} from '../../components/m-row';
import {MForms} from '../../components/m-forms';
import {MHeader} from '../../components/m-header';
import {MCardPanel} from '../../components/m-cards';
import FabForm from '../common/fab-form';



export class AddUsuarios extends Creator{

    render(){
        return(
            `
            <div>
            <m-row>
                <m-header h="3">Adicionar Usuário</m-header>
            </m-row>
            <m-row>
                <m-input col="s8" id="chave">Chave</m-input>
            </m-row>
            <m-row>
              <m-input col="s8" id="nome">Nome</m-input>
             </m-row>
             <m-row>
              <m-input col="s8" id="senha" type="password">Senha</m-input>
             </m-row>
             <m-row>
              <m-input col="s8" id="resenha" type="password">Redigite a Senha</m-input>
             </m-row>
             <m-row>
             <m-input col="s8" id="email" type="email"  >Email</m-input>
            </m-row>
            <fab-form url-cancel="#/usuarios" component="nd-usuarios"></fab-form>
            </div>
            `
        )
    }
    callBack(){
        const save=this.querySelector('#save');
        
       
        

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
                id:'senha',
                name:'senha'
            },
            {
                id:'email',
                name:'email'
            }
        ]

      


        save.addEventListener('click',()=>{
           
            const data=new NdFormData();


            const mydata=data.push(db);

           
          
            const ndpost=new NdPost('http://localhost/ggnomotor/modules/usuarios/services/Insert.php',mydata);
            ndpost.show();

          
            alert('Salvo com sucesso');
            const host=window.location.pathname;
            const url='http://localhost'+host+'#/usuarios';
  
            console.log(url);
  
            window.location.assign(url);
           window.location.reload();

            
            


        })
    }
}
customElements.define('add-usuarios',AddUsuarios);