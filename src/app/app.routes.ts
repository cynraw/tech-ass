import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    title: 'Auth page',
  },
  {
    path: '',
    component: HomeComponent,
    title: 'Home details',
  },
];
