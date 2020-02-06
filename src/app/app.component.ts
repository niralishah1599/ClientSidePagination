import { Component ,OnInit } from '@angular/core';
import { CountriesService } from 'src/app/services/countries.service';
import {ICountry} from 'src/app/models/country';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent 
{
  title = 'ClientSidePagination';
  countryList:ICountry[]=[];
  country:ICountry[]=[];
  page = 1;
  pageSize = 3;
  collectionSize:number=100;
  order:string="decending";

  sortClass = 'up'
 
  sortclass = {
    name : 'up',
    area : 'up',
    population :'up'
  }
    constructor( private _CountriesService:CountriesService)
    {

    }

   ngOnInit(): void
    {
   //this.countryList=this._CountriesService.CountryList;
   console.log(this.page);
   this.collectionSize=(this._CountriesService.getCountryLength()*10)/3;
   console.log(this.collectionSize);
  
   this.country=this._CountriesService.CountryList;
   this.countryList=this._CountriesService.getData(this.page);
    console.log(this.countryList);
    }

    // sort() {
    //   if (this.sortClass == "up") {
    //     this.sortClass = "down";

    //   } else {
    //     this.sortClass = "up";
    //   }
    //   this.sortBy('name')
    // }

  sortBy(key){
    if(this.order=='decending' &&  this.sortclass[key] =="down"){
      this.countryList.sort((a,b)=>{
        console.log(a);
        return  (a[key]).toString().toUpperCase()>(b[key]).toString().toUpperCase() ?1:-1;
      });
      this.order="ascending";
      this.sortclass[key]="up";
      //this.sortclass.name
      }
    else{
      this.countryList.sort((a,b)=>{
        return  (a[key]).toString().toUpperCase()<(b[key]).toString().toUpperCase() ?1:-1;
        });
        this.order='decending';
        this.sortclass[key]="down"
    }
  
}
    onPageClick(p)
    {
      console.log("page click");

      console.log("p"+p);
      console.log(this.page)
      this.countryList=this._CountriesService.getData(this.page)
      console.log(this.countryList);
    }
 }

