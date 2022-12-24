import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

interface Data {
  success: boolean;
  message: string;
  data: any;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  data: any;

  constructor(private http: HttpClient) {
    this.login('ridvan.gultekin@pierenerji.com', '121212');
  }

  ngOnInit(): void {
  }

  login(email: string, password: string): Observable<any> {
    const query = {
      client_email: email,
      client_password: password
    };
    const url = 'https://api.pierenerjiizlemesistemi.com/public/api/v1/client/register/login';

    const headers = new HttpHeaders().set(
      'User-Agent',
      'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36'
    );

    return this.http.post(url, query, { headers, observe: 'response' }).pipe(
      map((response: any) => {
        const data = response.body;
        console.log(data);
        return data.data;
      })
    );
  }
}