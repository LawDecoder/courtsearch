import { Component } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  searchQuery: string = '';
  items: string[];

  constructor(public http: Http) {
    this.initializeItems();
  }

  initializeItems() {
    this.items = [
	'Amsterdam',
	'Bogota'
    ];
  }

  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
//    if (val && val.trim() != '') {
//      this.items = this.items.filter((item) => {
//        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
//      })
//    }
     if (val && val.trim() != '') {
       this.http.get('http://localhost:8080/query?query=' + val).map(res => res.json()).subscribe(data => {
        this.items = data;
    });
     }
  }


}
