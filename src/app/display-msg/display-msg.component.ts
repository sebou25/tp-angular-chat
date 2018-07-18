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
 tableau;
  

  ngOnInit() {

    this.tableau = this.myservice.userTab;

  }

}
