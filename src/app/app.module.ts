import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CreatCountComponent } from './creat-count/creat-count.component';
import { DisplayMsgComponent } from './display-msg/display-msg.component';
import { ConnectedComponent } from './connected/connected.component';


@NgModule({
  declarations: [
    AppComponent,
    CreatCountComponent,
    DisplayMsgComponent,
    ConnectedComponent,
   
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
      },
      {
      path: "connected",
      component: ConnectedComponent
    }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
