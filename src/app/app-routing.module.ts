import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'


const routes: Routes = [
  {
    path: '',
    redirectTo: 'exemplos',
    pathMatch: 'full',
  },
  {
    path: 'exemplos',
    loadChildren: () => import('./pages/exemplos/exemplos.module').then((m) => m.ExemplosModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./pages/auth/auth.module').then((m) => m.AuthModule)
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
