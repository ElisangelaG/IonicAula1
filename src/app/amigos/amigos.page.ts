import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-amigos',
  templateUrl: './amigos.page.html',
  styleUrls: ['./amigos.page.scss'],
})
export class AmigosPage implements OnInit {

  amigos = [
    {
      nome: 'Marcos',
      idade: 21,
      nivel: 5,
    },

    {
      nome: 'Janaina',
      idade: 30,
      nivel: 2,
    },

    {
      nome: 'Camilla',
      idade: 32,
      nivel: 3,
    },

    {
      nome: 'Roberta',
      idade: 32,
      nivel: 4,
    },

    {
      nome: 'Emanuelle',
      idade: 7,
      nivel: 5,
    },
  ];

  constructor(public actionSheetController: ActionSheetController) { }

  ngOnInit() {
  }

  async deleteAmigos(nome: string) {
    const buttons = [
      {
        text: 'Deletar', role: 'destructive',
        handler: () => {
          this.deleteAmigo(nome);
        }
      },
      { text: 'Editar' },
      { text: 'Cancelar', role: 'cancel' }
    ];

    const actionSheet = await this.actionSheetController.create({
      header: 'Actions',
      buttons: buttons
    });
    await actionSheet.present();
  }

  deleteAmigo(item) {
    const index = this.amigos.findIndex(i => i.nome === item.nome);
    this.amigos.splice(index, 1);

  }

}
