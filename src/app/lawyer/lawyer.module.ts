import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { LawyerRoutingModule } from './lawyer-routing.module';
import { LawyerComponent } from './lawyer.component';

@NgModule({
  declarations: [LawyerComponent],
  imports: [
    LawyerRoutingModule,
    SharedModule
  ]
})
export class LawyerModule { }

