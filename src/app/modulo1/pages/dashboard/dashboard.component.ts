import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from "../../components/menu/menu.component";

@Component({
  selector: 'app-dashboard',
  imports: [RouterOutlet, MenuComponent],
  templateUrl: './dashboard.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class DashboardComponent { }
