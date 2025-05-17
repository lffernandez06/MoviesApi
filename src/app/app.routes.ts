import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home/home-page/home-page.component';
import { ProfilePageComponent } from './pages/profile/profile-page/profile-page.component';
import { SettingsPageComponent } from './pages/settings/settings-page/settings-page.component';

export const routes: Routes = [


  {
    path:'primary',
    loadComponent:() =>
      import('./pages/primary/primary-page.component') ,
    children:[
      {

    path: 'home',
    component: HomePageComponent,

  },

   {

    path: 'profile',
    component: ProfilePageComponent,

  },
  {

    path: 'settings',
    component: SettingsPageComponent,

  }


    ]
  },


];
