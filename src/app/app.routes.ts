import { Routes } from '@angular/router';

import { MainContainerComponent } from './core/containers/main-container/main-container.component';
import { UserAuthGuard } from './core/guards/user-auth.guard';
import { IntroPageComponent } from './pages/intro-page/intro-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';

export const routes: Routes = [
  { path: '', redirectTo: 'intro', pathMatch: 'full' },
  { path: 'intro', component: IntroPageComponent },
  { path: 'login', component: LoginPageComponent },
  {
    path: 'main', component: MainContainerComponent, children: [
      { path: '', redirectTo: 'books', pathMatch: 'full' },
      {
        path: 'books',
        loadChildren: () => import('./pages/books-page/books.module').then(m => m.BooksModule),
        canLoad: [UserAuthGuard]
      },
      { path: '**', redirectTo: '/' }
    ]
  },
  { path: '**', component: IntroPageComponent },

];
