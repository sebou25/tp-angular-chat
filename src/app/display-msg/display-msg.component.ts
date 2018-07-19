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
  //declaration des variables
 userTab;
 messages;
<<<<<<< HEAD
 auteur = sessionStorage.getItem('pseudo');
 
=======
 auteur;
>>>>>>> 958d30a03c7f07363d62aee82987a4830b6af503

  ngOnInit() {
//recupere le userTable qui est dans l'injecteur et le charge dans tableau et l'affiche dans l html
    this.userTab = this.myservice.userTab;
    this.messages = this.myservice.msgTab;
    this.auteur = sessionStorage.getItem('pseudo');
  }

  //Recuperer les message saisi de l input
  creatMessage(messageSaisi) {
    if(messageSaisi.value != ""){
      //injecter les saisie (creatUser) des input dans le tableau(userTab)
      this.messages.push({auteur:this.auteur, message:messageSaisi.value, heure:this.myservice.donneHeure()});
      messageSaisi.value = "";
    }
  }
}
