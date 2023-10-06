import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PresentationRoutingModule } from './presentation-routing.module';
import { UpdatePage } from './pages/update/update.page';
import { CardComponent } from './components/card/card.component';
import { SharedModule } from '../shared/shared.module';
import { DemonstrationPage } from './pages/demonstration/demonstration.page';
import { WelcomePage } from './pages/welcome/welcome.page';


@NgModule({
  declarations: [
    UpdatePage,
    CardComponent,
    DemonstrationPage,
    WelcomePage
  ],
  imports: [
    CommonModule,
    PresentationRoutingModule,
    SharedModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PresentationModule { }
