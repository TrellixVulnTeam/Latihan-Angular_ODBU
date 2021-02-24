import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Komponen } from './Komponen';
import { map } from 'rxjs/operators';

@Injectable()
export class KomponenService {

  constructor(private httpClient: HttpClient) { }

  getKategori(id : BigInteger): Observable<any> {
    return this.httpClient.get(environment.baseUrl + 'editproductjson/' + id)
    .pipe(map(data => data));
  }

  getKategoriAll() : Observable<any> {
    return this.httpClient.get(environment.baseUrl + '/productlistjson/')
    .pipe(map(data => data as Komponen[]));
  }

  simpanKategori(komponen : Komponen, isEdit : boolean): Observable<any> {
    let url = 'saveproductjson';
    if (isEdit) {
      url = 'saveproductjson';
    }
    return this.httpClient.post(environment.baseUrl + url, komponen);
  }

  deleteKategori(id : BigInteger) : Observable<any> {
    return this.httpClient.get(environment.baseUrl + '/deleteproductjson/' + id)
    .pipe(map(data => data as Komponen[]));
  }

  addKategori(komponen : Komponen) : Observable<any> {
    let url = 'insertproduct';
    return this.httpClient.post(environment.baseUrl + url, komponen);
  }

}
