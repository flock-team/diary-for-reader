import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LibraryRoutingModule } from './library-routing.module';
import { LibraryComponent } from './library/library.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';
import { RemoveDialogComponent } from './remove-dialog/remove-dialog.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LibrarySearchResultsComponent } from './library-search-results/library-search-results.component';
import { LibrarySearchComponent } from './library-search/library-search.component';

@NgModule({
  declarations: [
    LibraryComponent,
    RemoveDialogComponent,
    LibrarySearchResultsComponent,
    LibrarySearchComponent,
  ],
  imports: [
    CommonModule,
    LibraryRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatDialogModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class LibraryModule {}
