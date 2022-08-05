import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { TesstComponent } from './components/tesst/tesst.component';

const routes: Routes = [
    { path: '', component: TesstComponent },
    {
        path: 'product',
        loadChildren: () => import(`./components/product/product.module`).then((module) => module.ProductModule),
    },
    {
        path: 'cart',
        loadChildren: () => import(`./components/cart/cart.module`).then((module) => module.CartModule),
    },
    {
        path: 'checkout',
        loadChildren: () => import(`./components/checkout/checkout.module`).then((module) => module.CheckoutModule),
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {
            preloadingStrategy: PreloadAllModules,
        }),
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {}
