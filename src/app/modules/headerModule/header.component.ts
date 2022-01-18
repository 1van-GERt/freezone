import { Component,
			OnInit,
			AfterContentChecked
} from '@angular/core';
import { Observable } from 'rxjs';
import { Router} from '@angular/router';
import {TranslateService} from "@ngx-translate/core";

interface lang {
  value: string;
  viewValue: string;
}

@Component({
	selector: 'header',
	templateUrl: 'header.component.html',
   styleUrls: ['header.component.scss']

})

export class HeaderComponent implements OnInit, AfterContentChecked{

	public userAuth:boolean = false;

	public observable = new Observable((observer) => {
			observer.next(document.cookie.replace(/(?:(?:^|.*;\s*)isAuth\s*\=\s*([^;]*).*$)|^.*$/, "$1"))
	})


	// @ts-ignore
  constructor(private router: Router,
              public translate: TranslateService){}

  langs: lang[] = [
    {value: 'en', viewValue: 'EN'},
    {value: 'ru', viewValue: 'RU'},
  ];

  selectedLangs = this.langs[0].value;

  selectCar(event: Event) {

    this.translate.use(this.selectedLangs = (event.target as HTMLSelectElement).value);
  }

	ngOnInit(){}



	ngAfterContentChecked(){
		this.observable.subscribe(x => { this.userAuth = (x == 'true') ? true : false		});
	}




	logout(){
	    			document.cookie = "userId=";
	    			document.cookie = "isAuth=false";
	    			document.cookie = "isAdmin=";
	}
}
