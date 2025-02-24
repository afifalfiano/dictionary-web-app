import { computed, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataSignalsService {
  private readonly data = signal<unknown[]>([])
  constructor() { }

  add(payload: unknown) {
    this.data.update((data: unknown[]) => [...data, payload]);
  }

  remove(index: number) {
    this.data.update(arr => arr.filter((_, i) => i !== index));
  }

  total() {
    computed(() => this.data.length); 
  }

  get() {
    return this.data.asReadonly();
  }

  reset(): void {
    this.data.set([]);
  }
}
