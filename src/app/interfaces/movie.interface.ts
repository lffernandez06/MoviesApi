import { Rating } from "./movies.interfaces";



export interface Mov {

  Title: string,
  Year: string,
  Rate:string,
  Runtime: string,
  Genre: string,
  Director: string,
  Actors: string,
  Plot: string,
  Poster: string,
  Ratings: Rating[],

}
