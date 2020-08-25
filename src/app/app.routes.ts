import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'search', component: BusquedaComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
]

export const app_routing = RouterModule.forRoot(routes);