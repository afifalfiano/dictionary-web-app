import { Component, OnInit, output } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { debounceTime, distinctUntilChanged} from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  keyword = new FormControl('');
  searchText = output<string>();


  ngOnInit(): void {
    this.getKeyword();
  }

  getKeyword(): void {
    this.keyword.valueChanges.pipe(
      debounceTime(700),
      distinctUntilChanged()
    ).subscribe((key) => {
      if (key !== null) {
        this.searchText.emit(key);
      }
    });
  }
}
