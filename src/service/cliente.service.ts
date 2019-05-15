import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Cliente } from '../app/shared/cliente.model';

@Injectable()
export class ClienteService {
    constructor(private httpCliente: HttpClient) { }

    public getCliente(): Promise<Cliente[]> {
        return this.httpCliente.get('http://localhost:3000/cliente')
            .toPromise().then((cliente: Cliente[]) => {
                return cliente;
            }).catch((erro) => {
                console.error(erro);
                return null;
            });

    }
}