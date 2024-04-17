import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-magnifying-glass',
  standalone: true,
  imports: [],
  template: `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 15 15"
      [class]="class"
    >
      <path
        fill="currentColor"
        fill-rule="evenodd"
        d="M10 6.5a3.5 3.5 0 1 1-7 0a3.5 3.5 0 0 1 7 0m-.691 3.516a4.5 4.5 0 1 1 .707-.707l2.838 2.837a.5.5 0 0 1-.708.708z"
        clip-rule="evenodd"
      />
    </svg>
  `,
  styles: ``,
})
export class MagnifyingGlassComponent {
  @Input() class = '';
}
