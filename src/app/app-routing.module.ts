import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersModule } from './users/users.module';

const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    redirectTo:'/users/list',
  },
  {
    path:'users',
    loadChildren:()=>import('./users/users.module').then(m => UsersModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
