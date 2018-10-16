import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-searchbox',
  templateUrl: './searchbox.component.html',
  styleUrls: ['./searchbox.component.css']
})
export class SearchboxComponent implements OnInit {

  input: string = '';
  microphone:boolean = window['SpeechRecognition'] !== undefined || window['webkitSpeechRecognition'] !== undefined;

  constructor() { }

  ngOnInit() {
  }

  onChangeInput(message: string) {
    this.input = message;
  }

}