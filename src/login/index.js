import {Creator} from '../../dist/nerdcreator';
import {NdGet,NdSession,NdFormData} from '../../dist/nerdhttp';
import {NdLink} from '../../dist/nerdrouter';

import {MContainer} from  '../../components/m-container';
import {MInput} from '../../components/m-forms';
import {MRow} from  '../../components/m-row';
import {MCol} from '../../components/m-col';

import Home from '../home/index';


export class Login extends Creator{

    render(){
        return(
            `
            <m-container>
                    <div id="margin">
                       
                            <m-row>
                             <m-input id="login" col="s12" type="text">Login</m-input>
                            </m-row>
                            <m-row>
                             <m-input id="senha" col="s12" type="password">Senha</m-input>
                            </m-row>
                            <m-row>
                                <div class="col s12">
                                    <div class="center-align">
                                        <h5 class="green-text">Se ainda não é cadastrado</h5>
                                        <nd-link url="#/add" component="add-usuarios"><h4 class="green-text">Cadastre-se</h4></nd-link>
                                    <div>
                                                
                               
                               
                                     <button class="btn waves-effect waves-ligh green btn-large right" type="button" id="enviar">Entrar</button>
                                </div>
                        
                             </m-row>
                            
                       
                    </div>
            </m-container>
            `
        )
    }
    callBack(){
        const div=this.querySelector('#margin');
        const button=this.querySelector('#enviar');

        div.setAttribute('style','margin-top:30%');

        const data=[
            {
                id:'login',
                name:'login'
            },
            {
                id:'senha',
                name:'senha'
            }
        ]

        const ndData=new NdFormData();

button.addEventListener('click',()=>{
   

   let db=ndData.push(data);

   

    const ndGet=new NdGet(`${HOST}ggnomotor/modules/usuarios/services/Login.php?id=${db.get('login')}&ps=${db.get('senha')}`);

    const result=ndGet.show();

    const nds=new NdSession();
        if(result.length ===0){
            alert('Login ou Senha incorretos. Tente novamente!')
        }else{
            const view=document.querySelector('nd-view');
            const home=document.createElement('nd-home');

         

          result.map((f)=>{
         /*   home.setAttribute('user-id',f.id_usuarios);
            home.setAttribute('user-name',f.nome);
            home.setAttribute('user-key',f.chave);
        */

                
                
                nds.set('userID',f.id_usuarios);
                nds.set('userName',f.nome);
                nds.set('userKey',f.chave);
          })
            view.innerHTML=null;


            view.appendChild(home);

        }
    
})

      





    }
}

customElements.define('nd-login',Login);