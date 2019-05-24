import { Routes } from '@angular/router'
import { HomeComponent } from './components/home/home.component'
import { ClientPageComponent } from './components/client-page/client-page.component'

export const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cliente', component: ClientPageComponent }
]
