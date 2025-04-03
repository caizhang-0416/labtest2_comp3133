import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Character} from '../models/character';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private http: HttpClient) { }

  private API_URL_LIST = 'https://hp-api.onrender.com/api/characters';
  private API_URL_ID = 'https://hp-api.onrender.com/api/character';

  getCharacters(): Observable<Character[]> {
    return this.http.get<Character[]>(this.API_URL_LIST);
  }

  getCharacterById(id: string): Observable<Character[]> {
    return this.http.get<Character[]>(`${this.API_URL_ID}/${id}`);
  }
}
