import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { TodoComponent } from './todo.component';

@NgModule({
  imports: [
    SharedModule
  ],
  exports: [
    TodoComponent
  ],
  declarations: [
    TodoComponent
  ]
})
export class TodoModule { }
