
// // pokedex_id, 
// // name( en fr), 
// // sprites, 
// // types(afficher les images des 2 types), 
// // talents,
// // stats
// // evolutions 
// export interface stat {     
//     hp: number;
//     atk: number;
//     def: number;
//     spe_atk: number;
//     spe_def: number;
//     vit: number;     
// }
// export interface next{
//     pokedex_id: number,
//     name: string,
//     condition: string 

// }
// 
// export interface name{     
//     name: string,
// }
// export interface Ipokemon{
//     pokedex_id: number ;    
//      name: {
//          fr: string
//         };
//     //     ];
//     // sprites: [];
//     // types: [];
//     // talents: [];
//     // stats: [];     
//     // evolution:[];     
//   }

export interface next {     
    pokedex_id: number;
    name: string;
    condition: string;
         
}
export interface evolution {     
    pre: [] | null;
    next: next[] | null;
    mega: [] | null;
         
}
export interface ITalents {
  name: string;
  tc:boolean;

}
 
export interface ITypes {
  name: string;
  image:string;

}
export interface Igmax {
  images: string[];
  
}
export interface IPokemon   {
  pokedex_id: number;
  generation: number;
  category: string;
  name: {
    fr: string;
    en: string;
    jp: string;
  };
  sprites: {
    regular: string;
    shiny: string | null;
    gmax: Igmax | null;
  };
  types:ITypes[] | null;
  talents: ITalents[] | null;
  stats: any | null;
  resistances: any | null;
  evolution: any | null;
  height: string | null;
  weight: string | null;
  egg_groups: string[] | null;
  sexe: any | null;
  catch_rate: number | null;
  level_100: number | null;
  formes: any | null;

}