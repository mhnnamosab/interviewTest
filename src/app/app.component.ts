import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { CategoryModel } from 'src/models/category.model';
import { ProductModel } from 'src/models/product.model';
import { DataService } from 'src/services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private dataService : DataService){}
  $products  = new Observable<ProductModel[]>();
  ngOnInit(): void {
    this.$products = this.getProducts()
  }


  getProducts(){
    return this.dataService.get().pipe(
      map(res=>{
        return this.extractProducts(res)
      })
    )
  }

  extractProducts(data : CategoryModel) : ProductModel[]{
      let arry = data.products.map(item=>({...item,count:0,isSelected:false}));
      if(data.subCategories && data.subCategories.length > 0){
        data.subCategories.forEach(item=>{
          arry = [...arry,...this.extractProducts(item)]
        })
      }
    return arry
  }


}
