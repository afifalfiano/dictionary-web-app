import { computed, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataSignalsService {
  private readonly data = signal<unknown[]>([])
  constructor() { }

  add(payload: unknown) {
    this.data.update(data => [...data, payload]);
  }

  total() {
    computed(() => this.data.length); 
  }

  get() {
    return this.data.asReadonly();
  }

  reset(): void {
    this.data.update([]);
  }
}
