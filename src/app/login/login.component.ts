import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { Usuario } from '../shared/usuario.model';
import { UsuarioService } from '../../service/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UsuarioService]
})
export class LoginComponent implements OnInit {

  public login: string = "";
  public senha: string = "";
  private usuarios: Usuario[];

  constructor(private usuarioService: UsuarioService) {
  }

  public coletarLogin(login: Event): void {
    this.login = (<HTMLInputElement>login.target).value;
  }
  public coletarSenha(senha: Event): void {
    this.senha = (<HTMLInputElement>senha.target).value;
  }

  ngOnInit() {
    this.usuarioService.getUsuarios().then((usuarios) => {
      this.usuarios = usuarios;
    })
  }
  //verificara login
  public logar() {
    let i = 0;
    while (i < (this.usuarios.length)) {
      if (this.usuarios[i].login == this.login && this.usuarios[i].senha == this.senha) {
        console.log("Usuario logado")
        console.log("Passou aqui");
        return true;
      } else {
        console.log("Usuario incorreto")
      }
      i++;
    }
  }
  public cancelar(): void {
    this.login = "";
    this.senha = "";
  }
}