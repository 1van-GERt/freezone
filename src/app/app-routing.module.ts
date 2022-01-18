import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './modules/authModule/components/auth/auth.component';
import { UsersComponent } from './modules/usersModule/users.component';
import { UserCreateComponent } from './modules/userCreateModule/userCreate.component';
import { UserInfoComponent } from './modules/userInfoModule/userInfo.component';
import { UserEditComponent } from './modules/userEditModule/userEdit.component';
import { AuthGuard } from './auth.guard'



const routes: Routes = [
	{ path: '', component: AuthComponent},
	{ path: 'users', component: UsersComponent, canActivate: [AuthGuard]},
	{ path: 'users/create', component: UserCreateComponent, canActivate: [AuthGuard]},
	{ path: 'users/info/:id', component: UserInfoComponent, canActivate: [AuthGuard]},
	{ path: 'users/edit/:id', component: UserEditComponent, canActivate: [AuthGuard]},
  { path: '**', redirectTo: '' , component: AuthComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes),],
  providers: [AuthGuard],
  exports: [RouterModule]
})

export class AppRoutingModule {


}
