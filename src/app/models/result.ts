import { Pokemon } from "../app.module";

export interface Results {
    count: number;
    next: string;
    previous?: any;
    results: Pokemon[];
}