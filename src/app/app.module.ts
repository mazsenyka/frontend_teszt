import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileModule } from './pages/profile/profile.module'; // ProfileModule importálása
import { InformationModule } from './pages/information/information.module'; // InformationModule importálása
import { AnimalsModule } from './pages/animals/animals.module'; // AnimalsModule importálása
import { CatsComponent } from './pages/animals/cats/cats.component'; // Csak ha közvetlenül itt is használni akarod
import { DogsComponent } from './pages/animals/dogs/dogs.component'; // Csak ha közvetlenül itt is használni akarod
import { ContactComponent } from './pages/information/contact/contact.component'; // Csak ha közvetlenül itt is használni akarod
import { HowitworksComponent } from './pages/information/howitworks/howitworks.component';
import { AuthComponent } from './pages/auth/auth.component';
import { CatProfileComponent } from './pages/animals/cats/cat-profile/cat-profile.component'; // Csak ha közvetlenül itt is használni akarod
import { DogProfileComponent } from './pages/animals/dogs/dog-profile/dog-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    CatProfileComponent,
    DogProfileComponent
    // Ide csak azokat a komponenseket rakd, amelyeket itt használni szeretnél közvetlenül
    // Ha a ProfileModule-ban van deklarálva, nem kell itt deklarálni
    // Ha a CatsComponent vagy DogsComponent kell az AppModule-ba, akkor tartsd meg itt.
    // Ha nem kell, akkor vedd ki innen.
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, // Az AppRoutingModule-ot nem szabad törölni, ha routing van
    RouterModule, // A router-t is importálni kell
    ProfileModule, // Az összes szükséges modul importálása
    InformationModule,
    AnimalsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
