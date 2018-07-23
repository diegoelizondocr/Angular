import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.scss']
})
export class MusicComponent implements OnInit {
  reproduc: number = 0;
  source: string = "assets/Musica/"
  music: string[] = [
    'Adele - Hello.mp3',
    'Bon Jovi - Always.mp3',
    'Casting Crowns - Thrive.mp3',
    'Casting Crowns - Somewhere In Your Silent Night.mp3',
    'Chayanne - Madre Tierra _Oye.mp3',
    'Crush - Knight of the Wind.mp3',
    'Ed Sheeran - Castle On The Hill.mp3'
  ];
  
  newTrackText: string = "";

  constructor() { }

  ngOnInit() {

  }
 
  nextTrack(i){
      this.reproduc = i;
  }

  addTrack(){
    this.music.push(this.newTrackText);
    this.newTrackText = "";
  }
}
