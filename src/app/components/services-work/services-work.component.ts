import {Component,OnInit} from '@angular/core';
import {DatesService} from "../../services/dates.service";
import {UsersService} from "../../services/users.service";
import {User} from "../../interfaces/user";

@Component({
  selector: 'app-services-work',
  templateUrl: './services-work.component.html',
  styleUrls: ['./services-work.component.css']
})
export class ServicesWorkComponent implements OnInit {
  users: User[]=[];
  newUsers:any;

  constructor(private dataService: DatesService, private userService: UsersService) {}

  ngOnInit(): void {
    this.getUserDetails();
  }

  getUserDetails() {
    this.userService.getUsers()
      .subscribe(value => {
        this.users = value;
      })
  }

  getUserById(id: number){
    this.userService.getUserById(id)
      .subscribe(user => {
         this.newUsers = user;
        console.log("This is user by ID",  this.newUsers)
      })


  }

}
