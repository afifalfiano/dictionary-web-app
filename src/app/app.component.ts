import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LayoutComponent } from "./layout/layout.component";
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LayoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'dictionary-web-app';
  private readonly metaService = inject(Meta);
  private readonly titleService = inject(Title)

  constructor(
  ) {
    this.titleService.setTitle('Dictionary - Home');

    this.metaService.addTag({ name: 'description', content: 'Welcome to the home page.' });
    this.metaService.addTag({ name: 'keywords', content: 'Angular, SEO, JavaScript' });
    this.metaService.addTag({ property: 'og:title', content: 'Dictionary Web App - Home' });
    this.metaService.addTag({ property: 'og:description', content: 'Welcome to the home page' });
    this.metaService.addTag({ property: 'og:image', content: 'https://www.afifalfiano.my.id/assets/images/afif-cartoons.png' });

  }
}
