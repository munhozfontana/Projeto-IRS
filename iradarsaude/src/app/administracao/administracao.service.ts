import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { ROTAS_API } from '../app.api';

@Injectable()
export class AdministracaoService {

  constructor(
    public http: HttpClient
  ) { }


  // requisições HTTP Gestor
  getGestorInstituicao() {
    return this.http
      .get(`${ROTAS_API}gestorInstituicao`);
  }
  getGestores() {
    return this.http
      .get(`${ROTAS_API}gestores`);
  }

  getGestorId(cpf) {
    return this.http
      .get(`${ROTAS_API}gestor/${cpf}`);
  }
  postGestor(gestor) {
    return this.http
      .post(`${ROTAS_API}gestorNovo`, gestor);
  }

  putGestor(gestor, cpf) {
    return this.http
      .put(`${ROTAS_API}gestor/${cpf}`, gestor);
  }

  deleteGestor(cpf) {
    return this.http
      .delete(`${ROTAS_API}gestor/${cpf}`);
  }

  // requisições HTTP Endereços
  getEnderecoId(cpf) {
    return this.http
      .get(`${ROTAS_API}endereco/${cpf}`);
  }
  postEndereco(endereco) {
    return this.http
      .post(`${ROTAS_API}endereco`, endereco);
  }

  putEndereco(endereco, cpf) {
    return this.http
      .put(`${ROTAS_API}endereco/${cpf}`, endereco);
  }



  // requisições HTTP Contato
  getContatoId(cpf) {
    return this.http
      .get(`${ROTAS_API}contato/${cpf}`);
  }

  postContato(contato) {
    return this.http
      .post(`${ROTAS_API}contato`, contato);
  }

  putContato(contato, cpf) {
    return this.http
      .post(`${ROTAS_API}contato/${cpf}`, contato);
  }


  // requisicoes HTTP de instituição
  getInstituicaoId(cpf) {
    return this.http
      .get(`${ROTAS_API}instituicao/${cpf}`);
  }

  postInstituicao(instituicao) {
    return this.http
      .post(`${ROTAS_API}instituicao`, instituicao);
  }

  putInstituicao(instituicao, cpf) {
    return this.http
      .post(`${ROTAS_API}instituicao/${cpf}`, instituicao);
  }



  // requisicoes HTTP dos Módulos e visões
  getVisao() {
    return this.http
      .get(`${ROTAS_API}visao`);

  }
  getModulosIQS() {
    return this.http
      .get(`${ROTAS_API}modulosiqs`);

  }
  getModulosIRS() {
    return this.http
      .get(`${ROTAS_API}modulosirs`);

  }

  // requisicoes HTTP estado e municípios

  getEstado() {
    return this.http
      .get(`${ROTAS_API}estados`);
  }

  getMunicipios(id_uf) {
    return this.http
      .get(`${ROTAS_API}municipios/${id_uf}`);
  }

}
