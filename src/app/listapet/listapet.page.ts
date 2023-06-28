import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { LigacaoService } from '../services/ligacao.service';

@Component({
  selector: 'app-listapet',
  templateUrl: './listapet.page.html',
  styleUrls: ['./listapet.page.scss'],
})
export class ListapetPage implements OnInit {

  PET = {
    nome: '',
    idade: '',

  };

  public Pets: any[] = [];
  
  public imagem = '';
  public result:any = {};

  

  constructor(
    public alerta: AlertController,
    public nav: NavController,
    public servicos: LigacaoService,
  ) {}

  ngOnInit() {}

  ionViewDidEnter() {
    this.carregaDados();
  }

  async voltar() {
    const voltando = await this.alerta.create({
      header: 'ATENÇÃO',
      message: 'Nenhum Pet encontrado, cadastre um novo!',
      buttons: [
        {
          text: 'OK',
          handler: () => {
            localStorage.clear();
            this.nav.navigateBack('/');
          },
        },
      ],
    });
    await voltando.present();
  }

  novo() {
    this.nav.navigateRoot('/');
  }


  

  carregaDados() {
    if (this.servicos.listar()) {
      this.Pets = this.servicos.listar()!;

      if (this.Pets.length == 0) {
        this.voltar();
      }
    }
  }

  deletar(pet: string) {
    this.servicos.deletar(pet);
    
    this.carregaDados();
  }

}
