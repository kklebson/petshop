import { Component } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { throwError } from 'rxjs';
import { LigacaoService } from '../services/ligacao.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  dados: any = {};
  Pet = {
    nome: '',
    idade: '',
  };

  labelBotao = 'cadastrar';

  constructor(
    public mensagem: ToastController,
    public nav: NavController,
    public servico: LigacaoService    
  ) {}

  ionViewDidEnter() {
    this.limpaDados();
  }

  cadastrar() {
    if (this.Pet.nome == '' || this.Pet.idade == '') {
     
      this.exibeToast('Preencha os campos necessário.', 'danger');
    } else {
      //! Acessar uma função que salva tudo em cache:
      this.salvamento();
      this.nav.navigateForward('listapet');
      
    }
  }

  //! Funação que salva as coisas no cache
  salvamento() {
    
    this.servico.salvarPet(this.Pet.nome, this.Pet.idade);
  }

  limpaDados() {
    this.labelBotao = 'Cadastrar';
    this.Pet.nome = '';
    this.Pet.idade = '';
  }

  async exibeToast(msg: string, cor: string) {
    const toast = await this.mensagem.create({
      message: msg,
      duration: 2000,
      position: 'top',
      animated: true,
      color: cor,
    });

    toast.present();
  }
}

