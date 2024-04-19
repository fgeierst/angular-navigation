import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
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
  constructor(private router: Router) {}

  navigate(url: string) {
    this.router.navigate([url]);
  }

  @Input() menu: any[] = [];
  open = false;
}
