import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { ProfileSelectors } from '../../store';

@Component({
  selector: 'ncv-profile',
  templateUrl: './profile.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileComponent {
  readonly data$ = this.store.select(ProfileSelectors.selectData);

  constructor(private store: Store<{}>) {}
}
