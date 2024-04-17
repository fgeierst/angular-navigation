import { Component } from '@angular/core';
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
export class HeaderComponent {}
