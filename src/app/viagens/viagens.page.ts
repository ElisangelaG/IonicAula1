import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viagens',
  templateUrl: './viagens.page.html',
  styleUrls: ['./viagens.page.scss'],
})
export class ViagensPage implements OnInit {

  constructor() { }

  viagens = [
    {
      local: 'Rio Espera',
      descricao: 'Rio Espera é um município brasileiro do estado de Minas Gerais localizado na mesorregião da Zona da Mata. Sua população estimada em 2004 era de 6.676 habitantes',
      datadevisita: '09/05/2020',
      imagem: 'https://upload.wikimedia.org/wikipedia/en/3/3c/Rioespera.jpg'
    },

    {
      local: 'Veneza',
      descricao: 'Veneza, a capital da região de Vêneto, no norte da Itália, é formada por mais de 100 pequenas ilhas em uma lagoa no Mar Adriático.',
      datadevisita: '01/12/2022',
      imagem: 'https://st4.depositphotos.com/16255472/22493/i/1600/depositphotos_224936682-stock-photo-canal-grande-early-morning-venice.jpg'
    }

  ]

  ngOnInit() {
  }

}
