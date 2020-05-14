import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({

  selector: 'app-contato',
  templateUrl: './contato.page.html',
  styleUrls: ['./contato.page.scss'],
})
export class ContatoPage implements OnInit {

  buttons = [
    { text: "Não Aceito", role: "destructive" },
    { text: "Cancelar", role: "cancel" },
    { text: "Aceito" }
  ]
  constructor(public actionSheetController: ActionSheetController) { }

  ngOnInit() {
  }

  async ativarAction() {
    const actionSheet = await this.actionSheetController.create({
      header: "Ações",
      buttons: this.buttons
    });

    await actionSheet.present();
  }

}
