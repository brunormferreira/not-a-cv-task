import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { ProfileFormService } from './profile-form.service';

@Component({
  selector: 'ncv-profile-edit',
  templateUrl: './profile-edit.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ProfileFormService],
})
export class ProfileEditComponent {
  readonly form$ = this.profileFormService.form$;

  constructor(private profileFormService: ProfileFormService) {}

  onSubmitted(form: FormGroup): void {
    this.profileFormService.submit(form);
  }
}
