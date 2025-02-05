import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimalsComponent } from './animals.component';
import { CatsComponent } from './cats/cats.component';
import { DogsComponent } from './dogs/dogs.component';
import { AnimalsRoutingModule } from './animals-routing.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AnimalsComponent, CatsComponent, DogsComponent], // Itt be kell deklarálni minden komponenst
  imports: [CommonModule, RouterModule,
    AnimalsRoutingModule],
})
export class AnimalsModule {}

