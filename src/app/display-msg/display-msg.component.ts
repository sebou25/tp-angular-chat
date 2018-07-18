import { Component, OnInit } from '@angular/core';
import { InjectTabService} from '../inject-tab.service';
import { Inject } from '@angular/compiler/src/core';

@Component({
  selector: 'app-display-msg',
  templateUrl: './display-msg.component.html',
  styleUrls: ['./display-msg.component.css']
})
export class DisplayMsgComponent implements OnInit {
  constructor(private myservice: InjectTabService) { }
<<<<<<< HEAD
  messages;
  ngOnInit() {

    this.messages = this.myservice.userTab;
=======
 tableau;
  

  ngOnInit() {

    this.tableau = this.myservice.userTab;
>>>>>>> 6486aa00f44b8a93a91cb6e40cc2d794a0f8d87e

  }
}
