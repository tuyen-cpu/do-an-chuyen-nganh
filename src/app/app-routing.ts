import { HomeComponent } from './components/home/home.component';

import { Routes } from '@angular/router';

export const APP_ROUTES: Routes = [
    { path: '', component: HomeComponent },
    {
        path: 'product',

        loadChildren: () => import('./components/product/product-routes').then(({ ProductRoutes }) => ProductRoutes),
    },
    {
        path: 'cart',
        loadComponent: () => import(`./components/cart/cart.component`).then((c) => c.CartComponent),
    },
    {
        title: 'CheckoutPage',
        path: 'checkout',
        loadComponent: () => import(`./components/checkout/checkout.component`).then((c) => c.CheckoutComponent),
    },
];