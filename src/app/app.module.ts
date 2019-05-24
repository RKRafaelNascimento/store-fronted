import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { ReactiveFormsModule } from '@angular/forms'
import { AppComponent } from './app.component'
import { HeaderComponent } from './components/header/header.component'
import {
  MatFormFieldModule,
  MatAutocompleteModule,
  MatOptionModule,
  MatInputModule,
  MatButtonModule,
  MatMenuModule,
  MatCardModule
} from '@angular/material'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { FormsModule } from '@angular/forms'
import { HomeComponent } from './components/home/home.component'
import { ProductCardComponent } from './components/product-card/product-card.component'
import { FooterComponent } from './components/footer/footer.component'
import { NgxPaginationModule } from 'ngx-pagination'
import { HttpClientModule } from '@angular/common/http'
import { ProductService } from './shared/services/product.service'
import { ROUTES } from './app.routing'
import { RouterModule } from '@angular/router';
import { ClientPageComponent } from './components/client-page/client-page.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ProductCardComponent,
    FooterComponent,
    ClientPageComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatOptionModule,
    MatInputModule,
    MatButtonModule,
    MatMenuModule,
    MatCardModule,
    BrowserAnimationsModule,
    FormsModule,
    NgxPaginationModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule {}
