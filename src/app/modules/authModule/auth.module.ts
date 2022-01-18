import { NgModule }	from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuthComponent } from './components/auth/auth.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from "@angular/common/http";
import {TranslateModule} from "@ngx-translate/core";
@NgModule({

    imports: [
        HttpClientModule,
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        TranslateModule
    ],
   declarations: [ AuthComponent],
   exports: [ AuthComponent]

})

export class AuthModule { }
