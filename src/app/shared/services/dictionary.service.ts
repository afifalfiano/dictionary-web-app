import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InternalPath } from '../../common/internal-path';
import { Dictionary } from '../../models/dictionary.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {
  
  constructor(
    private readonly httpClient: HttpClient
  ) { }

  getWord(word: string): Observable<Dictionary[]> {
    return this.httpClient.get<Dictionary[]>(InternalPath.dictionary.replace(':word', word));
  }
}
