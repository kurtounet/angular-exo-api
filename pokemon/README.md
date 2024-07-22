# Exo sur angular
Projet: POKEMON 
Objectif :
Créer une application Angular appelée Pokemon qui affiche une liste de Pokémons et permet de voir les détails d'un Pokémon sélectionné dans un modal.

Étapes du Projet :

voici le lien : https://tyradex.tech/api/v1/pokemon

    Créer le Projet Angular :
        Utiliser Angular CLI pour créer un nouveau projet appelé Pokemon.

    Installer Bootstrap :
        Installer Bootstrap pour styliser les composants de l'application (carrousel, cards, etc.) ou CSS full

Créer les Composants : 
Créer un composant HomeComponent pour la page d'accueil qui affiche un carrousel et des cards de Pokémons.
  Afficher un carrousel avec des images.
  Afficher des cards de 3 Pokémons du même type.
  Inclure un bouton sur chaque card pour afficher les détails du Pokémon dans un modal.
Créer un composant ListPokemonComponent pour afficher une liste de 20 Pokémons.
Créer un composant PokemonDetailsComponent pour afficher les détails d'un Pokémon dans un modal.

Créer le Service et les Interfaces :
 
Créer un service PokemonService pour gérer les opérations sur les Pokémons (fetch, détails).
Définir l'interface IPokemon pour représenter un Pokémon:
pokedex_id, name( en fr), sprites, types(afficher les images des 2 types), talents, les stats et les evolutions 










# Pokemon

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.1.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
