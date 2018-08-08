import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { ROTAS_API } from '../app.api';

@Injectable()
export class AdministracaoService {

  constructor(
    public http: HttpClient
  ) { }

  getGestorInstituicao(){
    return this.http
      .get(`${ROTAS_API}gestorInstituicao`);
  }

  postGestor(gestor) {
    return this.http
      .post(`${ROTAS_API}gestorNovo`, gestor);
  }

}
