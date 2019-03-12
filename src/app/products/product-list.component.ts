import { Component, OnInit } from "../../../node_modules/@angular/core";
import { IProduct } from "./product";
import { ProductService } from "./product.service";

@Component({
    templateUrl:'./product-list.component.html',
    styleUrls:['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
    pageTitle: string = "Product List";
    imageWidth: number = 50;
    imagemargin: number = 2;
    showImage: boolean = false;
    _listFilter : string;
    errorMessage : string;
    
    get listFilter():string {
        return this._listFilter;
    }
    set listFilter(value: string) {
        this._listFilter = value;
        this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter): this.products;
    }
    toggleImage(): void {
        this.showImage = !this.showImage;
    };
    filteredProducts : IProduct[];
    products : IProduct[];
    ngOnInit(): void {
        this.productService.getProducts().subscribe(
            products => {
                this.products = products;
                this.filteredProducts = this.products;
            },
            error => this.errorMessage = <any>error
        );
        
    }
    constructor(private productService: ProductService) {
        this.filteredProducts = this.products;
   
    }
    performFilter(filterBy: string): IProduct[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((product:IProduct)=> product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }
    onRatingClicked(message : string) : void {
        this.pageTitle = 'Product List' + ' ' + message;
    }
}