import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { ProfileData } from './../../profile.model';

@Component({
  selector: 'ncv-profile-sections',
  templateUrl: './profile-sections.component.html',
  styleUrls: ['./profile-sections.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileSectionsComponent {
  @Input() data: ProfileData;
}
