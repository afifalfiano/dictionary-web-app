import { Component, computed, effect, inject, signal } from '@angular/core';
import { DictionaryService } from '../shared/services/dictionary.service';
import { LayoutComponent } from "../layout/layout.component";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { Dictionary } from '../models/dictionary.model';
import { BodyComponent } from './body/body.component';
import { Observable, takeUntil } from 'rxjs';
import { Error } from '../models/error.mode';
import { SkeletonComponent } from "../shared/skeleton/skeleton.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, BodyComponent, SkeletonComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  dictionary = signal<Dictionary[]>([]);
  error = signal<Error | null>(null);
  keyword = signal<string>('');
  private readonly dictionaryService: DictionaryService = inject(DictionaryService);
  public countDictionary = computed(() => this.dictionary().length);
  $destroy = new Observable<void>();

  constructor() {
    effect(() => {
      if (this.keyword().length > 0) {
        console.log(this.keyword(), 'keyword');
      }
    });
  }

  search(keyword: any): void {
    this.keyword.set(keyword);
    this.getDictionary();
  }

  getDictionary(): void {
    this.dictionaryService.getWord(this.keyword()).pipe(
      takeUntil(this.$destroy),
    ).subscribe({
      next: (data) => {
        this.dictionary.set(data);
        this.error.set(null);
        console.log(this.dictionary(), 'dictionary');
      },
      error: (err) => {
        console.log(err);
        this.dictionary.set([]);
        this.error.set(err?.error);
      },
    });
  }
}

