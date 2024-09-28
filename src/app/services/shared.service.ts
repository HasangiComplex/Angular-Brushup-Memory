import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  shared?: 100;

  constructor() {}
  getShareValue(){
    return this.shared
  }



}
