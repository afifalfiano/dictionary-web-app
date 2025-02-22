import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataObservableService {
  private readonly data = new Subject<unknown>();
  constructor() { }


  set(data: unknown): void {
    this.data.next(data)
  }

  get(): Observable<unknown> {
    return this.data.asObservable();
  }

  reset(): void {
    this.data.next(null);
  }

  complete(): void {
    this.data.next(null);
    this.data.complete();
  }

}
