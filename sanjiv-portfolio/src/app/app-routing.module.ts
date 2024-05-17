import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeContainerComponent } from './UI/container/home-container/home-container.component';

const routes: Routes = [
  {
    path: "",
    component: HomeContainerComponent,
    loadChildren: () => import('./UI/pages/home/home.module').then((m) => m.HomeModule) 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
