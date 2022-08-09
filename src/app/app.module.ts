import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { PipeModule } from './shared/pip/pipe.module';
import { KdvPipe } from './shared/pip/kdv.pipe';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './shared/pip/filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    KdvPipe,
    FilterPipe
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    PipeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
