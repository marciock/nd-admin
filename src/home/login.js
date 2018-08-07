
import LoginModal from '../common/lofin-modal';


export class Login {

    constructor(){
        this.init();
    }
    init(){

        const login=document.createElement('login-modal');

        const child=login.children.item(0);


        child.style.display='block';
    }
}
