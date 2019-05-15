import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

//import 'rxjs/add/operator/toPromise';

import { Usuario } from '../app/shared/usuario.model';

@Injectable()
export class UsuarioService {

    constructor(private httpCliente: HttpClient) { }

    public getUsuarios(): Promise<Usuario[]> {
        return this.httpCliente.get('http://localhost:3000/usuario')
            .toPromise().then((usuarios: any) => {
                return usuarios;
            }).catch(function (error) {
                console.log(error);
            })

    };
}