import { Component, inject, OnInit } from '@angular/core';
import { DictionaryService } from '../shared/services/dictionary.service';
import { LayoutComponent } from "../layout/layout.component";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [LayoutComponent, HeaderComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{
  private readonly dictionaryService: DictionaryService = inject(DictionaryService);

  ngOnInit(): void {
    this.dictionaryService.getWord('great').subscribe(console.log);
  }
}
