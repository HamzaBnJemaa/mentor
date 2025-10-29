import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header';
import { FooterComponent } from './components/footer/footer';
import { LayoutComponent } from './components/layout/layout';

@NgModule({
  imports: [
    CommonModule,
    HeaderComponent,
    FooterComponent,
    LayoutComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    LayoutComponent
  ]
})
export class SharedModule { }
