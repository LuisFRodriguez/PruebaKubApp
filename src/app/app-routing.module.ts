import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/guards/auth.guard';
import { ErrorComponent } from './shared/error/error.component';

const routes: Routes = [
  {
    path:'auth',
    loadChildren: () => import ('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path:'dashboard',
    loadChildren: () => import ('./protected/protected.module').then(m => m.ProtectedModule),
    canActivate: [AuthGuard],
    canLoad: [AuthGuard]
  },
  {
    path:'**',
    component:ErrorComponent
  },
  {
    path: '404',
    component:ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
