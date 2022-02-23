import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'indev-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(private router: Router) {}

  toCreateApps() {
    this.router.navigate(['indev/create-app']);
  }
  toCreateDbApps() {
    this.router.navigate(['indev/create-db']);
  }
}
