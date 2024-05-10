import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () =>
      import('./homepage/homepage.component').then(m => m.HomepageComponent),
  },
  {
    path: 'genome',
    loadComponent: () =>
      import('./pages/genome/genome.component').then(m => m.GenomeComponent),
  },
  {
    path: 'gene',
    loadComponent: () =>
      import('./pages/gene/gene.component').then(m => m.GeneComponent),
  },
  {
    path: '404',
    loadComponent: () =>
      import('./pages/not-found/not-found.component').then(
        m => m.NotFoundComponent
      ),
  },
  { path: '**', redirectTo: '404' },
];
