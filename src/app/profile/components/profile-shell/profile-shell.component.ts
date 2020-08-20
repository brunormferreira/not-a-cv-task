import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { ProfileActions, ProfileSelectors } from '../../store';

@Component({
  selector: 'ncv-profile-shell',
  templateUrl: './profile-shell.component.html',
  styleUrls: ['./profile-shell.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileShellComponent implements OnInit {
  readonly pending$ = this.store.select(ProfileSelectors.selectPending);
  readonly data$ = this.store.select(ProfileSelectors.selectData);
  readonly error$ = this.store.select(ProfileSelectors.selectError);

  constructor(private store: Store<{}>) {}

  ngOnInit(): void {
    this.store.dispatch(ProfileActions.checkData());
  }
}
