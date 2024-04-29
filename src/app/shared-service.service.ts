import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  private data = new BehaviorSubject(null);
  currentData = this.data.asObservable();

  constructor() {}

  changeData(data: any) {
    this.data.next(data);
  }
}
