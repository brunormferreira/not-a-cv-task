import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { components } from './components';
import { pages } from './pages';
import { ProfileRoutingModule } from './profile-routing.module';
import * as fromStore from './store';

@NgModule({
  declarations: [pages, components],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    StoreModule.forFeature(fromStore.profileFeatureKey, fromStore.reducer),
    EffectsModule.forFeature([fromStore.ProfileEffects]),
    MatCardModule,
    MatListModule,
    MatProgressBarModule,
    MatInputModule,
    MatButtonModule,
    ProfileRoutingModule,
  ],
})
export class ProfileModule {}
