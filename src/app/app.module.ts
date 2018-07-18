import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CreatCountComponent } from './creat-count/creat-count.component';
import { DisplayMsgComponent } from './display-msg/display-msg.component';
import { ConnectionComponent } from './connection/connection.component';
import { InjectTabService } from './inject-tab.service';


@NgModule({
  declarations: [
    AppComponent,
    CreatCountComponent,
    DisplayMsgComponent,
    ConnectionComponent,
   
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
      path: "connection",
      component: ConnectionComponent
    }
    ])
  ],
  providers: [InjectTabService],
  bootstrap: [AppComponent]
})
export class AppModule { }
