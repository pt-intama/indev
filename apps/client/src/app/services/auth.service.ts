import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {}

  loginByEmail() {
    const response = this.http.get('https://jsonplaceholder.typicode.com/todos/1', {
      headers: {
        'Content-Type' : 'application/json'
      }
    });
    return response.pipe<string>(
      map((data: any) => {
        return data.title 
      })
    )
  }
}
