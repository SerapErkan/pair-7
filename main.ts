// product 
//category
// model servis  crud  
// GetAll ,GetById ,Add ,Delete,Update
//bütün servis 
//aksiyonlar 

import { Product } from "./product";
import { Category } from "./category";


class ProductService {
    private product: Product[] = [];
    public AddProduct(product: Product) {

        this.product.push(product);

    }
    public GetAll() {
        console.log(this.product);
    }
    public GetById(id: number) {
        this.product.forEach(p => {
            if (p.id == id) {
                console.log(p);
            }

        });
    }
    public Delete(productName: string) {
        this.product = this.product.filter(p => {
            p.productName !== productName
        })
        console.log(this.product);

    }

    public Update(id:number, productName2:string, productCategory2:string, productStok2:boolean, productTotal2:number) {

        this.product.map(p => {
            if (p.id === id) {
                p.productName= productName2;
                p.productCategory =productCategory2;
                p.productStok = productStok2;
                p.productTotal = productTotal2;

            }
        })


    }


}


 class CategoryService {

    private category: Category[] = [];
    public AddCategory(category: Category) {

        this.category.push(category);

    }
    public GetAll() {
        console.log(this.category);
    }
    public GetById(id: number) {
        this.category.forEach(p => {
            if (p.id == id) {
                console.log(p);
            }

        });
    }
    public Delete(categoryName: string) {
        this.category = this.category.filter(p => {
            p.categorytName !== categoryName
        })
        console.log(this.category);

    }

    public Update(id:number,categoryName2:string,categoryTotal2:number) {
        
          this.category.map(p=>{
            if (p.id === id) {
               p.categorytName=categoryName2;
               p.categoryTotal=categoryTotal2;
            }
           
        });

          
    }


 }




 ///////////////

let productService = new ProductService();
productService.AddProduct({ id: 1, productName: "ford", productCategory: "araç", productStok: true, productTotal: 10 });
productService.GetAll();
// productService.Delete("ford");
// productService.GetAll();
productService.GetById(1);
productService.Update(1,"bmv","arac",false,56);
productService.GetAll();

let categoryService=new CategoryService();
categoryService.AddCategory({ id: 1, categorytName: "ford",categoryTotal: 10 });
categoryService.AddCategory({ id: 2, categorytName: "OPEL",categoryTotal: 10 });
categoryService.AddCategory({ id: 3, categorytName: "BMV",categoryTotal: 10 });

categoryService.GetAll();
// categoryService.Delete("ford");
categoryService.GetAll();
categoryService.Update(1,"BMVvvv",1011 );
console.log("........")
categoryService.GetAll();



