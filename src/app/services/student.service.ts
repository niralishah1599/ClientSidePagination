import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Istudent } from 'src/app/models/student'
import { Observable } from 'rxjs';
@Injectable({
    providedIn: 'root'
})
export class StudentService

{
   private _url="asssets/data/student.json";

   constructor(private http:HttpClient)
   {

   }
  
   getStudentsData():Observable<Istudent[]>
   {
      return this.http.get<Istudent[]>(this._url);
   }

}