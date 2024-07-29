# Exo sur angular
Projet: POKEMON 
Objectif :
Créer une application Angular appelée Pokemon qui affiche une liste de Pokémons et permet de voir les détails d'un Pokémon sélectionné dans un modal.

Étapes du Projet :

voici le lien : https://tyradex.tech/api/v1/pokemon

    Créer le Projet Angular : ok
        Utiliser Angular CLI pour créer un nouveau projet appelé Pokemon.

    Installer Bootstrap : ok
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


SUITE de l'EXO:
Ajouter un bouton sur les cartes Pokémon : Intégrez un bouton sur chaque carte Pokémon qui redirige vers une page détaillée affichant les informations spécifiques du Pokémon sélectionné et un autre bouton pour supprimer le pokemon

Mettre en place une page d'erreur 404 : Créez une page d'erreur 404 pour gérer les cas où l'URL demandée n'est pas trouvée.

Concernant le pokedex il faudra mettre une barre de recherche pour trouver et afficher le pokemon avec ses infos sur le pokedex. 
