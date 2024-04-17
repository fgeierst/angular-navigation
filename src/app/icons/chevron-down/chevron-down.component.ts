import { Component } from '@angular/core';

@Component({
  selector: 'app-chevron-down',
  standalone: true,
  imports: [],
  template: `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 15 15"
    >
      <path
        fill="currentColor"
        fill-rule="evenodd"
        d="M3.135 6.158a.5.5 0 0 1 .707-.023L7.5 9.565l3.658-3.43a.5.5 0 0 1 .684.73l-4 3.75a.5.5 0 0 1-.684 0l-4-3.75a.5.5 0 0 1-.023-.707"
        clip-rule="evenodd"
      />
    </svg>
  `,
  styles: ``,
})
export class ChevronDownComponent {}
