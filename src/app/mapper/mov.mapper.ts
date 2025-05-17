import { Mov } from "../interfaces/movie.interface";
import { MoviesResponse } from "../interfaces/movies.interfaces";



export class MovMapper {

  static mapMovMapper( item:MoviesResponse ):Mov[] {
    return [{
      Title: item.Title,
      Year: item.Year,
      Rate: item.Rated,
      Runtime: item.Runtime,
      Genre: item.Genre,
      Director: item.Director,
      Actors: item.Actors,
      Plot: item.Plot,
      Poster: item.Poster,
      Ratings: item.Ratings,

    }]
  }
}
