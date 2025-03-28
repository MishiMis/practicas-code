import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-product-item',
  imports: [],
  templateUrl: './product-item.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductItemComponent { }
