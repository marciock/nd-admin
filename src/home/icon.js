import {Creator} from '../../dist/nerdcreator';



import {Mcol} from '../../components/m-col';


export class Icon extends Creator{

    render(){
        return(
            `<m-col s="3" style="text-align:center;">
                <img src="${this.getProps('src')}" />
                <p>${this.getProps('title')}</p>

            </m-col>
            `
        )
    }
}
customElements.define('nd-icon',Icon);