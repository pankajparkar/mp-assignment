import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

const DEFAULT_TITLE = 'Application';

@Component({
  selector: 'mp-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  title = DEFAULT_TITLE;
  menuItems = [
    {name: 'Dashboard', link: '/home'},
    {name: 'Activity 1', link: '/activity1'},
    {name: 'Activity 2', link: '/activity2'},
    {name: 'Activity 3', link: '/activity3'},
  ];

  constructor(
    readonly router: Router,
    readonly route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.router.events.subscribe(
      (event) => {
        if (event instanceof NavigationEnd) {
          const [currentRoute] = this.route.children;
          if (currentRoute) {
            // TODO: below has to be change if requirement changes
            this.title = (currentRoute.routeConfig?.data as any)?.title || DEFAULT_TITLE;
          }
        }
      }
    );
  }

}
