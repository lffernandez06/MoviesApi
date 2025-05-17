import { ChangeDetectionStrategy, Component, computed, inject, OnInit, signal } from '@angular/core';
import { MoviesService } from '../../../services/movies.service';
import { Mov } from '../../../interfaces/movie.interface';
import { SearchBoxComponent } from "../../../components/search-box/search-box/search-box.component";

@Component({
  selector: 'app-profile-page',
  imports: [SearchBoxComponent],
  templateUrl: './profile-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfilePageComponent implements OnInit {


  moviesServices = inject(MoviesService);
  showMovieOnScreem = signal<Mov[]>([]);
  movieByName = signal<string>('');
  movieByTitle = signal<string>('');

  //   constructor(private moviesService: MoviesService) {
  //   this.moviesService.loadMovies();
  // }

  // filterMovieByTitle = computed(() =>
  //   this.showMovieOnScreem().filter( resp =>

  //    resp.Title.toLowerCase().startsWith(this.movieByName()),

  //   )
  // );
//   filterMovieByTitle = computed(() =>
//   this.showMovieOnScreem().filter((resp) =>
//     resp.Title.toLowerCase().startsWith(this.movieByTitle().toLowerCase())
//   )
// );


filterMovieByTitle = computed(() =>
  this.showMovieOnScreem().filter(
  (resp) =>
    !!resp.Title &&
    resp.Title.toLowerCase().startsWith(this.movieByTitle().toLowerCase())
)
);

  showMovies(){

    const a = this.showMovieOnScreem.set(this.moviesServices.showMovie())
    console.log(a)
  }

  loadmoviesBySeacrh(title:string){
    return this.moviesServices.searchMovieByName(title).subscribe((resp)=>{
      this.showMovieOnScreem.set([resp])
    })

  }

  onSeacrh( movieTitle : string){
    this.movieByTitle.set(movieTitle);
  }
  ngOnInit(): void {
      this.showMovies();
  }
}
