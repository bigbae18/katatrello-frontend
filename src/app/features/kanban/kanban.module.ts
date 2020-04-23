import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KanbanRoutingModule } from './kanban-routing.module';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    KanbanRoutingModule
  ]
})
export class KanbanModule { }
