import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ConfirmDialogService {
  private subject = new Subject<any>();

  confirmThis(
    title: string,
    message: string,
    yesFn: () => void,
    noFn: () => void
  ): any {
    const that = this;
    this.subject.next({
      type: 'confirm',
      text: message,
      title,
      yesFn(): any {
        that.subject.next();
        yesFn();
      },
      noFn(): any {
        that.subject.next();
        noFn();
      },
    });
  }

  getMessage(): Observable<any> {
    return this.subject.asObservable();
  }

  constructor() {}
}
