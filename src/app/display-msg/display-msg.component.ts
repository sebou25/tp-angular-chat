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
  //declaration des variables
 tableau;
 messages;
 heure; 

  ngOnInit() {
//recupere le userTable qui est dans l'injecteur et le charge dans tableau et l'affiche dans l html
    this.tableau = this.myservice.userTab;
    this.messages = this.myservice.msgTab;
    this.heure = this.myservice.donneHeure();
  }
  //Recuperer les message saisi de l input
  messageSaisi = '';
  creatMessage(messageSaisi) {
    this.messageSaisi = messageSaisi;
  
//injecter les saisie (creatUser) des input dans le tableau(userTab)
   this.messages.push({auteur:"alice", message:this.messageSaisi, heure:this.heure});
  }
}
