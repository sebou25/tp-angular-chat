import { Component, OnInit } from '@angular/core';
import { InjectTabService } from '../inject-tab.service';
import {Md5} from 'ts-md5/dist/md5';

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

  creatUser(pass, email, pseudo, nom) {
    if(pass.value != "" &&
       email.value != "" &&
       pseudo.value != "" &&
       nom.value != "" &&
       this.myservice.findPseudo(pseudo.value,this.userTab) == null){
      //injecter les saisie (creatUser) des input dans le tableau(userTab)
      this.userTab.push({ nom: nom.value, pseudo: pseudo.value, email: email.value, password: Md5.hashStr(pass.value) });
      pass.value = "";
      email.value = "";
      pseudo.value = "";
      nom.value = "";
      alert("Compte créé");

    }else{
      alert("Champs invalide");
    }

  }

}
