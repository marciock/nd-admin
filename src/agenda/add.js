import {Creator} from '../../dist/nerdcreator';
import {NdPost,NdFormData} from '../../dist/nerdhttp';

import {MInput,MArea,MFile} from '../../components/m-forms';
import {MRow} from '../../components/m-row';
import {FabForm} from '../common/fab-form';
import {MHeader} from '../../components/m-header';

import SelectLocal from '../common/select-local';


export class AddAgenda extends Creator{

    render(){
        return(
            `
            <div>
            <m-header h="3">Agendamento GGNO</m-header>
            <m-row>
                <m-input col="s8" id="assunto">Assunto</m-input>
            </m-row>
            
            <m-row>
             <m-input col="s8" id="local">Local</m-input>
            </m-row>
            <m-row>
                <m-input col="s3" id="data" type="date">Data</m-input>
            </m-row> 
            <m-row>
                <m-input col="s3" id="inicio" type="time">Hora Inicial</m-input>
            </m-row>
            <m-row>
                <m-input col="s3" id="termino" type="time">Hora Final</m-input>
            </m-row>
            <m-row>
                <m-area col="s8" label="descricao" id="descricao"></m-area>
            </m-row>
            <m-row>
                <m-area col="s8" label="participantes" id="participantes"></m-area>
             </m-row>
            
            
            <fab-form url-cancel="#/agenda" component="nd-agenda"></fab-form>
            </div>

            `
        )
    }
    callBack(){

        const save=this.querySelector('#save');
        const assunto=this.querySelector('#assunto');
        
       



        const db=[
            {
                id:'assunto',
                name:'assunto'
            },
            {
                id:'local',
                name:'local'
            },
            {
                id:'data',
                name:'data'
            },
            {
                id:'inicio',
                name:'inicio'
            },
            {
                id:'termino',
                name:'termino'
            },
            {
                id:'descricao',
                name:'descricao'
            },
            {
                id:'participantes',
                name:'participantes'
            }
        ]

       

        save.addEventListener('click',()=>{
            const data=new NdFormData();


            const mydata=data.push(db);

          
            const ndpost=new NdPost('http://localhost/ggnomotor/modules/agenda/services/Insert.php',mydata);
           ndpost.show();

                console.log('foi');

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
customElements.define('add-agenda',AddAgenda);