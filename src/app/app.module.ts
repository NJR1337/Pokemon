import { NgModule } from '@angular/core';

import { BrowserModule, Title } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PokemonCardComponent } from './pokemon-card/pokemon-card.component';
import { CatImageComponent } from './cat-image/cat-image.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { SearchPokemonComponent } from './search-pokemon/search-pokemon.component';


export class Pokemon {
  constructor(
    public name: String,
    public url: String
  ) { }
}


@NgModule({
  declarations: [
    AppComponent,
    PokemonCardComponent,
    CatImageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
