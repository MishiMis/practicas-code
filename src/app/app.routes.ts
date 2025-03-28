import { Routes } from '@angular/router';
import path from 'path';

export const routes: Routes = [
    {
        path: 'dashboard',
        loadComponent: () => import('./modulo1/pages/dashboard/dashboard.component'),
        children: [
            {
                path:'productos',
                loadComponent: () => import('./modulo1/pages/productos/productos.component')
            },
            {
                path:'buscar',
                loadComponent: () => import('./modulo1/pages/busqueda/busqueda.component')
            },
            {
                path:'**',
                redirectTo:'productos'
            }
            
        ]
    },
    {
        path: '**',
        redirectTo: 'dashboard'
    }
];
