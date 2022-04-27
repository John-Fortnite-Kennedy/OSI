import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-announcement',
  templateUrl: './add-announcement.page.html',
  styleUrls: ['./add-announcement.page.scss'],
})
export class AddAnnouncementPage implements OnInit {

  title: string;
  description: string;

  constructor() { }

  ngOnInit() { }

}
