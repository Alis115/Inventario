import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';

// Configuaracion de firebase
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';

// Configuaracion de modulos de firebase
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

// Importar servicios

import { ConexionService } from './services/conexion.service';

const routes: Routes = [
  { path: '', component: InicioComponent, pathMatch: 'full' },
  { path: '**', redirectTo: '/Inicio', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule, // imports firebase/storage only needed for storage features
    FormsModule
  ],
  providers: [
    ConexionService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
