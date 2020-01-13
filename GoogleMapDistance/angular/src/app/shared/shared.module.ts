import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgmDirectionDirective } from './google-map/direction/agm-direction.directive';
import { AutocompleteComponent } from './google-map/autocomplete/autocomplete.component';

@NgModule({
  declarations: [AgmDirectionDirective, AutocompleteComponent],
  imports: [CommonModule],
  exports: [AgmDirectionDirective]
})
export class SharedModule {}
