import { Routes, RouterModule } from '@angular/router';

import { IdeiaComponent } from './ideia/ideia.component';
import { ProblemaComponent } from './problema/problema.component';
import { ModuleWithProviders } from '@angular/core';

const APP_ROUTES: Routes = [
    { path: '', component: IdeiaComponent },
    { path: 'ideia', component: IdeiaComponent},
    { path: 'problema', component: ProblemaComponent}
    
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);