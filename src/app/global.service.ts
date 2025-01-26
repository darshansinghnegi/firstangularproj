import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  baseurl='asd'
  constructor(private http:HttpClient) { }

  login(data:any):Observable<any>{
    return this.http.post(this.baseurl, data);
  }

}
