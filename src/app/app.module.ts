import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from './modules/headerModule/header.module';
import { HomeModule } from './modules/homeModule/home.module'
import { UsersModule } from './modules/usersModule/users.module';
import { UserCreateModule } from './modules/userCreateModule/userCreate.module';
import { UserInfoModule } from './modules/userInfoModule/userInfo.module';
import { UserEditModule } from './modules/userEditModule/userEdit.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HeaderModule,    
    HomeModule,
    UsersModule,
    UserCreateModule,
    UserInfoModule,
    UserEditModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
