import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MasterviewComponent } from './masterview/masterview.component';
import { FooterComponent } from './footer/footer.component';
import { ProductListComponent } from './masterview/product-list/product-list.component';
import { ProductDetailComponent } from './masterview/product-detail/product-detail.component';
import { ProductItemComponent } from './masterview/product-list/product-item/product-item.component';
import { CartComponent } from './masterview/cart/cart.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes =[
  {path: '' , component : ProductListComponent},
  {path: 'cart' , component : CartComponent},
  {path: 'products' , component : ProductListComponent}
]



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MasterviewComponent,
    FooterComponent,
    ProductListComponent,
    ProductDetailComponent,
    ProductItemComponent,
    CartComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
