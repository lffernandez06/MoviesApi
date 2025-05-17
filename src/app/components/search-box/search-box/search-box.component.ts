import { ChangeDetectionStrategy, Component, inject, output } from '@angular/core';
import { MoviesService } from '../../../services/movies.service';

@Component({
  selector: 'search-box',
  imports: [],
  templateUrl: './search-box.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchBoxComponent {



  moviesService = inject(MoviesService);
  movieByName = output<string>();

  onSeacrh(query:string) {
    this.movieByName.emit(query)

}
}
