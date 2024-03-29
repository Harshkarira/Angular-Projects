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
    return this.httpclient.get(`${ApplicationConstants.APIURL}/blog`);
  }

  fetchblog(slug:String): Observable<any>{
    return this.httpclient.get(`${ApplicationConstants.APIURL}/blog/${slug}`);
  }

  getCategories(): Observable<any>{
    return this.httpclient.get(`${ApplicationConstants.APIURL}/Categories`);
  }

  validateSlug(Slug:String): Observable<any>{
    return this.httpclient.get(`${ApplicationConstants.APIURL}/checkSlug/${Slug}`);
  }

  matchtags(tag:String): Observable<any>{
    return this.httpclient.get(`${ApplicationConstants.APIURL}/matchtags/${tag}`);
  }

  fetchProfile(userid:String): Observable<any>{
    return this.httpclient.get(`${ApplicationConstants.APIURL}/fetchProfile/${userid}`);
  }



  


}
