import { Component, OnInit } from '@angular/core';
import { InjectTabService } from '../inject-tab.service';
import { Md5 } from 'ts-md5/dist/md5';
import { Router } from '@angular/router';

@Component({
  selector: 'app-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.css']
})
export class ConnectionComponent implements OnInit {

  constructor(private myservice: InjectTabService, private router: Router) { }

  ngOnInit() {}

  connection(psd,pass) {
    var vall = this.myservice.findPseudo(psd.value,this.myservice.userTab);
    if(vall == null){
      alert("This pseudo does not exist");
    }else{
      if(Md5.hashStr(pass.value) == vall.password){
        sessionStorage.setItem('pseudo', psd.value);
        psd.value = "";
        pass.value = "";
        alert("You are connected");
        this.router.navigateByUrl('displayMsg');
      }else{
        pass.value = "";
        alert("Wrong passwod");
      }
    }

  }
}
