import { Injectable } from '@angular/core';
//import { HttpClient } from 'selenium-webdriver/http';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WebRequestService {

  readonly ROOt_URL;

  constructor(private http: HttpClient) { 
    this.ROOt_URL = 'http://localhost:3000';
  }

  get(url: string) {
    return this.http.get(`${this.ROOt_URL}/${url}`);
  }


  post(url: string, payload: Object) {
    return this.http.post(`${this.ROOt_URL}/${url}`, payload);
  }

  patch(url: string, payload: Object) {
    return this.http.patch(`${this.ROOt_URL}/${url}`, payload);
  }

  delete(url: string){
    return this.http.delete(`${this.ROOt_URL}/${url}`);
  }


  login(email: string, password: string) {
    return this.http.post(`${this.ROOt_URL}/users/login`, {
      email,
      password
    }, {
        observe: 'response'
      });
  }


  signup(email: string, password: string) {
    return this.http.post(`${this.ROOt_URL}/users`, {
      email,
      password
    }, {
        observe: 'response'
      });
  }



}
