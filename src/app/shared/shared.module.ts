/*
 * Shared module
 * containes shared modules, components, pipes and directives.
 * - is loaded eagerly and should not contain any feature-specific content.
 * - is imported by all feature modules.
*/
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomMaterialModule } from './material.module';
import { TruncatePipe } from './pipes/truncate.pipe';


@NgModule({
  declarations: [
    TruncatePipe
  ],
  exports: [
    CommonModule,
    HttpClientModule,
    CustomMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    TruncatePipe
  ]
})
export class SharedModule { }

