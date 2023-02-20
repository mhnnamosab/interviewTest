export class ProductModel {
    name : string;
    price : number;
    count : number;
    isSelected  : boolean;
    constructor(){
        this.name ='';
        this.price =0;
        this.count =0;
        this.isSelected =false;
    }
}