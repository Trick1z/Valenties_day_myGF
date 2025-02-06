import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '404',
    loadComponent: () => import('./page404/page404.component').then(m => m.Page404Component),
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '500',
    loadComponent: () => import('./page500/page500.component').then(m => m.Page500Component),
    data: {
      title: 'Page 500'
    }
  },
  {
    path: 'register',
    loadComponent: () => import('./register/register.component').then(m => m.RegisterComponent),
    data: {
      title: 'Register Page'
    }
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.component').then(m => m.LoginComponent),
    data: {
      title: 'Login Page'
    }
  },
  {
    path: 'home',
    loadComponent: () => import('./home/home.component').then(m => m.HomeComponent),
    data: {
      title: 'Home Page'
    }
  },
  {
    path: 'second',
    loadComponent: () => import('./second/second.component').then(m => m.SecondComponent),
    data: {
      title: '2nd Page'
    }
  },
  {
    path: 'third',
    loadComponent: () => import('./third/third.component').then(m => m.ThirdComponent),
    data: {
      title: '3rd Page'
    }
  },
  {
    path: 'fifth',
    loadComponent: () => import('./fourth/fourth.component').then(m => m.FourthComponent),
    data: {
      title: '4th Page'
    }
  },
  {
    path: 'fifth',
    loadComponent: () => import('./fifth/fifth.component').then(m => m.FifthComponent),
    data: {
      title: '5th Page'
    }
  },
];
