import { Component, OnInit } from '@angular/core';
import { InjectTabService } from '../inject-tab.service';
import { Inject } from '@angular/compiler/src/core';

@Component({
  selector: 'app-display-msg',
  templateUrl: './display-msg.component.html',
  styleUrls: ['./display-msg.component.css']
})
export class DisplayMsgComponent implements OnInit {
  constructor(private myservice: InjectTabService) { }
<<<<<<< HEAD
  tableau;

=======
  //declaration des variables
 tableau;
 messages;
 
>>>>>>> 36858953d8417cad8ca285671acb02e9989589ba

  ngOnInit() {
//recupere le userTable qui est dans l'injecteur et le charge dans tableau et l'affiche dans l html
    this.tableau = this.myservice.userTab;
    this.messages = this.myservice.msgTab;
    
  }

  //Recuperer les message saisi de l input
  messageSaisi = '';
  creatMessage(messageSaisi) {
    this.messageSaisi = messageSaisi;
  
//injecter les saisie (creatUser) des input dans le tableau(userTab)
   this.messages.push({auteur:"alice", message:this.messageSaisi, heure:this.myservice.donneHeure()});
  }
}
