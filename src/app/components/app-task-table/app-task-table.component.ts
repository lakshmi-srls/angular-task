import { Component, OnInit } from '@angular/core';

import { User } from '../../shared/models/User';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-app-task-table',
  templateUrl: './app-task-table.component.html',
  styleUrls: ['./app-task-table.component.css']
})
export class AppTaskTableComponent implements OnInit {

  displayedColumns: string[] = [ 'name', 'id'];

  userList:User[] = [];

  btnString:string = "Show More Users";

  constructor(private userservice:UsersService) { }

  ngOnInit(): void {
    this.getLessUsers();
  }

  private getLessUsers():void{
      this.userList = this.userservice.getUsers();
  }

  private moreUsers():void{
      this.userList = this.userservice.getMoreUsers();
  }

  public toggle():void{
    if(this.btnString === 'Show More Users'){
      this.btnString = "Show Less Users";
      this.moreUsers();
    }else{
      this.btnString = "Show More Users";
      this.getLessUsers();
    }
  }

}
