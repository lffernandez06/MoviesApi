import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'card-component',
  imports: [],
  templateUrl: './card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent { }
