import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ProductComponent } from './product/product.component';
// import { LoginComponent } from './login/login.component';
// import{PagnotfoundComponent} from '';
import { LaptopComponent } from './product/laptop/laptop.component';
import { TVComponent } from './product/tv/tv.component';
import { MobileComponent } from './product/mobile/mobile.component';
import { WashingmachineComponent } from './product/washingmachine/washingmachine.component';

import { PostComponent } from './post/post.component';
import { PostlistComponent } from './postlist/postlist.component';
import { PostdetailsComponent } from './postdetails/postdetails.component';
import { AuthGuard } from './auth.guard';
import { PipeComponent } from './pipe/pipe.component';
import { LoginCartComponent } from './login-cart/login-cart.component';
import { HomepageComponent } from './homepage/homepage.component';
import { CartComponent } from './cart/cart.component';
import { HeaderComponent } from './header/header.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskFormComponent } from './task-form/task-form.component';

// const routes: Routes = [
//   { path: '', redirectTo: 'login', pathMatch: 'full' }, // localhost:4200
//   // { path: 'login', component: LoginComponent },
//   { path: 'product', canActivate: [AuthGuard], loadChildren: './product/products.module#ProductsModule' },
//   { path: 'about-us', component: AboutusComponent }, // localhost:4200/about-us
//   { path: 'contact-us', component: ContactusComponent },

//   //this is for main single rout outlet  
//   // { path: 'product', children: [ 
//   //   { path: '', component: ProductComponent},
//   //   {path : 'laptop', component: LaptopComponent},
//   //   {path: 'tv', component: TVComponent},
//   //   {path: 'mobile', component: MobileComponent},
//   //   {path: 'washingmachine', component: WashingmachineComponent}
//   // ]},
//   {
//     path: 'product', component: ProductComponent, children: [
//       { path: '', component: ProductComponent },
//       { path: 'laptop', component: LaptopComponent },
//       { path: 'tv', component: TVComponent },
//       { path: 'mobile', component: MobileComponent },
//       { path: 'washingmachine', component: WashingmachineComponent }
//     ]
//   },
//   { path: 'posts', component: PostlistComponent },
//   { path: 'postdetails/:id', component: PostdetailsComponent },
//   {path:'pipe',component:PipeComponent}
//   // { path: '**', component: PagnotfoundComponent}
// ];

// const router:Routes=[
//   {path:'',redirectTo:'login-cart',pathMatch:'full'},
//   {path:'login-cart', component:LoginCartComponent},
// {path:'homepage',component:HomepageComponent},
// {path:'cart',component:CartComponent}
// ]


const routes: Routes = [
  // { path: '', component: HeaderComponent },
  // { path: 'taskForm', component: TaskFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  // imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor() {
    console.log('app routing module called')
  }
}
