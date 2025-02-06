import { Routes } from '@angular/router';
import { DefaultLayoutComponent } from './layout';
import { authGuard } from './auth.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },

  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home'
    },
    canActivate : [authGuard],
    children: [
    
      {
        path: 'myViews',
        loadChildren: () => import('./views/myViews/routes').then((m) => m.routes)
      }
    ]
  },
  {
    path: '404',
    loadComponent: () => import('./views/pages/page404/page404.component').then(m => m.Page404Component),
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '500',
    loadComponent: () => import('./views/pages/page500/page500.component').then(m => m.Page500Component),
    data: {
      title: 'Page 500'
    }
  },
  {
    path: 'login',
    loadComponent: () => import('./views/pages/login/login.component').then(m => m.LoginComponent),
    data: {
      title: 'Login Page'
    }
  },
  // {
  //   path: 'register',
  //   loadComponent: () => import('./views/pages/register/register.component').then(m => m.RegisterComponent),
  //   data: {
  //     title: 'Register Page'
  //   }
  // },
  {
    path: 'home',
    loadComponent: () => import('./views/pages/home/home.component').then(m => m.HomeComponent),
    canActivate : [authGuard],
    data: {
      title: 'Home Page'
    }
  },
  {
    path: 'second',
    loadComponent: () => import('./views/pages/second/second.component').then(m => m.SecondComponent),
    canActivate : [authGuard],
    data: {
      title: '2nd Page'
    }
  },
  {
    path: 'third',
    loadComponent: () => import('./views/pages/third/third.component').then(m => m.ThirdComponent),
    canActivate : [authGuard],
    data: {
      title: '3rd Page'
    }
  },
  {
    path: 'fourth',
    loadComponent: () => import('./views/pages/fourth/fourth.component').then(m => m.FourthComponent),
    canActivate : [authGuard],
    data: {
      title: '4th Page'
    }
  },
  {
    path: 'fifth',
    loadComponent: () => import('./views/pages/fifth/fifth.component').then(m => m.FifthComponent),
    canActivate : [authGuard],
    data: {
      title: '5th Page'
    }
  },
  { path: '**', redirectTo: 'login' }
];
