import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { KomponenService } from '../komponen/komponen.service';
import { Login } from '../komponen/Login';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loggedIn = false;
  username = '';

  constructor(private router: Router, private komponenService : KomponenService, private httpClient: HttpClient) { }

  public login(username : string, password : string) {
    // this.loggedIn = (username == "ABC" && password == "123");
    // this.komponenService.getUser().subscribe(hasil => {
    //   const login = new Login();
    //   login.username = hasil.username;
    //   login.password = hasil.password;
    //   this.loggedIn = ( password == login.password && username == login.username );
    // });
    // console.log(this.loggedIn);
    // if(this.loggedIn) {
    //   this.router.navigateByUrl('/komponenlist');
    // }

    const login = new Login();
    login.username = username;
    login.password = password;
    this.username = username;
    this.httpClient.post(environment.baseUrl + '/login/' + login.username, login)
    .pipe(map(data => data))
    // this.komponenService.getUser()
    .subscribe(
      (data: any) => {
        this.loggedIn = data.isLogin;
        login.jam = data.jam;
        console.log('login pada ' + login.jam);
        this.router.navigate(['/komponenlist'])
      }
    );

  }

  logout() {
    const login = new Login();
    this.loggedIn = false;
    login.isLogin = this.loggedIn;
    this.httpClient.post(environment.baseUrl + '/logout/' + this.username, login)
    .pipe(map(data => data))
    .subscribe(
      (data: any) => {
        this.loggedIn = data.isLogin;
        console.log("logout pada " + data.jam);
        console.log(data.isLogin);
        this.router.navigate(['/home'])
      }
    );
  }

  isAuthenticated() {
    const promise = new Promise(
      (resolve, reject) => {
        setTimeout(() => {
          resolve(this.loggedIn)
        }, 1000)
      }
    );
    return promise;
  }

}