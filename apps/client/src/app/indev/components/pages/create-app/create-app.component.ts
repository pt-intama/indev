import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface Path {
  title: string;
  path: string;
  children?: any;
  icon: string;
}

@Component({
  selector: 'indev-create-app',
  templateUrl: './create-app.component.html',
  styleUrls: ['./create-app.component.scss'],
})
export class CreateAppComponent {
  constructor(private router: Router) {}

  paths: Path[] = [
    {
      title: 'Github',
      path: 'indev/Github',
      icon: 'fa fa-crop',
      children: [],
    },
    {
      title: 'Gitlab',
      path: 'indev/Gitlab',
      icon: 'fa fa-apple',
      children: [],
    },
    {
      title: 'Dokku',
      path: 'indev/Dokku',
      icon: 'fa fa-file',
      children: [],
    },
    {
      title: 'Docker',
      path: 'indev/Docker',
      icon: 'fa fa-list',
      children: [],
    },
  ];

  /**
   * nav to path
   *
   *
   * @param path
   */
  toCreateApp(path: string) {
    console.log(path);
    this.router.navigate([]);
  }
}
