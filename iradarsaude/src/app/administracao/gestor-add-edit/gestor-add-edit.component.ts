import { Component, EventEmitter, Input, OnInit, OnChanges, Output, SimpleChanges, SimpleChange } from '@angular/core';

import { AdministracaoService } from '../administracao.service';

@Component({
  selector: 'app-gestor-add-edit',
  templateUrl: './gestor-add-edit.component.html',
  styleUrls: ['./gestor-add-edit.component.scss']
})
export class GestorAddEditComponent implements OnInit {

  controleSelePerfilExistent = false;
  controleCriarNovoPerfil = false;
  BotoesPrincipais = true;
  perfisForm = false;
  DetalhePerfil = false;


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

  endereco = {
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

  public gestorActive: boolean;
  public enderecoActive: boolean;
  public contatoActive: boolean;
  public instActive: boolean;
  public perfilActive: boolean;
  gestorInstituicao: any;

  constructor(
    private administracaoService: AdministracaoService
  ) {
    this.gestorActive = true;
  }

  ativarFuncionalidade(varialvel) {
    console.log(varialvel);
    if (varialvel === 'existente') {
      this.controleSelePerfilExistent = true;
      this.BotoesPrincipais = false;
      this.DetalhePerfil = true;
    } else {
      this.controleCriarNovoPerfil = true;
      this.BotoesPrincipais = false;
      this.perfisForm = true;
    }
  }

  salvarGestor(fAddGestor) {
    this.administracaoService.postGestor(fAddGestor.value).subscribe(
      res => console.log(res)
    )
  }


  VoltarBotoesPrin() {
    this.BotoesPrincipais = true;
    this.perfisForm = false;
    this.controleSelePerfilExistent = false;
    this.controleCriarNovoPerfil = false;
    this.DetalhePerfil = false;
  }

  ngOnInit() {
    this.getGestorInstituicao();
  }

  getGestorInstituicao() {
    this.administracaoService.getGestorInstituicao().subscribe(
      res => {this.gestorInstituicao = res, console.log(res)}
    );
  }
}
