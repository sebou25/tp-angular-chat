import { Component, OnInit } from '@angular/core';
import { InjectTabService} from '../inject-tab.service';

@Component({
  selector: 'app-display-msg',
  templateUrl: './display-msg.component.html',
  styleUrls: ['./display-msg.component.css']
})
export class DisplayMsgComponent implements OnInit {
  constructor(private myserveice: InjectTabService) { }
  messages;
  ngOnInit() {

    this.messages = this.myserveice.msgTab();

  }

}
