import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-repair',
  templateUrl: './repair.page.html',
  styleUrls: ['./repair.page.scss'],
})
export class RepairPage implements OnInit {

  @Input() title: string;
  @Input() description: string;
  @Input() date: string;

  constructor(private modalController: ModalController) { }

  ngOnInit() { }

  dismiss() {
    this.modalController.dismiss();
  }

}
