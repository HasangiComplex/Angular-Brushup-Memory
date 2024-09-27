import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-ready-interview';
  value = 'Initial Value';
  newValue = "This is initial value"


  changeNewValue($event: any) : void {
    this.newValue = ($event.target as HTMLInputElement).value
  }


}
