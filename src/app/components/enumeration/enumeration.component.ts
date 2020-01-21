import { Component } from '@angular/core';
import { BookGenre } from './BookGenreEnum';

@Component({
  selector: 'app-enumeration',
  template:`
  <p>
    <select name="bookGenre">
      <option *ngFor = "let genre of BookGenre.values();">
          {{genre}}
      </option>
    </select>
    </p>
    `
})
export class EnumerationComponent {

    BookGenre = BookGenre;

}
