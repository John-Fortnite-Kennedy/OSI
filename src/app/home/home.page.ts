import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonSlides} from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  @ViewChild('mySlider')  slides: IonSlides;

  show = false;

  constructor(public router: Router) {}

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

  goPage(data){
    switch(data) {
      case 'services':
      this.router.navigateByUrl("/services");
      break
      case 'requests':
      this.router.navigateByUrl("/requests");
      break
      case 'reports':
      this.router.navigateByUrl("/reports");
      break
      case 'search':
      this.router.navigateByUrl("/search");
      break
      case 'repairs':
      this.router.navigateByUrl("/repairs");
      break
      case 'osi-info':
      this.router.navigateByUrl("/osi-info");
      break
      case 'services':
      this.router.navigateByUrl("/voting");
      break
    }
  }

  reachedEnd() {
    this.show = true;
  }

  
}
