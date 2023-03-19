import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { HighlightPipe } from './highlight.pipe';
import { UserloansComponent } from './userloans/userloans.component';
import { HomeComponent } from './home/home.component';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import { ProductComponent } from './product/product.component';
import { SearchComponent } from './search/search.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { GuardtestingComponent } from './guardtesting/guardtesting.component';
import { AddClientComponent } from './guardtesting/add-client/add-client.component';
@NgModule({
  declarations: [
    AppComponent,
    HighlightPipe,
    UserloansComponent,
    HomeComponent,
    ProductComponent,
    SearchComponent,
    PageNotFoundComponent,
    GuardtestingComponent,
    AddClientComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  providers: [{provide:LocationStrategy, useClass:HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
