import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  api_url =environment.app_url

  constructor(private http : HttpClient) { }

  register(data:any){
    console.log(data)
    this.http.post(`${this.api_url}/register`,data)
    .subscribe(()=>{
      console.log('registered')
    })
  }
}
