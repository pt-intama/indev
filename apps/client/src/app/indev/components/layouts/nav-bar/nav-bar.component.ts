import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface Path {
  title: string;
  path: string;
  children?: any;
  icon: string;
}

@Component({
  selector: 'indev-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent {
  paths: Path[] = [
    {
      title: 'Dashboard',
      path: 'indev/home',
      icon: 'fa fa-crop',
      children: [],
    },
    {
      title: 'Activity',
      path: 'indev/activity',
      icon: 'fa fa-apple',
      children: [],
    },
    {
      title: 'Matrics',
      path: 'indev/matrics',
      icon: 'fa fa-file',
      children: [],
    },
    {
      title: 'Settings',
      path: 'indev/settings',
      icon: 'fa fa-list',
      children: [],
    },
  ];
  constructor(private router: Router) {}

  /**
   * nav to path
   *
   *
   * @param path
   */
  nav(path: string) {
    console.log(path);
    this.router.navigate(['' + path + '']);
  }
}
