import { AdminComponent } from './admin.component';
import { Routes } from '@angular/router';
import { ProductManagerComponent } from './product-manager/product-manager.component';

export const AdminRoutes: Routes = [
    {
        path: '',
        component: AdminComponent,
        children: [
            { path: '', redirectTo: 'product', pathMatch: 'full' },
            {
                path: 'product',
                component: ProductManagerComponent,
            },
        ],
    },
];
