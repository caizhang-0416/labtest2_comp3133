import {Component, OnInit} from '@angular/core';
import {Character} from '../../models/character';
import {CommonModule} from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {CharacterService} from '../../services/character.service';
import {CharacterFilterComponent} from '../character-filter/character-filter.component';
import {Router} from '@angular/router';

@Component({
  selector: 'app-character.ts-list',
  imports: [CommonModule, MatCardModule, CharacterFilterComponent],
  templateUrl: './character-list.component.html',
  styleUrl: './character-list.component.scss'
})
export class CharacterListComponent implements OnInit {
  characters: Character[] = [];
  filteredCharacters: Character[] = [];

  constructor(
    private router: Router,
    private characterService: CharacterService
  ) {}
  ngOnInit() {
    this.characterService.getCharacters().subscribe(data => {
        this.characters = data;
        this.filteredCharacters = data;
      });
  }

  filterCharacters($event: string) {
    if ($event) {
      this.filteredCharacters = this.characters.filter(character => character.house === $event);
    }
  }

  goToDetail(characterId: string) {
    this.router.navigate(['/character', characterId]);
  }
}
