import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo:'HomePage',
        pathMatch: 'full'
,
        // data: {
        //     title: 'Home Page'

        // }
    },{
        path: 'HomePage',
        loadComponent: () => import('./home-page/home-page.component').then(m => m.HomePageComponent),
        data: {
            title: 'Home Page'

        }
    }
];


