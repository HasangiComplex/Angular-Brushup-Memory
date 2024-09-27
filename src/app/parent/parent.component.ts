import {Component, OnInit} from '@angular/core';
import {SharedService} from "../services/shared.service";

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements  OnInit{
    decision = true;
    id= '1234V';
    currentPage = 1;
    modalStatus?: boolean

    constructor(private sharedService: SharedService) {

    }

    ngOnInit(): void {
      console.log("this is taken from shared Service",this.sharedService?.getShareValue)
    }

   notifyParent(value: boolean): void {
     console.log("this is ",value)
   }

   modalClosedNotifyForParent(value: boolean): void {
     this.modalStatus = value
   }

}
