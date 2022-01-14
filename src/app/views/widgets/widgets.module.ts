import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  ButtonModule,
  CardModule,
  DropdownModule,
  GridModule,
  ProgressModule,
  SharedModule,
  WidgetModule
} from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';
import { ChartjsModule } from '@coreui/angular-chartjs';

import { ComponentsModule } from '../../../components/components.module';

import { WidgetsRoutingModule } from './widgets-routing.module';
import { ChartSample, WidgetsDropdownComponent } from './widgets-dropdown/widgets-dropdown.component';

@NgModule({
  declarations: [
    WidgetsDropdownComponent,
    ChartSample,
  ],
  imports: [
    CommonModule,
    WidgetsRoutingModule,
    GridModule,
    WidgetModule,
    IconModule,
    DropdownModule,
    SharedModule,
    ButtonModule,
    CardModule,
    ComponentsModule,
    ProgressModule,
    ChartjsModule
  ],
  exports: [
    WidgetsDropdownComponent
  ]
})
export class WidgetsModule {
}
