import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  constructor(private router: Router) {}

  isActive(url: string): boolean {
    return this.router.url === url;
  }
}
