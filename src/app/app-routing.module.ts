import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchPokemonComponent } from './search-pokemon/search-pokemon.component';


const routes: Routes = [
  {path: 'search-pokemon-component', component: SearchPokemonComponent, pathMatch: 'full',
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
