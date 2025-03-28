import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-options',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './options.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OptionsComponent { 
  menuOptions = [
    {
      icon: 'fa-solid fa-chart-line',
      label: 'productos',
      route: 'dashboard/productos',
      description: 'lista de productos',
    },
    {
      icon: 'fa-solid fa-magnifying-glass',
      label: 'Busqueda',
      route: 'dashboard/buscar',
      description: 'Buscar productos',
    }
  ]

}
