import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ncv-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {}
