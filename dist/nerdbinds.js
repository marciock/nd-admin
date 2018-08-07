export class NdOrderBind{

    constructor(db){
        this.db=db;
        
    }
    filter(id){

         let f=this.db.sort((a,b)=>{
            return (a[id] > b[id]) ? 1 : ((b[id] > a[id]) ? -1 : 0);
        })
        
        return f;
    }
    
}
