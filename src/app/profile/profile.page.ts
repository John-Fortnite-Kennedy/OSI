import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  userinfo;
  name;
  surname;
  phone;
  constructor() {
    this.userinfo  =  JSON.parse(sessionStorage.getItem('user'));
    console.log(this.userinfo);
    this.name = this.userinfo.substring(this.userinfo.indexOf('"name":"')+8, this.userinfo.indexOf('","surname"'));
    this.surname = this.userinfo.substring(this.userinfo.indexOf('"surname":"')+11, this.userinfo.indexOf('","phone"'));
    this.phone = this.userinfo.substring(this.userinfo.indexOf('"phone":')+9, this.userinfo.indexOf('","lastCode":'));
  }

  ngOnInit() {
  }

}
