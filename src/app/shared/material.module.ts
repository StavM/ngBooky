/*
 * Material Module
 * module imports and exports material-2's components to be used across booky.
*/
import { NgModule } from '@angular/core';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTreeModule } from '@angular/material/tree';

@NgModule({
  exports: [
     MatButtonModule,
     MatCheckboxModule,
     MatTableModule,
     MatRadioModule,
     MatProgressSpinnerModule,
     MatListModule,
     MatSlideToggleModule,
     MatCardModule,
     MatInputModule,
     MatIconModule,
     MatTooltipModule,
     MatSelectModule,
     MatMenuModule,
     MatSnackBarModule,
     MatTabsModule,
     MatExpansionModule,
     MatDialogModule,
     MatSortModule,
     MatPaginatorModule,
     MatDatepickerModule,
     MatAutocompleteModule,
     MatSidenavModule,
     MatToolbarModule,
     MatChipsModule,
     MatTreeModule,
     MatProgressBarModule,
     MatStepperModule,
     MatBadgeModule
    ]
})
export class CustomMaterialModule { }

