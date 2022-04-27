import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-announcement',
  templateUrl: './announcement.page.html',
  styleUrls: ['./announcement.page.scss'],
})
export class AnnouncementPage implements OnInit {

  @Input() title: string;
  @Input() description: string;
  @Input() date: string;

  constructor(private modalController: ModalController) { }

  ngOnInit() { }

  dismiss() {
    this.modalController.dismiss();
  }

}
