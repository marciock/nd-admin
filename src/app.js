import '@webcomponents/custom-elements';


import {Creator} from '../dist/nerdcreator';
import {MNavBar,MNavBarOpt} from '../components/m-navbar';
import {MContainer} from '../components/m-container';
import {MIcon} from '../components/m-icon';
import {NdLink,NdView,NerdRouter} from '../dist/nerdrouter';

import Login from './login/index';
import Home from './home/index';
import Usuarios from './usuarios/index';
import AddUsuarios from './usuarios/add';

import Comites from './comites/index';
import AddComites from './comites/add';

import Noticias from './noticias/index';
import AddNoticias from './noticias/add';

import Indicadores from './indicadores/index';
import AddIndicadores from './indicadores/add';

import Documentos from './documentos/index';
import AddDocumentos from './documentos/add';

import Reunioes from  './reunioes/index';
import AddReunioes from './reunioes/add';

import Agenda from './agenda/index';
import AddAgenda from './agenda/add';

import Unidades from './unidades/index';
import AddUnidades from './unidades/add';

import Locais from './locais/index';
import AddLocais from './locais/add';

import Setores from './setores/index';
import AddSetores from './setores/add';

export class Apps extends Creator{

  
  render(){
    
  
    return (
      `
      <m-navbar src="./icons/ggno_logo.png" logo-align="left" menu-align="right" color="black">
        <m-nav-opt url="#/"><nd-link url="/" component="nd-home"><m-icon>home</m-icon></nd-link></m-nav-opt>
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
    
    

    let ndRouter=new NerdRouter();

    ndRouter.add('usuarios','nd-usuarios');
   

    ndRouter.exec();

    const img=this.querySelector('img');

    img.style.marginLeft='2em';
  }
 

  
  }
  window.suportCustomElements="customElements" in window;
 
  customElements.define('nd-app',Apps);
  
 
      
  
  
  
  
  
  