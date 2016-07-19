import { provideRouter, RouterConfig } from '@angular/router';
import { ContactComponent }  from './contact.component';
import { HomeComponent }  from './home.component';
import { AboutComponent }  from './about.component';

const routes: RouterConfig = [
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent }
];

export const appRouterProviders = [
    provideRouter(routes)
];
