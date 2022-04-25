import { Component, ViewChild } from '@angular/core';
import { IonSlides} from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  @ViewChild('mySlider')  slides: IonSlides;

  show = false;

  constructor() {}

  slideOpts = {
    initialSlide: 0,
    speed: 400
  };

  onClick(){
    if(this.show){
      alert("go");
    } else {
      this.slides.slideNext();
    }
  }

  go(){
    alert("go");
  }

  reachedEnd() {
    this.show = true;
  }

  
}
