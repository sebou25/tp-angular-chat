import { Component, OnInit } from '@angular/core';
import { InjectTabService} from '../inject-tab.service';

@Component({
  selector: 'app-display-msg',
  templateUrl: './display-msg.component.html',
  styleUrls: ['./display-msg.component.css']
})
export class DisplayMsgComponent implements OnInit {
  constructor() { }
  // messages;
    messages = [
      {auteur: "Alice", message:"Salut,comment ça va?", heure:"10h55"},
      {auteur: "Michel", message:"Salut,c'est Michel", heure:"10h55"},
      {auteur: "Noemie", message:"Hello, on va voir le match à quelle heure?", heure:"10h55"},
    ];

  ngOnInit() {

    // this.messages = InjectTabService.msgTab();

  }

}
