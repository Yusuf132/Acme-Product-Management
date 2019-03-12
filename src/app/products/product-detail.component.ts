import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from './product.service';
@Component({
  selector: 'pm-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle: string = "Product Detail";
  product: IProduct;

  constructor(private route: ActivatedRoute, private router: Router, private productService :ProductService) { }

  ngOnInit() {
    // + converts the string to numeric
    
    
    const param = this.route.snapshot.paramMap.get('id');
    if (param) {
        const id = +param;
        this.getProduct(id);
      }
    }

    getProduct(id: number) {
      this.productService.getProduct(id).subscribe(
        product => this.product = product
      );
        
    }

    
    onBack() : void {
      this.router.navigate(['/products']);
    }
}