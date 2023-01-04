import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from './title/title.component';
import { ContentComponent } from './content/content.component';
import { ButtonComponent } from './button/button.component';
import { IncorrectoComponent } from './incorrecto/incorrecto.component';
import { CorrectoComponent } from './correcto/correcto.component';



@NgModule({
  declarations: [
    TitleComponent,
    ContentComponent,
    ButtonComponent,
    IncorrectoComponent,
    CorrectoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TitleComponent,
    ContentComponent,
    ButtonComponent,
    IncorrectoComponent,
    CorrectoComponent
  ]
})
export class LoginModule { }
