import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/profile',
    pathMatch: 'full',
  },
  {
    path: 'feature-a',
    loadChildren: () =>
      import('./feature-a/feature-a.module').then((m) => m.FeatureAModule),
  },
  {
    path: 'feature-b',
    loadChildren: () =>
      import('./feature-b/feature-b.module').then((m) => m.FeatureBModule),
  },
  {
    path: 'profile',
    loadChildren: () =>
      import('./profile/profile.module').then((m) => m.ProfileModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
