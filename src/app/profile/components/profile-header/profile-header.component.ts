import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ncv-profile-header',
  templateUrl: './profile-header.component.html',
  styleUrls: ['./profile-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileHeaderComponent {}
