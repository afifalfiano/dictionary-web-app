import { Component, OnInit, output } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged} from 'rxjs';
import { NavbarComponent } from "../../shared/components/navbar/navbar.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, NavbarComponent],
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
