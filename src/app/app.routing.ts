import { Routes } from '@angular/router'
import { HomeComponent } from './components/home/home.component'
import { ClientPageComponent } from './components/client-page/client-page.component'
import { NewUserComponent } from './components/new-user/new-user.component'

export const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cliente', component: ClientPageComponent },
  { path: 'cadastro', component: NewUserComponent }
]
