import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { NotFoundComponent } from './index/not-found/not-found.component';
import { NetworkawarepreLoadingstrategyService } from './shared/networkawarepre-loadingstrategy.service';

const routes: Routes = [ {path:'register', component: RegisterComponent},
{path:'login', component: LoginComponent},
{path:'', redirectTo:'login', pathMatch:'full'},
{ path: 'todo',
loadChildren: () => import('./todo/todo.module').then(m => m.TodoModule), canActivate: [AuthGuard] },
{path:'**',component: NotFoundComponent},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
