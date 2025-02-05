import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AnimalsComponent } from './pages/animals/animals.component';
import { CatsComponent } from './pages/animals/cats/cats.component';
import { DogsComponent } from './pages/animals/dogs/dogs.component';
import { InformationComponent } from './pages/information/information.component';
import { ContactComponent } from './pages/information/contact/contact.component';
import { HowitworksComponent } from './pages/information/howitworks/howitworks.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { MydataComponent } from './pages/profile/mydata/mydata.component';
import { FavoritesComponent } from './pages/profile/favorites/favorites.component';
import { ReservationsComponent } from './pages/profile/reservations/reservations.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { 
    path: 'animals', 
    component: AnimalsComponent, 
    children: [
      { path: 'cats', component: CatsComponent },
      { path: 'dogs', component: DogsComponent },
    ] 
  },
  { 
    path: 'information', 
    component: InformationComponent, 
    children: [
      { path: 'contact', component: ContactComponent },
      { path: 'howitworks', component: HowitworksComponent },
    ] 
  },
  { 
    path: 'profile', 
    component: ProfileComponent, 
    children: [
      { path: 'mydata', component: MydataComponent },
      { path: 'favorites', component: FavoritesComponent },
      { path: 'reservations', component: ReservationsComponent },
    ] 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
