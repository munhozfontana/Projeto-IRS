import { Component, OnInit } from '@angular/core';
import { TelaSeletoresService } from './tela-seletores.service';


@Component({
  selector: 'app-tela-seletores',
  templateUrl: './tela-seletores.component.html',
  styleUrls: ['./tela-seletores.component.scss']
})
export class TelaSeletoresComponent implements OnInit {

  instituicoes: any;
  tipoInsts: any;
  ufs: any;
  municipios: any;

  boteosSeletores: boolean;
  templateIRS: boolean;
  templateIQS: boolean;
  boteosVoltar: boolean;

  seletorLocal = {
    uf: '',
    municipio: '',
    bairro: '',
    tipInst: '',
    instSau: ''
  };

  seletorIRS = {
    persAva: '',
    abranVi: '',
    dimAn: ''
  };

  seletorIQS = {
    persAva: '',
    abranVi: '',
    dimAn: ''
  };

  constructor(
    private telaSeletoresService: TelaSeletoresService
  ) { }


  getInstituicao() {
    this.telaSeletoresService.getSelecioneInt().subscribe(dados => {
      this.instituicoes = dados;
      console.log(this.instituicoes);
    });
  }

  getTipoInst() {
    this.telaSeletoresService.getSelecioneTipoInt().subscribe(dados => {
      this.tipoInsts = dados;
      console.log(this.tipoInsts);
    });
  }

  getUfs() {
    this.telaSeletoresService.getSelecioneEstado().subscribe(dados => {
      this.ufs = dados;
      console.log(this.ufs);
    });
  }

  getMunicipio() {
    this.telaSeletoresService.getSelecioneMunicipios().subscribe(dados => {
      this.municipios = dados;
      console.log(this.municipios);
    });
  }

  exibirTemp() {
    this.boteosSeletores = true;
    this.templateIRS = false;
    this.templateIQS = false;
    this.boteosVoltar = false;
  }

  exibirTempIQS() {
    this.templateIQS = true;
    this.boteosVoltar = true;
    this.boteosSeletores = false;
  }

  exibirTempIRS() {
    this.templateIRS = true;
    this.boteosVoltar = true;
    this.boteosSeletores = false;
  }

  ngOnInit() {
    this.boteosSeletores = true;
    this.templateIRS = false;
    this.templateIQS = false;
    this.boteosVoltar = false;
    // this.getInstituicao();
    // this.getTipoInst();
    this.getUfs();
    // this.getMunicipio();
  }

}
