import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'ncv-profile-section',
  templateUrl: './profile-section.component.html',
  styleUrls: ['./profile-section.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileSectionComponent {
  @Input() title: string;
}
