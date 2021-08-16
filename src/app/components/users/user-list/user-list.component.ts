import { Component, OnInit } from '@angular/core';
import {IUser} from "../IUser";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  pageTitle:string = 'Danh sách người dùng';
  imageSize:number = 100;
  showImage:boolean = false;
  message:string = '';
  users: IUser[] = [
    {
      name:"Bùi Văn Sang",
      email:"sang@gmail.com",
      phone:"0947268345",
      address:"Phú Thọ",
      avatar:"https://thumbs.dreamstime.com/b/user-icon-vector-male-person-symbol-profile-circle-avatar-sign-user-icon-vector-male-person-symbol-profile-circle-avatar-sign-115922528.jpg"
    },
    {
      name:"Hà Thị Vân",
      email:"van@gmail.com",
      phone:"0947268204",
      address:"Nghệ An",
      avatar:"https://thumbs.dreamstime.com/b/user-icon-vector-male-person-symbol-profile-circle-avatar-sign-user-icon-vector-male-person-symbol-profile-circle-avatar-sign-115922528.jpg"
    },
    {
      name:"Đỗ Mai Trang",
      email:"trang@gmail.com",
      phone:"0947238345",
      address:"Phú Thọ"
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }
  showHideImage(){
    this.showImage = !this.showImage;
  }
  searchUser(even:any){
    let data = even.target.value;
  }
  deleteUser(index:number){
    if (confirm('Are you sure?')) {
      this.users.splice(index, 1);
    }
  }
}
