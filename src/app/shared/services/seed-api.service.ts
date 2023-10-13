import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SeedApiService {
  private baseUrl = 'https://pokeapi.co/api/v2/berry/';

  constructor(private http: HttpClient) {}

  getSeeds(id:string) {
    return this.http.get(`${this.baseUrl}${id}/`)
  }



}
