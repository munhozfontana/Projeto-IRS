import { Component, EventEmitter, Input, OnInit, OnChanges, Output, SimpleChanges, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-gestor-add-edit',
  templateUrl: './gestor-add-edit.component.html',
  styleUrls: ['./gestor-add-edit.component.scss']
})
export class GestorAddEditComponent implements OnInit {

  seletoreLocal = {
    uf: '',
    municipio: '',
    bairro: '',
    tipInst: '',
    instSau: ''
  };

  gestor = {
    nome: '',
    cpf: '',
    login: '',
    passW: '',
    cargo: '',
    funcao: '',
    instituicao: ''
  };

  endereco =  {
    endereco: '',
    numero: '',
    bairro: '',
    complemento: '',
    cep: '',
    uf: '',
    municipio: ''
  };

  contato = {
    email: '',
    tel1: '',
    tel2: ''
  };


  perfilIRS = {
    id: '',
    descricao: ''
  };


  perfilIQS = {
    id: '',
    descricao: ''
  };

  public gestorActive: boolean;
  public enderecoActive: boolean;
  public contatoActive: boolean;
  public instActive: boolean;
  public perfilActive: boolean;

  constructor() {
    this.gestorActive = true;
  }

  ngOnInit() {
  }

}
