import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  public saudacaoStr: string = "";
  public nomeUsuario: string = " !"
  constructor() { }

  ngOnInit() {
    this.saudacao();
  }
  public saudacao(): void {
    let date = new Date();
    let hora = date.getHours();
    if (hora < 6) {
      this.saudacaoStr = "Boa madrugada"
    } else if (hora < 12) {
      this.saudacaoStr = "Bom dia"
    } else if (hora < 18) {
      this.saudacaoStr = "Boa tarde"
    } else {
      this.saudacaoStr = "Boa noite"
    }
  }
}
