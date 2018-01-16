import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { TodoDataService } from './services/todo-data.service';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [],
  providers: [
    TodoDataService
  ]
})
export class CoreModule { }
