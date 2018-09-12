import {Creator} from '../../dist/nerdcreator';
import {NdGet} from '../../dist/nerdhttp';
import {MSelect} from '../../components/m-forms';

export class SelecUsuarios extends Creator{

    render(){
        const ndget=new NdGet('http://localhost/ggnomotor/modules/usuarios/services/Lista.php');
        const db=ndget.show();
        return(
            `
                <m-select col="s8">
                <option disabled selected>${this.getProps('content')}</option>
                    ${
                        db.map((f)=>{
                        return `<option value=${f.id_usuarios}>${f.nome}</option>`
                        })
                    }
                </m-select>
            `
        )
    }
    callBack(){

        const select=this.querySelector('m-select');

        const edit=this.querySelector('[disabled]');

        const content=this.getProps('content');


        if(content !==null){
            edit.innerHTML=content;
        }else{
            edit.innerHTML="Escolha um Usuário";
        }

        edit.innerHTML=this.getProps('content');
        
        if(edit !==null){
            this.value=this.getProps('edit');
            edit.removeAttribute('disabled');
        }
       

       

        this.addEventListener('change',()=>{
            this.value=select.value;
            console.log(this.value );
        })
    }
}
customElements.define('select-usuarios',SelecUsuarios);