import { ProductModel } from "./product.model";

export class CategoryModel {
    name : string;
    products : ProductModel[];
    subCategories : CategoryModel[];

    constructor(){
        this.name='';
        this.products=[];
        this.subCategories=[];
    }
}