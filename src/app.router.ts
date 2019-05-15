import { Routes } from '@angular/router';

import { PrincipalComponent } from './app/principal/principal.component';
import { LoginComponent } from './app/login/login.component';
import { CadastrarFuncionarioComponent } from './app/cadastrar-funcionario/cadastrar-funcionario.component';
import { CadastrarClienteComponent } from './app/cadastrar-cliente/cadastrar-cliente.component';

export const ROTAS: Routes = [
    { path: '', component: LoginComponent },
    { path: 'principal', component: PrincipalComponent },
    { path: 'cad_funcionario', component: CadastrarFuncionarioComponent },
    { path: 'cad_cliente', component: CadastrarClienteComponent }
]