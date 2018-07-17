import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InjectTabService {

  constructor() { }

  usersTab() {
    const userTab = [
      { nom: "Alice", pseudo: "alice5", email: "alice@gmail.com", password: "alice5" },
      { nom: "Sophie", pseudo: "sophie6", email: "sophie@gmail.com", password: "sophie6" },
      { nom: "Michel", pseudo: "michel6", email: "michel@gmail.com", password: "michel6" },
      { nom: "Thomas", pseudo: "thomas6", email: "thomas@gmail.com", password: "thomas6" },
      { nom: "Noemie", pseudo: "noemie6", email: "noemi@gmail.com", password: "noemie6" }
    ];
    return userTab;
  }

  msgTab() {
    const msgTab = [
      {auteur: "Alice", message:"Salut,comment ça va?", heure:"10h55"},
      {auteur: "Michel", message:"Salut,c'est Michel", heure:"10h55"},
      {auteur: "Noemie", message:"Hello, on va voir le match à quelle heure?", heure:"10h55"},
    ];
    return msgTab;
  }
}

