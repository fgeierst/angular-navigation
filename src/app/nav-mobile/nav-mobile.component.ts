import { Component } from '@angular/core';
import { HamburgerMenuComponent } from '../icons/hamburger-menu/hamburger-menu.component';
import { CrossComponent } from '../icons/cross/cross.component';

@Component({
  selector: 'app-nav-mobile',
  standalone: true,
  imports: [HamburgerMenuComponent, CrossComponent],
  templateUrl: './nav-mobile.component.html',
  styleUrl: './nav-mobile.component.css',
})
export class NavMobileComponent {
  open = false;
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
      link: '/search',
    },
  ];
}
