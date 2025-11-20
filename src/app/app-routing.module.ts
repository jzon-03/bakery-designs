import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Bake1HomeComponent } from './bakery-template-1/components/bake-1-home/bake-1-home.component';
import { Bake2HomeComponent } from './bakery-template-2/components/bake-2-home/bake-2-home.component';
import { Bake3HomeComponent } from './bakery-template-3/components/bake-3-home/bake-3-home.component';

const routes: Routes = [
  {
    path: '', redirectTo: '/bakery-template-1', pathMatch: 'full'
  },
  {
    path:'bakery-template-1', component: Bake1HomeComponent
  },
  {
    path:'bakery-template-2', component: Bake2HomeComponent
  },
  {
    path:'bakery-template-3', component: Bake3HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
