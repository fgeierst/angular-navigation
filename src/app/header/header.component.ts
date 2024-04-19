import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SearchComponent } from '../search/search.component';
import { NavDesktopComponent } from '../nav-desktop/nav-desktop.component';
import { NavMobileComponent } from '../nav-mobile/nav-mobile.component';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  imports: [SearchComponent, NavDesktopComponent, NavMobileComponent],
})
export class HeaderComponent {
  constructor(private router: Router) {}

  navigate(url: string) {
    this.router.navigate([url]);
  }

  menu = [
    {
      name: 'Products',
      link: '/products',
      open: false,
      children: [
        {
          name: 'New Arrivals',
          link: '/products/new-arrivals',
        },
        {
          name: 'On Sale',
          link: '/products/on-sale',
        },
      ],
    },
    {
      name: 'About',
      link: '/about',
    },
    {
      name: 'Contact',
      link: '/contact',
    },
  ];
}
