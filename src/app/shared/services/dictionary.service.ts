import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InternalPath } from '../../common/internal-path';

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {
  
  constructor(
    private readonly httpClient: HttpClient
  ) { }

  getWord(word: string) {
    return this.httpClient.get(InternalPath.dictionary.replace(':word', word));
  }
}
