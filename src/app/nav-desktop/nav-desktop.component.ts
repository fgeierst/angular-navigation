import { Component, Input } from '@angular/core';
import { ChevronDownComponent } from '../icons/chevron-down/chevron-down.component';

@Component({
  selector: 'app-nav-desktop',
  standalone: true,
  imports: [ChevronDownComponent],
  templateUrl: './nav-desktop.component.html',
  styleUrl: './nav-desktop.component.css',
})
export class NavDesktopComponent {
  @Input() menu: any[] = [];
}
