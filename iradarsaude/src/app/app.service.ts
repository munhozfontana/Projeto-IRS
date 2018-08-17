import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ROTAS_API } from './app.api';

@Injectable()
export class AppService {

  municipios: any; 
  ufs: any;

  constructor(
    private http: HttpClient
  ) { 
    this.http.get(`${ROTAS_API}instituicaoSaude/municipios`)
    .subscribe(
      res => this.municipios = res
    );
    this.http.get(`${ROTAS_API}instituicaoSaude/estados`)
    .subscribe(
      res => {
        console.log(res);
        this.ufs = res;
      }
    );
  }

  getUfs() {
    return this.ufs;
  }

  getMunicipios(codUf) {
    return this.municipios.filter(e => e.id_uf === codUf);
  }

}
