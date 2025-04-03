import {Component, EventEmitter, Output} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MatFormField, MatLabel} from '@angular/material/input';
import {MatOption, MatSelect, MatSelectChange} from '@angular/material/select';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-character-filter',
  imports: [
    FormsModule,
    MatFormField,
    MatLabel,
    MatSelect,
    MatOption,
    NgForOf
  ],
  templateUrl: './character-filter.component.html',
  styleUrl: './character-filter.component.scss'
})
export class CharacterFilterComponent {
  houses: string[] = ['Gryffindor', 'Slytherin', 'Hufflepuff', 'Ravenclaw'];

  @Output() houseSelected = new EventEmitter<string>();

  onHouseChange(event: MatSelectChange) {
    this.houseSelected.emit(event.value);
  }
}
