import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/homeModule/home.component';
import { UsersComponent } from './modules/usersModule/users.component';
import { UserCreateComponent } from './modules/userCreateModule/userCreate.component';
import { UserInfoComponent } from './modules/userInfoModule/userInfo.component';
import { UserEditComponent } from './modules/userEditModule/userEdit.component';



const routes: Routes = [
	{ path: '', component: HomeComponent},
	{ path: 'users', component: UsersComponent },
   { path: 'users/create', component: UserCreateComponent},
	{ path: 'users/info/:id', component: UserInfoComponent},
	{ path: 'users/edit/:id', component: UserEditComponent},	
	{ path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),],
  exports: [RouterModule]
})

export class AppRoutingModule {


}
