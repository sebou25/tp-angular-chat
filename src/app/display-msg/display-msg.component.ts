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
  tableau;
=======
  //declaration des variables
 tableau;
 messages;
 heure; 

>>>>>>> 62d434e3620aa1ecdc656df4e5be80b224bd199a
  ngOnInit() {
//recupere le userTable qui est dans l'injecteur et le charge dans tableau et l'affiche dans l html
    this.tableau = this.myservice.userTab;
<<<<<<< HEAD
  }
}
=======
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
>>>>>>> 62d434e3620aa1ecdc656df4e5be80b224bd199a
