import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }


  async getProductCollection(){
    // new Promise((resolve, reject) => {
    //   this.http.get('https://fakestoreapi.com/products/').subscribe(async (res) => {
    //     resolve(res)
    //   },err => {});
    // })


    // // return this.http.get('https://fakestoreapi.com/products/');
    // this.http.get('https://fakestoreapi.com/products/').subscribe(async (res) => {
    //   console.log('response. ',res);
    //   return res;
    // },err => {
    //   console.log('Error. ',err);
    // });
  }
}
