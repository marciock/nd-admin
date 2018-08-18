import {Creator} from '../../dist/nerdcreator';


import {MRadio} from '../../components/m-forms';

import {MFlat} from '../../components/m-flat';

import {OrderFilter,OrderNormal} from  './order';

export class TbUsuarios extends Creator{

    render(){
       
        

        return(
             `<div value="${this.getProps('value')}">
                <table class="highlight" >
                    <thead >
                        <tr>
                            <th>Selecione</th>
                            <th ><m-flat color="blue-text text-darken-4" id="btusuario"> Usuário</m-flat></th>
                            <th > <m-flat color="blue-text text-darken-4" id="btchave">Chave</m-flat></th>
                            
                            <th id="filter-emai"l><m-flat color="blue-text text-darken-4" id="btemail">email</m-flat></th>
                        </tr>
                    </thead>
                    <tbody>
                   
                        
                    </tbody>

                </table>

            
             </div>
             `
        )
    }
    callBack(){

        

        const radio=this.querySelectorAll('m-radio');
        const tbody=this.querySelector('tbody');
        const btUsuario=this.querySelector('#btusuario');
        const btChave=this.querySelector('#btchave');
       
        

        radio.forEach((f)=>{
            this.value=f.value;
        })

        const showUsuario=new OrderFilter('btusuario','nome');
        const showChave=new OrderFilter('btchave','chave');
        const showEmail=new OrderFilter('btemail','email');

        const showNormal=new OrderNormal();
  
    }
    



}
customElements.define('tb-usuarios',TbUsuarios);

