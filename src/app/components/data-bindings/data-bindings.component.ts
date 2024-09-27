import { Component } from '@angular/core';

@Component({
  selector: 'app-data-bindings',
  templateUrl: './data-bindings.component.html',
  styleUrls: ['./data-bindings.component.css']
})
export class DataBindingsComponent {
   newValue="New Value";
   twoValue="Enter value-two way binding";
   secondValue= "Enter value for second val- two-way binding"

    changeNewValue($event: any) : void{
      this.newValue = $event.target.value;
    }

    changeValue($event: string): void {
      this.secondValue = $event;
    }
}
