import { Component, OnInit } from '@angular/core';
import { PokemonService } from './services/pokemon.service';
import { Pokemon } from './app.module';
import { Routes, RouterModule } from '@angular/router';
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs";
import { SearchPokemon } from './models/searchPokemon';


@Component({ selector: 'app-root', templateUrl: 'app.component.html', styleUrls: ['app.component.scss'] })
export class AppComponent implements OnInit {

    public pokemons: Pokemon[] = [];
    public searchValue: string = "";
    public test: string = "";

    constructor(private pokemonService: PokemonService,
        private http: HttpClient) { }

    ngOnInit() {
        this.getPokemonList();
    }

    public getValue(val: string) {
        this.searchValue = val;
    }

    public searchPokemon() {
        console.log(this.searchValue);
                
    }

    public getSearchPokemonInformation(): any {
        fetch("https://pokeapi.glitch.me/v1/pokemon/" + this.searchValue)
            .then(response => response.json())
            .then(data =>{
                const searchPokemon: SearchPokemon = data as SearchPokemon;
                console.log(searchPokemon)
            })
debugger;
    }

    public getPokemonList() {
        this.pokemonService.getPokemonList()
            .subscribe(response => {
                this.pokemons = response;
                console.log(this.pokemons);
            });
    }
}



