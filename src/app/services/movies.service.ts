




import { HttpClient } from '@angular/common/http';
import { inject, Injectable, OnInit, signal } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { MoviesResponse } from '../interfaces/movies.interfaces';
import { MovMapper } from '../mapper/mov.mapper';
import { Mov } from '../interfaces/movie.interface';

@Injectable({providedIn: 'root'})
export class MoviesService implements OnInit {


  private http = inject(HttpClient);
  showMovie = signal<Mov[]>([])


  constructor(){
    this.loadMovies();
    console.log('servicio creado')
  }


  loadMovies(){

   return this.http.get<MoviesResponse>(`${environment.movieURL}`,{
      params:{
        i: environment.unknownParam,
        apiKey: environment.moviesApiKey,

      },}
    ).subscribe((resp) => {
      const movie = MovMapper.mapMovMapper(resp);
      this.showMovie.set(movie);

    })

  }
 // http://www.omdbapi.com/?i=tt3896198&t=''Title''&apikey=c5d494eb
  // searchMovieByName( movieName:string){
  //   return this.http.get<string>(`${environment.movieURL}`,
  //     {
  //       params:{
  //         i: environment.unknownParam,
  //         t:movieName,
  //         apiKey: environment.moviesApiKey,
  //       }

  //     }
  //   );

  // }

searchMovieByName(movieName: string) {
  return this.http.get<Mov>(`${environment.movieURL}`, {
    params: {
      t: movieName,
      apiKey: environment.moviesApiKey,
    }
  });
}
  ngOnInit(){
    this.loadMovies();
    console.log('csdcsd')
  }

}
