import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

  @ViewChild('mySlider')  slides: IonSlides;

  show = false;

  slideOpts = {
    initialSlide: 0,
    speed: 400
  };

  onClick(){
    if(this.show){
      this.go();
    } else {
      this.slides.slideNext();
    }
  }

  go(){
    this.router.navigateByUrl("/login", {replaceUrl: true});
  }

  reachedEnd() {
    this.show = true;
  }

}
