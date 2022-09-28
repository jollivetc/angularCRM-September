import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button'
import { MatToolbarModule } from '@angular/material/toolbar'

const materialModules = [MatInputModule, MatFormFieldModule, MatButtonModule, MatToolbarModule]

@NgModule({
  declarations: [],
  imports: materialModules,
  exports: materialModules
})
export class AppMaterialModule { }
