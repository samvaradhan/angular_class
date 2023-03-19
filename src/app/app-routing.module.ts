import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdminGuard } from "./admin.guard";
import { AppComponent } from "./app.component";
import { AddClientComponent } from "./guardtesting/add-client/add-client.component";
import { AdminchildGuard } from "./guardtesting/adminchild.guard";
import { GuardtestingComponent } from "./guardtesting/guardtesting.component";
import { HomeComponent } from "./home/home.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { ProductComponent } from "./product/product.component";
import { SearchComponent } from "./search/search.component";
import { UserloansComponent } from "./userloans/userloans.component";

const routes:Routes=[
  {path:'',component: AppComponent,pathMatch:'full'},
  {path:'loan',component: UserloansComponent},
  {path:'home',component: HomeComponent},
  {path:'product/:id',component:ProductComponent},
  {path: 'search',component:SearchComponent},
  {path: 'abcd',  canActivate: [AdminGuard], children: [
    {path:'',component:GuardtestingComponent},
    {path:'sun',component:AddClientComponent, canActivateChild:[AdminchildGuard]}
  ]},
  { path: 'payments', loadChildren: () => import('./payments/payments.module').then(m => m.PaymentsModule) },
  {path: '**',component:PageNotFoundComponent}
];

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }