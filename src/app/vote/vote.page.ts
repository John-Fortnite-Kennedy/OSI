import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

interface problem {
  "id": number,
  "houseId": number,
  "senderId": number,
  "name": string,
  "description": string,
  "count": number,
  "createdTime": string
}

@Component({
  selector: 'app-vote',
  templateUrl: './vote.page.html',
  styleUrls: ['./vote.page.scss'],
})
export class VotePage implements OnInit {

  @Input() name: string;
  @Input() description : string;
  @Input() createdTime: string;
  @Input() yesCount: number;
  @Input() noCount: number;
  @Input() problem: problem;

  constructor(private modalController: ModalController) {
    
  }

  ngOnInit() { }

  dismiss() {
    this.modalController.dismiss();
  }

}
