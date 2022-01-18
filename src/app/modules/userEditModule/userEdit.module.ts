import { NgModule }	from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UserEditComponent } from './userEdit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';
import {TranslateModule} from "@ngx-translate/core";
import {MatFormFieldModule} from "@angular/material/form-field";
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
@NgModule({

  imports: [BrowserModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule, TranslateModule, MatFormFieldModule,MatInputModule,MatSelectModule,MatButtonModule],
   declarations: [ UserEditComponent],
   exports: [ UserEditComponent]

})

export class UserEditModule { }
