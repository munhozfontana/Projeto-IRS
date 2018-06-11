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

  seletoreLocal = {
    uf: '',
    municipio: '',
    bairro: '',
    tipInst: '',
    instSau: ''
  };

  seletoreIRS = {
    persAva: '',
    abranVi: '',
    dimAn: ''
  };

  seletoreIQS = {
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

  ngOnInit() {
    // this.getInstituicao();
    // this.getTipoInst();
    this.getUfs();
    // this.getMunicipio();
  }

}
