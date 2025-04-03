import {Component, OnInit} from '@angular/core';
import {Character} from '../../models/character';
import {CharacterService} from '../../services/character.service';
import {ActivatedRoute} from '@angular/router';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-character-details',
  imports: [
    NgIf
  ],
  templateUrl: './character-details.component.html',
  styleUrl: './character-details.component.scss'
})
export class CharacterDetailsComponent implements OnInit {
  character: Character | undefined;

  constructor(
    private CharacterService: CharacterService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.CharacterService.getCharacterById(id).subscribe((characters: Character[]) => {
        this.character = characters[0];
      });
    }
  }
}
