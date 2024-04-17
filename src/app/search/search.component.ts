import { Component } from '@angular/core';
import { MagnifyingGlassComponent } from '../icons/magnifying-glass/magnifying-glass.component';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [MagnifyingGlassComponent],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchComponent {}
