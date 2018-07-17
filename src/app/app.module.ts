import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CreatCountComponent } from './creat-count/creat-count.component';
import { DisplayMsgComponent } from './display-msg/display-msg.component';

@NgModule({
  declarations: [
    AppComponent,
    CreatCountComponent,
    DisplayMsgComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: "creatCount",
        component: CreatCountComponent
      },
      {
        path: "displayMsg",
        component: DisplayMsgComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
