import { Component } from '@angular/core';
import { ChevronDownComponent } from '../icons/chevron-down/chevron-down.component';

@Component({
  selector: 'app-nav-desktop',
  standalone: true,
  imports: [ChevronDownComponent],
  templateUrl: './nav-desktop.component.html',
  styleUrl: './nav-desktop.component.css',
})
export class NavDesktopComponent {
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
