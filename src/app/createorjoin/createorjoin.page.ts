import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createorjoin',
  templateUrl: './createorjoin.page.html',
  styleUrls: ['./createorjoin.page.scss'],
})
export class CreateorjoinPage implements OnInit {

  constructor(public router: Router) { }

  join(){
    this.router.navigateByUrl('/osi-join');
  }

  create(){
    this.router.navigateByUrl('/osi-create');
  }

  ngOnInit() {
  }

}
