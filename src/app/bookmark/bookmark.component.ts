import { Component, inject, OnInit, signal, WritableSignal } from '@angular/core';
import { DataSignalsService } from '../shared/services/data-signals.service';
import { Dictionary } from '../models/dictionary.model';
import { FooterComponent } from '../shared/components/footer/footer.component';
import { NavbarComponent } from '../shared/components/navbar/navbar.component';
import { SkeletonComponent } from '../shared/skeleton/skeleton.component';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-bookmark',
  standalone: true,
  imports: [FooterComponent, NavbarComponent, SkeletonComponent],
  templateUrl: './bookmark.component.html',
  styleUrl: './bookmark.component.scss'
})
export class BookmarkComponent implements OnInit {
  dictionary = signal<Dictionary[]>([]);
  private readonly metaService = inject(Meta);
  private readonly titleService = inject(Title)

  constructor(
    private readonly dataSignalService: DataSignalsService
  ) {
    this.titleService.setTitle('Dictionary - Bookmark');
  
    this.metaService.addTag({ name: 'description', content: 'Welcome to the bookmark page.' });
    this.metaService.addTag({ name: 'keywords', content: 'Angular, SEO, JavaScript' });
    this.metaService.addTag({ property: 'og:title', content: 'Dictionary Web App - Bookmark' });
    this.metaService.addTag({ property: 'og:description', content: 'Welcome to the bookmark page' });
    this.metaService.addTag({ property: 'og:image', content: 'https://www.afifalfiano.my.id/assets/images/afif-cartoons.png' });

  }


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
