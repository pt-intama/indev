import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'indokku-platform-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  title = 'erpan';

  constructor(private authService:AuthService) { }

  ngOnInit(): void {
    this.authService.loginByEmail().subscribe((data)=> {
      this.title = data
    })
  }

}
