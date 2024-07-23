import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Error404Component } from './error404/error404.component';
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';

export const routes: Routes = [
    { path: '', component: HomeComponent    },
    { path: 'pokemon/:id', component: PokemonDetailsComponent    },
    { path: '**', component: Error404Component    }
];
