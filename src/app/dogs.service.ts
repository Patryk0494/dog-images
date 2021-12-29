import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
// import 'rxjs/add/operators/map';

const API_URL: string = 'https://dog.ceo/api/';
const BREED_LIST_API: string = `${API_URL}breeds/list/all`;

@Injectable()
export class DogsService {
  constructor(private http: HttpClient) {}

  getDogsBreedList(): Observable<any> {
    return this.http.get(BREED_LIST_API).pipe(map((resp) => resp));
  }

  getImgByBreed(breed: string): Observable<any> {
    return this.http
      .get(`${API_URL}breed/${breed}/images/random`)
      .pipe(map((resp) => resp));
  }
}
