import { Component, EventEmitter, Input, OnInit, OnChanges, Output, SimpleChanges, SimpleChange, OnDestroy } from '@angular/core';

import { AdministracaoService } from '../administracao.service';
import { Router, ActivatedRoute } from '@angular/router';
import { destroyView } from '../../../../node_modules/@angular/core/src/view/view';

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

  params: any;
  paramsByPost: any;
  visoes: any;
  formLocal: any;
  perfisIQSs: boolean;


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
    password: '',
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

  novoPerfil = {
    nomeperfil: '',
    nomeModuloperfil: ''
  };

  public gestorActive = true;
  public enderecoActive = false;
  public contatoActive = false;
  public instActive = false;
  public perfilActive = false;
  gestorInstituicao: any;
  estados: any;
  municipios: any;
  enderecoExistente = false;
  constructor(
    private administracaoService: AdministracaoService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
  }



  ativarFuncionalidade(varialvel) {
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

  // função para Salvar os dados básicos gestor
  salvarGestor(fAddGestor) {
    if (fAddGestor.status !== 'INVALID') {
      if (this.params.id) {
        this.administracaoService.putGestor(fAddGestor.value, this.params.id).subscribe(
          res => {
            this.getGestorEndereco();
            this.enderecoActive = true;
            console.log(this.enderecoExistente);
          },
          erro => {
            console.log(erro);
          }
        );
      } else {
        this.administracaoService.postGestor(fAddGestor.value).subscribe(
          res => {
            console.log(res);
            this.paramsByPost = res;
            this.enderecoActive = true;
          },
          erro => {
            console.log(erro);
          }
        );
      }
    } else {
      console.log('campos inválidos');
    }
  }

  // função para Salvar os endereço do gestor
  salvarEndereco(fAddEndereco) {
    console.log(this.enderecoExistente);
    if (fAddEndereco.status !== 'INVALID') {
      if (this.enderecoExistente ) {
        this.administracaoService.putEndereco(fAddEndereco.value, this.paramsById()).subscribe(
          res => {
            this.contatoActive = true;
          },
          erro => {
            console.log(erro);
          }
        );
      } else {
        fAddEndereco.value.cpf = this.paramsById();
        this.administracaoService.postEndereco(fAddEndereco.value).subscribe(
          res => {
            console.log(res);
            this.paramsByPost = res;
            this.contatoActive = true;
          },
          erro => {
            console.log(erro);
          }
        );
      }
    } else {
      console.log('campos inválidos');
    }
    this.contatoActive = true;
  }

  // função para Salvar os contatos do gestor
  salvarContato(fAddContato) {
    if (fAddContato.status !== 'INVALID') {
      if (this.params.id) {
        this.administracaoService.putContato(fAddContato.value, this.paramsById()).subscribe(
          res => {
            console.log(res);
            this.instActive = true;
          },
          erro => {
            console.log(erro);
          }
        );
      } else {
        this.administracaoService.postContato(fAddContato.value).subscribe(
          res => {
            console.log(res);
            this.paramsByPost = res;
            this.instActive = true;
          },
          erro => {
            console.log(erro);
          }
        );
      }
    } else {
      console.log('campos inválidos');
    }
    this.instActive = true;
  }

  // função para Salvar os contatos do gestor
  salvarInstituicao(fAddInstituicao) {
    if (fAddInstituicao.status !== 'INVALID') {
      if (this.params.id) {
        this.administracaoService.putInstituicao(fAddInstituicao.value, this.paramsById()).subscribe(
          res => {
            console.log(res);
            this.perfilActive = true;
          },
          erro => {
            console.log(erro);
          }
        );
      } else {
        this.administracaoService.postInstituicao(fAddInstituicao.value).subscribe(
          res => {
            console.log(res);
            this.paramsByPost = res;
            this.perfilActive = true;
          },
          erro => {
            console.log(erro);
          }
        );
      }
    } else {
      console.log('campos inválidos');
    }
  }


  salvarPerfil(fAddPerfilNovo, salvarPerfil) {

    if (this.controleSelePerfilExistent) {
      this.formLocal = salvarPerfil;
    } else {
      this.formLocal = fAddPerfilNovo;
    }

    if (this.formLocal.status !== 'INVALID') {
      if (this.controleSelePerfilExistent) {
        this.administracaoService.putInstituicao(this.formLocal.value, this.paramsById()).subscribe(
          res => {
            console.log(res);
            this.perfilActive = true;
          },
          erro => {
            console.log(erro);
          }
        );
      } else {
        this.administracaoService.postInstituicao(this.formLocal.value).subscribe(
          res => {
            console.log(res);
            this.paramsByPost = res;
            this.perfilActive = true;
          },
          erro => {
            console.log(erro);
          }
        );
      }
    } else {
      console.log('campos inválidos');
    }

  }


  getVisao() {
    this.administracaoService.getVisao().subscribe(
      res => {
        console.log(res);
        this.visoes = true;
      },
      erro => {
        console.log(erro);
      }
    );
  }

  getModulosIQS() {
    this.administracaoService.getModulosIQS().subscribe(
      res => {
        console.log(res);
        this.perfisIQSs = true;
      },
      erro => {
        console.log(erro);
      }
    );
  }

  getModulosIRS() {
    this.administracaoService.getModulosIRS().subscribe(
      res => {
        console.log(res);
        this.perfisIQSs = true;
      },
      erro => {
        console.log(erro);
      }
    );
  }

  getGestorById() {
    if (this.params.id || this.paramsByPost) {
      this.administracaoService.getGestorId(this.paramsById()).subscribe(
        res => {
          this.gestor = res[0];
          console.log(res);
        },
        erro => {
          console.log(erro);
        }
      );
    }
  }

  getGestorInstituicao() {
    this.administracaoService.getGestorInstituicao().subscribe(
      res => {
        this.gestorInstituicao = res;
        console.log(res);
      },
      erro => console.log(erro)
    );
  }

  getGestorEndereco() {
    this.administracaoService.getEnderecoId(this.paramsById()).subscribe(
      res => {
        this.endereco = res[0];
        console.log(!!res[0]);
        if (!!res[0]) {
          this.enderecoExistente = true;
        }
      },
      erro => console.log(erro)
    );
  }

  getEstado() {
    this.administracaoService.getEstado().subscribe(
      res => {
        this.estados = res,
        console.log(res);
      },
      erro => console.log(erro)
    );
  }

  selectMunicipio(uf_id) {
    this.administracaoService.getMunicipios(uf_id).subscribe(
      res => {
        this.municipios = res;
      },
      erro => console.log(erro)
    );
  }


  paramsById() {
    if (this.params.id) {
      return this.params.id;
    } else if (this.paramsByPost.cpf) {
      return this.paramsByPost.cpf;
    }
  }


  backGestor() {
    if (this.paramsById()) {
      this.getGestorById();
      this.router.navigate([`admin/edit/${this.paramsById()}`]);
      this.gestorActive = true;
    }
  }



  backEndereco() {
    console.log("quero voltar")
    if (this.paramsById()) {
      this.getGestorEndereco();
      this.router.navigate([`admin/edit/${this.paramsById()}`]);
      this.enderecoActive = true;
    }
  }

  backContato() {
    if (this.paramsById()) {
      this.administracaoService.getContatoId(this.paramsById()).subscribe(
        res => {
          console.log(res);
          this.contatoActive = true;
        },
        erro => {
          console.log(erro);
        }
      );
    }
  }

  backInstituicao() {
    if (this.paramsById()) {
      this.administracaoService.getInstituicaoId(this.paramsById()).subscribe(
        res => {
          console.log(res);
          this.instActive = true;
        },
        erro => {
          console.log(erro);
        }
      );
    }
  }


  cancelarGestor() {
    this.router.navigate(['/admin']);
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
    this.activatedRoute.params.subscribe(res => (this.params = res));
    this.getGestorById();
    this.getEstado();
  }
}
