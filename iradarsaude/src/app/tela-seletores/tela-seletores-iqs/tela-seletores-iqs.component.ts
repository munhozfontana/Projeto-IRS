import { TelaSeletoresService } from './../tela-seletores.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tela-seletores-iqs',
  templateUrl: './tela-seletores-iqs.component.html',
  styleUrls: ['./tela-seletores-iqs.component.scss']
})
export class TelaSeletoresIqsComponent implements OnInit {

  instituicoes: any;
  tipoInsts: any;
  ufs: any;
  municipios: any;


  seletorIQS = {
    persAva: '',
    abranVi: '',
    dimAn: ''
  };

  seletorLocal = {
    uf: '',
    municipio: '',
    bairro: '',
    tipInst: '',
    instSau: ''
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


  ngOnInit() {
    this.getUfs();
  }

}
