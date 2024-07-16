import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { CaseRoutingModule } from './case-routing.module';
import { CaseComponent } from './case.component';

@NgModule({
  declarations: [CaseComponent],
  imports: [
    CaseRoutingModule,
    SharedModule
  ]
})
export class CaseModule { }

