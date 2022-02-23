import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'indev-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  title = '';

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.authService.loginByEmail().subscribe((data) => {
      this.title = data;
    });
  }

  toDashboard() {
    this.router.navigate(['indev/home']);
    console.log('masok cok');
    // location.go('/indev');
  }
}
