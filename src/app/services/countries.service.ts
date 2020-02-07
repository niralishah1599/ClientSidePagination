import { Injectable } from '@angular/core';
import { ICountry} from "src/app/models/country";
@Injectable({
    providedIn: 'root'
})

export class CountriesService
{
   public CountryList:ICountry[]= [
        {
          id:1,
          name: 'Russia',
          flag: 'f/f3/Flag_of_Russia.svg',
          area: 17,
          population: 14
        },
        {
          id:2,
          name: 'France',
          flag: 'c/c3/Flag_of_France.svg',
          area: 64,
          population: 6
        },
        {
          id:3,
          name: 'Germany',
          flag: 'b/ba/Flag_of_Germany.svg',
          area: 35,
          population: 82
        },

        {
          id:4,
          name: 'Portugal',
          flag: '5/5c/Flag_of_Portugal.svg',
          area: 92,
          population: 10
        },
        {
          id:5,  
          name: 'Canada',
          flag: 'c/cf/Flag_of_Canada.svg',
          area: 99,
          population: 36
        },
        {
          id:6,  
          name: 'Vietnam',
          flag: '2/21/Flag_of_Vietnam.svg',
          area: 33,
          population: 95
        },
        {
          id:7,
          name: 'Brazil',
          flag: '0/05/Flag_of_Brazil.svg',
          area: 85,
          population: 20
        },
        {
          id:8,
          name: 'Mexico',
          flag: 'f/fc/Flag_of_Mexico.svg',
          area: 19,
          population: 12
        },
        {
          id:9,
          name: 'United States',
          flag: 'a/a4/Flag_of_the_United_States.svg',
          area: 96,
          population: 32
        },
        {
          id:10,  
          name: 'India',
          flag: '4/41/Flag_of_India.svg',
          area: 32,
          population: 13
        },
        {
          id:11,  
          name: 'Indonesia',
          flag: '9/9f/Flag_of_Indonesia.svg',
          area: 19,
          population: 26
        },
        {
          id:12,
          name: 'Tuvalu',
          flag: '3/38/Flag_of_Tuvalu.svg',
          area: 26,
          population: 11
        },
        {
          id:13,
          name: 'China',
          flag: 'f/fa/Flag_of_the_People%27s_Republic_of_China.svg',
          area: 95,
          population: 14
        }
      ];

      getCountryLength()
      {
        return this.CountryList.length;
      }

      getData(index)
      {
        let start=(index-1)*3;
        let end=(index-1)*3+3;
        return this.CountryList.filter((student,i)=>{
          if(i>=start && i<end)
          {
            return true;
          }
          return false;
        })
      }

      

       countries() :ICountry[]
       {
        console.log(this.CountryList);
       return  this.CountryList;
      }


      sort(key,order)
      {
        if(order=='decending')
        {
         this.CountryList.sort((a,b)=>{
        console.log(a);
        return  (a[key]).toString().toUpperCase()>(b[key]).toString().toUpperCase() ?1:-1;
      });
    }
    else
    {
      if(order=='ascending'){
      this.CountryList.sort((a,b)=>{
        console.log(a);
        return  (a[key]).toString().toUpperCase()<(b[key]).toString().toUpperCase() ?1:-1;
      });
    }
    }
      }
}