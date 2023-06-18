import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './pages/main-page.componet';
import { ListCharactersComponent } from './components/list/list.component';
import { AddCharacterComponent } from './components/add/add.component';



@NgModule({
  declarations: [
    MainPageComponent,
    ListCharactersComponent,
    AddCharacterComponent
  ],
  exports: [
    MainPageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DbzModule { }
