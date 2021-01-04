import { TypePfe } from './../module/TypePfe';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TypePfeService {

  constructor(private http:HttpClient) { }

   getAllTypes() {
    return this.http.get<TypePfe[]>('http://localhost:8080/rest/listetype');

  }

}
