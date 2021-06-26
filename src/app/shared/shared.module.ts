import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './../material.module';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [HeaderComponent],
  imports: [MaterialModule, CommonModule, FormsModule, ReactiveFormsModule],
  exports: [HeaderComponent],
})
export class SharedModule {}
