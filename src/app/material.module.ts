import {NgModule} from "@angular/core";
import { CommonModule } from '@angular/common';
import {
      MatButtonModule,MatToolbarModule,MatIconModule,MatSidenavModule,MatBadgeModule,MatListModule,MatGridListModule,
      MatFormFieldModule,MatInputModule,MatSelectModule,MatRadioModule,MatDatepickerModule,MatNativeDateModule,MatChipsModule,
      MatTooltipModule,MatTableModule,MatPaginatorModule} from '@angular/material';
@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatBadgeModule,
    MatListModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatChipsModule,
    MatTooltipModule,
    MatTableModule,
    MatPaginatorModule
  ],
  exports: [
    CommonModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatBadgeModule,
    MatListModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatChipsModule,
    MatTooltipModule,
    MatTableModule,
    MatPaginatorModule
   ],
})
export class CustomMaterialModule { }