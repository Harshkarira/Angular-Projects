import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApplicationConstants } from '../shared/constants/ApplicationConstants';

@Injectable({
  providedIn: 'root'
})
export class MediumService {

  constructor(private httpclient: HttpClient) { }

  fetchblogs(): Observable<any>{
    return this.httpclient.get(`${ApplicationConstants.APIURL}/blogs`);
  }

}