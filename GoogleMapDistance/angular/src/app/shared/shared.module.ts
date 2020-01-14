import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgmDirectionDirective } from './google-map/direction/agm-direction.directive';
import { AutocompleteComponent } from './google-map/autocomplete/autocomplete.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [AgmDirectionDirective, AutocompleteComponent],
  imports: [CommonModule, FormsModule],
  exports: [AgmDirectionDirective, AutocompleteComponent]
})
export class SharedModule {}
