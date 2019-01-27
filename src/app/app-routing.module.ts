import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import {FooterComponent} from './footer/footer.component';

const routes: Routes = [
  {path : '',component:HeaderComponent},
  {path : 'header',component : HeaderComponent},
  {path : 'footer',component : FooterComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
