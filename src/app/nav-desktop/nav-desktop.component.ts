import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ChevronDownComponent } from '../icons/chevron-down/chevron-down.component';

@Component({
  selector: 'app-nav-desktop',
  standalone: true,
  imports: [ChevronDownComponent],
  templateUrl: './nav-desktop.component.html',
  styleUrl: './nav-desktop.component.css',
})
export class NavDesktopComponent {
  constructor(private router: Router) {}

  navigate(url: string) {
    this.router.navigate([url]);
  }

  @Input() menu: any[] = [];
}
