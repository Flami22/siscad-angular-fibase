import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSliderModule } from '@angular/material/slider';
import { AppRoutingModule } from './app-routing.module';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { AngularFireModule } from "@angular/fire/compat";

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { LoginComponent } from './components/login/login.component';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CadastroComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    MatSliderModule,
    MatToolbarModule,
    MatIconModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatInputModule,
    AngularFireModule.initializeApp(environment.firebase) ,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
