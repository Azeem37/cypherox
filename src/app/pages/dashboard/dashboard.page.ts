import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  productList: any=[];

  constructor(private http: HttpClient, private api: ApiService) { 
    // this.getProduct();
  }

  ngOnInit() {
    
  }

  ionViewDidEnter(){
    this.getProduct();
  }

  async getProduct(){
    this.http.get('https://fakestoreapi.com/products/').subscribe(async (res) => {
      console.log('response. ',res);
     
     this.productList = await res;
    },err => {
      console.log('Error. ',err);
    });
    // this.api.getProductCollection().subscribe(res => {
    //   console.log('product list ',res);
      
    // })
  }

  async onSearchData(data){
    return this.productList.filter(item => {
      console.log('===>',item.title.toLowerCase().indexOf(data.toLowerCase()) > -1);
      return item.title.toLowerCase().indexOf(data.toLowerCase()) > -1;
    });
  }

}
