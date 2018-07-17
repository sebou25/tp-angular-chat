import { Component, OnInit } from '@angular/core';
import { InjectTabService } from '../inject-tab.service';

@Component({
  selector: 'app-creat-count',
  templateUrl: './creat-count.component.html',
  styleUrls: ['./creat-count.component.css']
})
export class CreatCountComponent implements OnInit {
  userTab;
  constructor(private myservice: InjectTabService) { }

  ngOnInit() {

    this.userTab = this.myservice.usersTab;
  }

}
