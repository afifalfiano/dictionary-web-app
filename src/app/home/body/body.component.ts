import { Component, computed, input } from '@angular/core';
import { Dictionary } from '../../models/dictionary.model';
import { Error } from '../../models/error.mode';
import { DataSignalsService } from '../../shared/services/data-signals.service';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [],
  templateUrl: './body.component.html',
  styleUrl: './body.component.scss'
})
export class BodyComponent {
  dictionary = input.required<Dictionary[]>();
  error = input<Error | null>(null);
  keyword = input<string>('');
  searchActive = computed(() => this.keyword()?.length > 0);

  constructor(
    private readonly dataSignalService: DataSignalsService
  ) {

  }

  addFavorite(item: Dictionary): void {
    this.dataSignalService.add(item);
  }
}
