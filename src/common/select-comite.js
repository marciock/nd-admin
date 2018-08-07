import {Creator} from '../../dist/nerdcreator';
import {NdGet} from '../../dist/nerdhttp';
import {MSelect} from '../../components/m-forms';

export class SelecComite extends Creator{

    render(){
        const ndget=new NdGet('http://localhost/ggnomotor/modules/comites/services/Lista.php');
        const db=ndget.show();
        return(
            `
                <m-select col="s8">
                <option disabled selected>Comitê</option>
                    ${
                        db.map((f)=>{
                        return `<option value=${f.id_comite}>${f.comite}</option>`
                        })
                    }
                </m-select>
            `
        )
    }
    callBack(){

        const select=this.querySelector('m-select');

        this.addEventListener('change',()=>{
            this.value=select.value;
            console.log(this.value );
        })
    }
}
customElements.define('select-comite',SelecComite);