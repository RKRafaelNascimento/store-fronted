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
  MatMenuModule
} from '@angular/material'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { FormsModule } from '@angular/forms'
@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatOptionModule,
    MatInputModule,
    MatButtonModule,
    MatMenuModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
