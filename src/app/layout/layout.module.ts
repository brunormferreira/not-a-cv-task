import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';

import { components, ShellComponent } from './components';

@NgModule({
  declarations: [components],
  imports: [CommonModule, RouterModule, MatToolbarModule],
  exports: [ShellComponent],
})
export class LayoutModule {}
