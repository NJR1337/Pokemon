import { Component, Input, OnInit } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';



@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss']
})
export class PokemonCardComponent implements OnInit {
  @Input() public pokemon: any;
  public pokemonDetails: any;
  constructor(private pokemonService: PokemonService) { }

  ngOnInit() {
    this.getPokemonDetails(this.pokemon.url);
  }

  public getPokemonDetails(url: string) {
    this.pokemonService.getPokemonDetails(url)
      .subscribe(response => {
        this.pokemonDetails = response;
      })

  }
}










