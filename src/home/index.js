import {Creator} from '../../dist/nerdcreator';
import {NdGet,NdSession} from '../../dist/nerdhttp';
import {NdLink} from   '../../dist/nerdrouter';
import {NdOrderBind} from '../../dist/nerdbinds';

import Icon from './icon';
import {MRow} from '../../components/m-row';
import Login from '../login/index';

export class Home extends Creator{

   render(){
    const nds=new NdSession();
    const userId=nds.get('userID');
    const ndGet=new NdGet(`http://localhost/ggnomotor/modules/privilegios/services/Lista.php?id=${userId}`);

    const db=ndGet.show();
    const menuDB=new NdOrderBind(db);

    const menu=menuDB.filter('title');
    
    if(menu===0){
        const login=document.createElement('nd-login');

        const view=document.querySelector('nd-view');

        view.innerHTML=null;
        view.appendChild(login);
    }

    return(
         
        ` <m-row>
                ${
                    menu.map((f)=>{
                        return `<nd-icon title=${f.title} src=${f.icon} url="#${f.url}" component="${f.component}"></nd-icon>`
                        

                    }).join('')
                }

            <m-row> `       
    )

   }
        
    

}
customElements.define('nd-home',Home);


/*
const icons=[
            {
                src:'./icons/usuarios.svg',
                title:'Usuários',
                url:'#/usuarios',
                component:'nd-usuarios'
            },
            {
                src:'./icons/comites.svg', // nd-view.innerHTML=null;
                title:'Comitês',
                url:'#/comites',
                component:'nd-comites'
            },
            {
                src:'./icons/noticias.svg',
                title:'Noticias',
                url:'#/noticias',
                component:'nd-noticias'
            },
            {
                src:'./icons/reunioes.svg',
                title:'Reuniões Comitês',
                url:'#/reunioes',
                component:'nd-reunioes'
            },
            {
                src:'./icons/agenda_gerente.svg',
                title:'Agenda GGNO',
                url:'#/agenda',
                component:'nd-agenda'
            },
            {
                src:'./icons/indicadores.svg',
                title:'Indicadores',
                url:'#/indicadores',
                component:'nd-indicadores'
            },
            {
                src:'./icons/documentos.svg',
                title:'Documentos',
                url:'#/documentos',
                component:'nd-documentos'
            },
            {
                src:'./icons/ideias.svg',
                title:'Ideias',
                url:'#/ideias',
                component:'nd-ideias'
            },
            {
                src:'./icons/notas.svg',
                title:'Unidades',
                url:'#/unidades',
                component:'nd-unidades'
            },
            {
                src:'./icons/local.svg',
                title:'Locais',
                url:'#/locais',
                component:'nd-locais'
            },
           {
                src:'./icons/setores.svg',
                title:'Setores',
                url:'#/setores',
                component:'nd-setores'
            },
            


        ]
        */