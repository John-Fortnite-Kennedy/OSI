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


  userinfo;
  name;
  surname;
  role;

  

  constructor(public router: Router) {
    this.userinfo  =  sessionStorage.getItem('user');
    this.name = this.userinfo.substring(this.userinfo.indexOf('"name":"')+8, this.userinfo.indexOf('","surname"'));
    this.surname = this.userinfo.substring(this.userinfo.indexOf('"surname":"')+11, this.userinfo.indexOf('","phone"'));
    this.role = this.userinfo.substring(this.userinfo.indexOf('"globalRole":"')+14, this.userinfo.indexOf('","isOnline"'));
    var tmp = this.userinfo.substring(this.userinfo.indexOf('"houseId":'), this.userinfo.length);
    //console.log(tmp.substring(10, tmp.indexOf(',"name"')));
    tmp = tmp.substring(10, tmp.indexOf(',"name"'));
    sessionStorage.setItem('houseId', tmp);
  }

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
    this.router.navigateByUrl("/" + data);

    // switch(data) {
    //   case 'services':
    //   this.router.navigateByUrl("/services");
    //   break
    //   case 'requests':
    //   this.router.navigateByUrl("/requests");
    //   break
    //   case 'reports':
    //   this.router.navigateByUrl("/reports");
    //   break
    //   case 'search':
    //   this.router.navigateByUrl("/search");
    //   break
    //   case 'repairs':
    //   this.router.navigateByUrl("/repairs");
    //   break
    //   case 'osi-info':
    //   this.router.navigateByUrl("/osi-info");
    //   break
    //   case 'services':
    //   this.router.navigateByUrl("/voting");
    //   break
    // }
  }

  reachedEnd() {
    this.show = true;
  }

  ngOnInit(){
    console.log(this.userinfo);
    //var tmp = this.userinfo.substring(this.userinfo.indexOf('"houseId":'), this.userinfo.length);
    //console.log(tmp.substring(10, tmp.indexOf(',"name"')));
    //console.log(this.userinfo.substring(this.userinfo.indexOf('"houseId":'), this.userinfo.length));
  }

  
}
