import { Pfe } from './../module/Pfe';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { getNumberOfCurrencyDigits } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class PfeService {

  constructor(private http: HttpClient) { }

  getAllPfes() {
    return this.http.get<Pfe[]>('http://localhost:8080/rest/pfes');

  }
  getcount() {
    return this.http.get<number>('http://localhost:8080/rest/count');
  }

  getByType(id :number) {
    return this.http.get<Pfe[]>('http://localhost:8080/rest/listpfe/'+id);
  }

  search(s: string) {
    return this.http.get<Pfe[]>('http://localhost:8080/rest/search/' + s);
  }
  add(p: Pfe) {
    return this.http.post('http://localhost:8080/rest/add', p);
  }
  delete(id: number) {
    return this.http.delete('http://localhost:8080/rest/delete/' + id);
  }
}
