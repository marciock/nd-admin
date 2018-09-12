import {Creator} from '../../dist/nerdcreator';
import {NdPost,NdFormData,NdGet} from '../../dist/nerdhttp';

import {MCheckBox} from '../../components/m-forms';
import {MRow} from '../../components/m-row';
import {FabForm} from '../common/fab-form';
import {MHeader} from '../../components/m-header';
import {MCol} from '../../components/m-col';

import {PathName} from '../common/pathname';


export class EditPrivilegios extends Creator{

    render(){
       const id=this.state.envia();
       const urlUser=`${HOST}ggnomotor/modules/usuarios/services/Search.php?id=${id}`;
       const endereco=`${HOST}ggnomotor/modules/privilegios/services/Privilegios.php?id=${id}`;
        const ndGetUser=new NdGet(urlUser);
          const ndGet=new NdGet(endereco);

          const dataUser=ndGetUser.show();
          const data=ndGet.show();
     
        return(
            `
            <div>
            ${
                dataUser.map((f)=>{
                    return `<m-header h="3">Privilégios de ${f.nome}</m-header>`
                })
            }
            
            <m-row>
            ${
               data.map((f)=>{
                if(f.ativo ==='1'){
                                     
                               

                    return (
                        `
                        <m-col s="4">
                            <m-checkbox type="filled-in" edit=${f.id_icon} checked  >${f.title}</m-checkbox>
                        </m-col>
                        `
                    )
                }else{
                    return (
                        `
                        <m-col s="4">
                            <m-checkbox type="filled-in" edit=${f.id_icon}  >${f.title}</m-checkbox>
                        </m-col>
                        `
                    )
                }
               }).join('')
                  
            }

            </m-row>
            
            
            <fab-form url-cancel="#/privilegios" component="nd-privilegios"></fab-form>
            </div>

            `
        )
    }
    callBack(){

        const save=this.querySelector('#save');
        const check=this.querySelectorAll('input[type=checkbox]');
       

        const labels=document.querySelectorAll('label');
        labels.forEach((f)=>{
            f.classList.add('active');
        })

        
        
        const id=this.state.envia();


        save.addEventListener('click',()=>{
           
            const data=new FormData();
           
            data.append('id_usuarios',id);

            check.forEach((f)=>{
                let myid=f.getAttribute('value');

                if(f.checked){
                 //   console.log(id);
                    data.append(myid,'1');
                }else{
                    data.append(myid,'0');
                  //  console.log(id);
                }
            })
             
                  
        
              
       
       
           const ndpost=new NdPost(HOST+'ggnomotor/modules/privilegios/services/Update.php',data);
           ndpost.show();


           const path=new PathName('#privilegios','nd-privilegios');
           alert('Privilégios Atualizados com Sucesso!');
         
            
        })
    }

}
customElements.define('edit-privilegios',EditPrivilegios);

