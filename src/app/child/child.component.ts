import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {SharedService} from "../services/shared.service";

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit{
  @Input() isAllowed?: boolean;
  @Input() newId?: string;
  @Input() currentPAgeFromParent?: number;
  @Output() notifyParent = new EventEmitter<boolean>();
  @Output() closeModal = new EventEmitter<boolean>();



  constructor(private sharedService: SharedService) {
    console.log("this is taken from shared Service",this.sharedService?.shared)
  }

  ngOnInit(): void {
    console.log("Is Employees are allowed ",this.isAllowed)
    console.log("This might be new Id", this.newId)
  }


}
