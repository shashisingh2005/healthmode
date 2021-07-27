import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HealthmodeService {
  private _subject = new Subject<any>();

  newEvent(event:any) {
    localStorage.setItem('healthmode',event.checked);
    this._subject.next(event);
  }

  get events$ () {
    return this._subject.asObservable();
  }
 healthtoggle :boolean=false;
  constructor() { }
  ngOnInit(): void {
    this.healthtoggle = (this.healthtoggle)?true:false;
  }
}
