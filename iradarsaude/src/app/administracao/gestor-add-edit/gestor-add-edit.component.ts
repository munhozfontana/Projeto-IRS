import { Component, EventEmitter, Input, OnInit, OnChanges, Output, SimpleChanges, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-gestor-add-edit',
  templateUrl: './gestor-add-edit.component.html',
  styleUrls: ['./gestor-add-edit.component.scss']
})
export class GestorAddEditComponent implements OnInit {

  controleSelePerfilExistent = false;
  controleCriarNovoPerfil = false;
  BotoesPrincipais = true;


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


  perfil = {
    idPerfil: ''
  };

  perfisForm = false;



  public gestorActive: boolean;
  public enderecoActive: boolean;
  public contatoActive: boolean;
  public instActive: boolean;
  public perfilActive: boolean;

  constructor() {
    this.gestorActive = true;
  }

  ativarFuncionalidade(varialvel) {
    console.log(varialvel);
 if (varialvel === 'existente') {
 this.controleSelePerfilExistent = true;
 this.BotoesPrincipais = false;
 } else {
   this.controleCriarNovoPerfil = true;
   this.BotoesPrincipais = false;
  }
  }



  VoltarBotoesPrin() {
    this.BotoesPrincipais = true;
    this.controleSelePerfilExistent = false;
      this.controleCriarNovoPerfil = false;
  }

  ngOnInit() {
  }

}
