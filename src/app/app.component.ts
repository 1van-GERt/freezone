import { Component } from '@angular/core';
import { Router,
			Event as RouterEvent,
			NavigationStart,
			NavigationEnd,
			NavigationCancel,
			NavigationError
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { filter, map } from 'rxjs/operators';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
	public loadingRouterOutlet:boolean = false;


	constructor(router: Router) {
    router.events.subscribe((event: RouterEvent) => {
      switch (true) {
        case event instanceof NavigationStart: {
          this.loadingRouterOutlet = true;
          break;
        }
        case event instanceof NavigationEnd:
        case event instanceof NavigationCancel:
        case event instanceof NavigationError: {
          this.loadingRouterOutlet = false;
          break;
        }
        default: {
          break;
        }
      }
    });
  }
}
