import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

import { ProfileData } from '../../profile.model';
import { ProfileActions, ProfileSelectors } from '../../store';

@Injectable()
export class ProfileFormService {
  readonly form$: Observable<FormGroup> = this.getForm$();

  constructor(private fb: FormBuilder, private store: Store<{}>) {}

  submit(form: FormGroup): void {
    form.markAllAsTouched();

    if (form.valid) {
      this.store.dispatch(ProfileActions.update({ data: form.value }));
    }
  }

  private getForm$(): Observable<FormGroup> {
    return this.store.select(ProfileSelectors.selectData).pipe(
      filter((data) => !!data),
      map((data) => this.buildForm(data))
    );
  }

  private buildForm({ basicInfo, additionalInfo }: ProfileData): FormGroup {
    return this.fb.group({
      basicInfo: this.fb.group({
        firstName: [basicInfo.firstName, Validators.required],
        lastName: [basicInfo.lastName, Validators.required],
        email: [basicInfo.email, [Validators.required, Validators.email]],
      }),
      additionalInfo: this.fb.group({
        baseTechnology: [additionalInfo.baseTechnology, Validators.required],
        superhero: additionalInfo.superhero,
      }),
    });
  }
}
