import { NgModule }	from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from './header.component';

import { RouterModule } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {TranslateModule} from "@ngx-translate/core";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {MatInputModule} from "@angular/material/input";

@NgModule({

    imports: [BrowserModule,
        RouterModule,
        MatButtonModule, TranslateModule, MatFormFieldModule, MatSelectModule, MatInputModule],
   declarations: [ HeaderComponent],
   exports: [ HeaderComponent]

})

export class HeaderModule { }
