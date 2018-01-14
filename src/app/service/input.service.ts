import { Injectable } from '@angular/core';

import { Subject } from 'rxjs/Subject';

/** InputService - Broadcast all input changes events and values */

@Injectable()
export class InputService {

  constructor() { }

  // Observable string sources
  private inputAnnouncedSource = new Subject<any>();

  // Observable string streams
  inputAnnounced$ = this.inputAnnouncedSource.asObservable();

  // Service message commands whenever an input change
  announceInput(organismSource: string, atomicInputName: string, fieldName: string, inputValue: string, inputEvent: string) {
    this.inputAnnouncedSource.next({
      organismSource, atomicInputName, fieldName, inputValue, inputEvent
    });
  }

}
