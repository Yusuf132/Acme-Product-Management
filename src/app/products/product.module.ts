import { NgModule } from '@angular/core';

import { ProductDetailComponent } from './product-detail.component';
import { ProductListComponent } from './product-list.component';

import { ConvertSpacesToPipe } from '../shared/convert-to-space-pipe';

import { RouterModule } from '../../../node_modules/@angular/router';
import { ProductDetailGuard } from './product-detail.guard';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ProductDetailComponent,
    ProductListComponent,
  
    ConvertSpacesToPipe
  ],
  imports: [
    
    
    RouterModule.forChild([
      { path:'products', component:ProductListComponent},
      { path:'products/:id', canActivate: [ProductDetailGuard],component:ProductDetailComponent},
    ]),
    SharedModule
  ]
})
export class ProductModule { }
