import { Component, OnInit } from '@angular/core';
import { Cliente } from '../shared/cliente.model';
import { ClienteService } from '../../service/cliente.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css'],
  providers: [ClienteService]
})

export class PrincipalComponent implements OnInit {

  constructor(private clienteService: ClienteService) { }

  public mostrarPrincipal: boolean = true;
  public clientes: Cliente[];

  ngOnInit() {
    this.getClientes();
  }
  //vai buscar os clientes no bd e inserir no array clientes.
  public getClientes(): void {
    this.clienteService.getCliente().then((cliente: Cliente[]) => {
      this.clientes = cliente;
    }).catch((error) => {
      console.error(error);
    })
  }
  public cad(): void {
    this.mostrarPrincipal = false;
  }
}
