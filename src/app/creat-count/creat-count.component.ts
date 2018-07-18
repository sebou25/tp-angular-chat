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

    this.userTab = this.myservice.userTab;
  }
  pass = '';
  email = '';
  pseudo = '';
  nom = '';
  creatUser(pass,email, pseudo, nom) {
    this.pass = pass;
   this.email = email;
   this.pseudo = pseudo;
   this.nom = nom;
//injecter les saisie (creatUser) des input dans le tableau(userTab)
   this.userTab.push({nom:this.nom, pseudo:this.pseudo, email:this.email, password:this.pass});
  }
  
}
