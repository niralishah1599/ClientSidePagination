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
    name : 'down',
    area : 'down',
    population :'down'
  }
    constructor( private _CountriesService:CountriesService)
    {

    }

   ngOnInit(): void
    {
 ;
   console.log(this.page);
   this.collectionSize=(this._CountriesService.getCountryLength()*10)/3;
   console.log(this.collectionSize);
  
  
   this.countryList=this._CountriesService.getData(this.page);
    console.log(this.countryList);
    }

   

  sortBy(key){
    if(this.order=='decending' &&  this.sortclass[key] =="down"){
      console.log(this.order);
      this._CountriesService.sort(key,'decending');
      this.onPageClick();
      this.order="ascending";
      this.sortclass[key]="up";
     
      
      }
    else{
      console.log(this.order);
      this._CountriesService.sort(key,'ascending');
      this.onPageClick();
      this.order='decending';
      this.sortclass[key]="down"
        
    }
  
}
    onPageClick()
    {
      
      this.countryList=this._CountriesService.getData(this.page)
      console.log(this.countryList);
    }
 }

