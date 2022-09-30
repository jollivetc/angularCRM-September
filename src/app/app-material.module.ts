import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSelectModule } from '@angular/material/select'

const materialModules = [MatInputModule, MatFormFieldModule, MatButtonModule, MatToolbarModule, MatIconModule, MatTooltipModule, MatSelectModule]

@NgModule({
  declarations: [],
  imports: materialModules,
  exports: materialModules
})
export class AppMaterialModule { }
