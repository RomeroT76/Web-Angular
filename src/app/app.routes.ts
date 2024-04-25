import { Routes } from '@angular/router';
import { SumaComponent } from './pages/calculadora/suma.component';
import { RestaComponent } from './pages/inicio/resta.component';
import { AcercadeComponent } from './pages/sobrenosotros/acercade.component';
import { OperacionesComponent } from './pages/operaciones/operaciones.component';

export const routes: Routes = [
    {path: 'suma', title: 'Calculadora', component: SumaComponent},
    {path: 'resta', title: 'Inicio', component: RestaComponent},
    {path: 'acercade', title: 'Sobre Nosotros', component: AcercadeComponent},
    {path: 'operaciones', title: 'Operaciones', component: OperacionesComponent},
];
