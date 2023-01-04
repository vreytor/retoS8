import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  usuario = 'Angular';
  password = '123456';

  resultado = false;

  Validar(user:string, password:string){
    if(user == this.usuario && password == this.password){
      this.resultado = true;
    } else {
      this.resultado = false;
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
