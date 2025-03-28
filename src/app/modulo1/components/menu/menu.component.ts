import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { OptionsComponent } from "./options/options.component";

@Component({
  selector: 'app-menu',
  imports: [HeaderComponent, OptionsComponent],
  templateUrl: './menu.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuComponent { }
