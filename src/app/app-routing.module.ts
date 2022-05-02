import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../app/components/home/home.component';
import { CadastroComponent } from '../app/components/cadastro/cadastro.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {path : '', component : HomeComponent },
  {path : 'cadastro', component : CadastroComponent},
  {path : 'login', component : LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
