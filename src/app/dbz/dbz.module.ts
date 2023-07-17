import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
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
    CommonModule,
    FormsModule
  ]
})
export class DbzModule { }
