import '@webcomponents/custom-elements';

import {NdSession} from '../dist/nerdhttp';
import {Creator} from '../dist/nerdcreator';
import {MNavBar,MNavBarOpt} from '../components/m-navbar';
import {MContainer} from '../components/m-container';
//import {MIcon} from '../components/m-icon';
import {NdLink,NdView,NerdRouter} from '../dist/nerdrouter';

import Login from './login/index';
import Home from './home/index';

import Usuarios from './usuarios/index';
import AddUsuarios from './usuarios/add';
import EditUsuarios from './usuarios/edit';

import Comites from './comites/index';
/*iimport AddComites from './comites/add';
import EditComites from './comites/edit';*/

import Noticias from './noticias/index';
import AddNoticias from './noticias/add';
import EditNoticias from './noticias/edit';

import Indicadores from './indicadores/index';
import AddIndicadores from './indicadores/add';
import EditIndicadores from './indicadores/edit';

import Documentos from './documentos/index';
import AddDocumentos from './documentos/add';
import EditDocumentos from './documentos/edit';

/*import Reunioes from  './reunioes/index';
import AddReunioes from './reunioes/add';
import EditReunioes from './reunioes/edit';*/

import Agenda from './agenda/index';
import AddAgenda from './agenda/add';
import EditAgenda from './agenda/edit';

import Unidades from './unidades/index';
import AddUnidades from './unidades/add';
import EditUnidades from './unidades/edit';

import Ideias from './ideias/index';
import EditIdeias from './ideias/edit';

import Privilegios from './privilegios/index';
import EditPrivilegios from './privilegios/edit';

export class Apps extends Creator{

  
  render(){
   
  
    return (
      `
      <m-navbar src="./icons/ggno_logo.png" logo-align="left" menu-align="right" color="black">
        <m-nav-opt id="log"></m-nav-opt>
      </m-navbar>
      <m-container>
      <div style="margin-top:5em;">
        <nd-view>
          
            <nd-login></nd-login>
        </nd-view>
      </div>    
      </m-container>`
    )
  }
  callBack(){
    
    const log=this.querySelector('#log');
     
      let logout=`<nd-link url="#/" component="nd-login">Sair</nd-link>`;

      log.innerHTML=logout;
    
      
    let ndRouter=new NerdRouter();

    ndRouter.add('documentos','nd-documentos');
    ndRouter.add('comites','nd-comites');
    ndRouter.add('comites','nd-comites');
    ndRouter.add('indicadores','nd-indicadores');
    ndRouter.add('noticias','nd-noticiass');
    ndRouter.add('reunioes','nd-reunioes');
    ndRouter.add('ideias','nd-ideias');
    ndRouter.add('home','nd-home');
    ndRouter.add('/','nd-login');
   

    ndRouter.exec();

    const img=this.querySelector('img');

    img.style.marginLeft='2em';
    img.style.width='10%';
    img.style.height='10%';
   
  }
 

  
  }
  window.suportCustomElements="customElements" in window;
 
  customElements.define('nd-app',Apps);
  
 
      
  
  
  
  
  
  