import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-list-products',
  imports: [],
  templateUrl: './list-products.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListProductsComponent { }
