import { NgModule }	from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UserCreateComponent } from './userCreate.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {TranslateModule} from "@ngx-translate/core";

@NgModule({

    imports: [BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatSelectModule,
        MatDatepickerModule, TranslateModule],
   declarations: [ UserCreateComponent],
   exports: [ UserCreateComponent]

})

export class UserCreateModule { }
