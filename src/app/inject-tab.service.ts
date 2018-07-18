import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InjectTabService {

  constructor() { }

     userTab = [
      { nom: "Alice", pseudo: "alice5", email: "alice@gmail.com", password: "c5ff799497befaedb243c31c16a1664c" },
      { nom: "Sophie", pseudo: "sophie6", email: "sophie@gmail.com", password: "12db2e37e932b0c36a550b66c4ea55e4" },
      { nom: "Michel", pseudo: "michel6", email: "michel@gmail.com", password: "deb48cb89802354088f3584900118b11" },
      { nom: "Thomas", pseudo: "thomas6", email: "thomas@gmail.com", password: "a6a0ba91715bc2de0ea52355c633e5b6" },
      { nom: "Noemie", pseudo: "noemie6", email: "noemi@gmail.com", password: "feeb16e13cbe61aeb1a96ab9f1adcfc6" }
    ];




     msgTab = [
      {auteur: "Alice", message:"Salut,comment ça va?", heure:"10h55"},
      {auteur: "Michel", message:"Salut,c'est Michel", heure:"10h55"},
      {auteur: "Noemie", message:"Hello, on va voir le match à quelle heure?", heure:"10h55"},
    ];

   donneHeure = function(){
     var d = new Date();
     var h = d.getHours();
     var m = d.getMinutes();
     return h+":"+m;
   }

   findPseudo = function(psd,userTab){
     console.log(psd);
     for (var i = 0; i < userTab.length; i++) {
       if(psd == userTab[i].pseudo){
         return userTab[i];
       }
      }
    return null;
   }
  }
