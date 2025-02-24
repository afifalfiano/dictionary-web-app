import { Component, OnInit, signal, WritableSignal } from '@angular/core';
import { DataSignalsService } from '../shared/services/data-signals.service';
import { Dictionary } from '../models/dictionary.model';
import { FooterComponent } from '../shared/components/footer/footer.component';
import { NavbarComponent } from '../shared/components/navbar/navbar.component';
import { SkeletonComponent } from '../shared/skeleton/skeleton.component';

@Component({
  selector: 'app-bookmark',
  standalone: true,
  imports: [FooterComponent, NavbarComponent, SkeletonComponent],
  templateUrl: './bookmark.component.html',
  styleUrl: './bookmark.component.scss'
})
export class BookmarkComponent implements OnInit {
  dictionary = signal<Dictionary[]>([]);
  constructor(
    private readonly dataSignalService: DataSignalsService
  ) {}


  ngOnInit(): void {
    this.getFavoriteDictionary();
  }

  getFavoriteDictionary(): void {
    this.dictionary = this.dataSignalService.get() as WritableSignal<Dictionary[]>;
  }

  removeBookmark(index: number): void {
    this.dataSignalService.remove(index);
  }

}
