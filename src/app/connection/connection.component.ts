import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.css']
})
export class ConnectionComponent implements OnInit {

  psd;

  constructor() { }

  ngOnInit() {
  }

  storePseudo(psd) {
    this.psd = psd;
    sessionStorage.setItem('pseudo', psd);
  }
}