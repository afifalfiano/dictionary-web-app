import { Component, computed, input } from '@angular/core';
import { Dictionary } from '../../models/dictionary.model';
import { Error } from '../../models/error.mode';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [NgIf],
  templateUrl: './body.component.html',
  styleUrl: './body.component.scss'
})
export class BodyComponent {
  dictionary = input.required<Dictionary[]>();
  error = input<Error | null>(null);
  keyword = input<string>('');
  searchActive = computed(() => this.keyword()?.length > 0);
}
