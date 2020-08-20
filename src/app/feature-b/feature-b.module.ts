import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FeatureBRoutingModule } from './feature-b-routing.module';
import { FeatureBComponent } from './feature-b.component';

@NgModule({
  declarations: [FeatureBComponent],
  imports: [CommonModule, FeatureBRoutingModule],
})
export class FeatureBModule {}
