import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-find',
  templateUrl: './find.page.html',
  styleUrls: ['./find.page.scss'],
})
export class FindPage implements OnInit {

  @Input() title: string;
  @Input() description: string;
  @Input() date: string;

  constructor(private modalController: ModalController) { }

  ngOnInit() { }

  dismiss() {
    this.modalController.dismiss();
  }

}
