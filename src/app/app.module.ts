import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from './modules/headerModule/header.module';
import { AuthModule } from './modules/authModule/auth.module';
import { UsersModule } from './modules/usersModule/users.module';
import { UserCreateModule } from './modules/userCreateModule/userCreate.module';
import { UserInfoModule } from './modules/userInfoModule/userInfo.module';
import { UserEditModule } from './modules/userEditModule/userEdit.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HeaderModule,    
    AuthModule,
    UsersModule,
    UserCreateModule,
    UserInfoModule,
    UserEditModule,
    BrowserAnimationsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
