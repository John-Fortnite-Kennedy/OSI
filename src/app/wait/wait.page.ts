import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { createAnimation, Animation } from '@ionic/core';
import { interval, Subscription } from 'rxjs';
import { ApiCallerService } from '../api-caller.service';

@Component({
  selector: 'app-wait',
  templateUrl: './wait.page.html',
  styleUrls: ['./wait.page.scss'],
})
export class WaitPage implements OnInit {

  joinid;

  constructor(public router: Router, public api: ApiCallerService) {
    this.joinid  =  sessionStorage.getItem('joinid');
    this.api.myjwt =  sessionStorage.getItem('token');
  }

  subscription: Subscription;

  ngOnInit() {
    this.check();
    const source = interval(5000);
    const text = 'Your Text Here';
    this.subscription = source.subscribe(val => this.check());

    
    const animation: Animation = createAnimation('')
    .addElement(document.querySelector('.icon'))
    .duration(5000)
    .iterations(Infinity)
    .keyframes([
      { offset: 0, opacity: '0.3' },
      { offset: 0.70, opacity: '1' },
      { offset: 1, opacity: '0.3' }
    ]);
    animation.play();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  check(){

    //console.log(this.joinid);

    var response = this.api.sendGetRequestWithAuth("/auth/userdata")
          response.subscribe(data => {

            console.log(data['payload']);
            if (data['payload'].houses[0].verified == true){
              this.router.navigateByUrl('/tabs/home');
            }
            
          }, error => {
            // Add if login and password is incorrect.
            this.api.errorHandler(error.status);
          })


  }

}
