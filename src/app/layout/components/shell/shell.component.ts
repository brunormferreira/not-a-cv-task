import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ncv-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShellComponent {}
