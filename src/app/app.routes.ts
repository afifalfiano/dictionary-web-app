import { Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: '',
    loadComponent: () => import('./home/home.component').then(m => m.HomeComponent),
  },
  {
    path: 'bookmark',
    loadComponent: () => import('./bookmark/bookmark.component').then(m => m.BookmarkComponent),
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];
