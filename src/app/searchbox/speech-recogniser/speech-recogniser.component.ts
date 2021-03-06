import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Subscription } from 'rxjs';

import { SpeechService } from '../../SpeechRecognition';

@Component({
  selector: 'app-speech-recogniser',
  templateUrl: './speech-recogniser.component.html',
  styleUrls: ['./speech-recogniser.component.css']
})

export class SpeechRecogniserComponent implements OnInit {
  subscription = Subscription.EMPTY;
  comment: string = '';
  started: boolean = false;
  @Output('onChangeInput') inputChanged = new EventEmitter<string>();

  constructor(public speech: SpeechService) { }

  ngOnInit() {
  }
  
  toggleVoiceRecognition(): void {
    if (this.started) {
      this.speech.stop();
      this.recordStart();
    } else {
      this.speech.start();
      this.recordStop();
    }
    this.started = !this.started;
  }

  recordStart(): void {
    this.subscription = this.speech.message.subscribe(msg => {
      this.comment = msg.message;
      this.inputChanged.emit(this.comment);
    });
  }

  recordStop(): void {
    this.subscription.unsubscribe();
  }

}