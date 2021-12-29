import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';

import { IndexComponent } from 'src/app/pages/alumno/index/index.component';
import { CreateComponent } from 'src/app/pages/alumno/create/create.component';
import { EditComponent } from 'src/app/pages/alumno/edit/edit.component';
import { DetailsComponent } from 'src/app/pages/alumno/details/details.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'user-profile', component: UserProfileComponent },
    { path: 'tables', component: TablesComponent },
    { path: 'icons', component: IconsComponent },
    { path: 'maps', component: MapsComponent },
    { path: 'alumno', redirectTo: 'alumno/index', pathMatch: 'full' },
    { path: 'alumno/index', component: IndexComponent },
    { path: 'alumno/create', component: CreateComponent },
    { path: 'alumno/edit/:idAlumno', component: EditComponent },
    { path: 'alumno/details/:idAlumno', component: DetailsComponent }
];
