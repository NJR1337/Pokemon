import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Pokemon } from "../app.module";
import { Results } from "../models/result";
import { Observable } from "rxjs";
import { map } from "rxjs";


@Injectable({
    providedIn: 'root'
})
export class PokemonService {
    constructor(private http: HttpClient) { }

    public getPokemonList(): Observable<Pokemon[]> {

        return this.http.get<any>("https://pokeapi.co/api/v2/pokemon")
            .pipe(
                map((data: Results) => {
                    return data.results;
                }),
            );

    }

    public getPokemonDetails(url: string): Observable<string> {
        console.log(url);
        return this.http.get<any>(url)
            .pipe(
                map((dataDetail: string) => {
                    return dataDetail;
                }),
            );
    }

}