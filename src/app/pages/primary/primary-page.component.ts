import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'primary-page',
  imports: [RouterLinkActive, RouterLink, RouterOutlet],
  templateUrl: './primary-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class PrimaryPageComponent {

}
