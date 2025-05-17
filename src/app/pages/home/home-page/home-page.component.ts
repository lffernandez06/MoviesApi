import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CardComponent } from "../../../components/card/card.component";

@Component({
  selector: 'home-page',
  imports: [CardComponent],
  templateUrl: './home-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent { }
