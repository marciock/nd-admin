import {Creator} from '../../dist/nerdcreator';
import {NdGet} from '../../dist/nerdhttp';
import {NdLink} from '../../dist/nerdrouter';
import Icon from './icon';
import {MRow} from '../../components/m-row';


export class Home extends Creator{

    render(){
        const ndGet=new ndGet

        this.setState('userId',this.getProps('user-id'));
        this.setState('userName',this.getProps('user-name'));
        this.setState('userKey',this.getProps('user-key'));
        
        
        return(
            `        
                <m-row>
                    ${
                        icons.map((f)=>{
                        return `<nd-link url="${f.url}" component="${f.component}"><nd-icon src="${f.src}" title="${f.title}" ></nd-icon></nd-link> ` 
                        }).join('')
                    }

                </m-row>
            
            `
        )
    }
    callBack(){

        const login=new Login();

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