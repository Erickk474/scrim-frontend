import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public gameSelected!: any;
  public userInfo: any = {
    games: [
      {
        id: 1,
        title: 'Valorant',
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfHfv2PkRoHxWqn8qt94XaP00oq81-upKQUA&usqp=CAU',
      },
      {
        id: 2,
        title: 'League of Legends',
        image:
          'data:image/jpeg;base64,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',
      },
      {
        id: 3,
        title: 'CS:GO',
        image:
          'https://seeklogo.com/images/C/csgo-logo-CAA0A4D48A-seeklogo.com.png',
      },
      {
        id: 4,
        title: 'Fortnite',
        image:
          'https://www.epicgames.com/fortnite/pt-BR/creative/docs/Images/placeholder-topic.jpg',
      },
    ],
  };

  constructor() {}

  ngOnInit(): void {
    this.gameSelected = this.userInfo.games[0];
  }

  public selectGame(game: any) {
    this.gameSelected = game;
  }
}