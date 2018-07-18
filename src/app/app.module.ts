import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CreatCountComponent } from './creat-count/creat-count.component';
import { DiscutionComponent } from './discution/discution.component';

@NgModule({
  declarations: [
    AppComponent,
    CreatCountComponent,
    DiscutionComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([/*permet d'indiquer au module les changement de page*/
      {
        path: 'crea-count', /*permet de pointer sur le component newrott*/
        component: NewrottComponent
      }
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
