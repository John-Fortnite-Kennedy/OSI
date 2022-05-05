import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonInput, ModalController } from '@ionic/angular';
import { TermsPage } from '../terms/terms.page';
import { ApiCallerService } from '../api-caller.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  keyboard = [1,2,3,4,5,6,7,8,9,null,0];
  text = "+7 (xxx) xxx xxxx";
  textArr = this.text.split('');
  counter = 3;
  decent = false;
  phone;
  @ViewChild(IonInput) input;

  constructor(private modalController: ModalController, public router: Router, public api: ApiCallerService) {
  }

  ngOnInit() {
    console.log(this.textArr.length)
  }

  isNumber(char) {
    return /^\d$/.test(char);
  }

  login(){
    var tmp = this.text.replace(/\(|\)| /g, '');
    tmp = tmp.trim();
    //console.log(this.text.trim());
    
    var data = {
      "phone": tmp,
    }
    //console.log(data)
    var response = this.api.sendPostRequest(data, "/common/login")
    response.subscribe(data => {
      //sessionStorage.setItem('manager_access_data', JSON.stringify(data['payload']))
      console.log(data['payload']);
      sessionStorage.setItem('code',data['payload']);
      sessionStorage.setItem('phone',tmp);
      this.router.navigateByUrl('/code-confirmation');
    }, error => {
      // Add if login and password is incorrect.
      this.api.errorHandler(error.status);
    })
  }

  val(){
    this.textArr[0] = '-'
    this.text = this.textArr.join('')
  }

  setVal(val) {
    this.input.setFocus()
    if(val!=null){
      while(this.textArr[this.counter] != 'x'){
        if(this.counter<this.textArr.length-1){
          this.counter++
        }
        else{
          return
        }
      }
      this.textArr[this.counter] = val
      this.text = this.textArr.join('')
      if(this.counter<this.textArr.length){
        this.counter++
      }
      if(this.counter==17){
        console.log("done");
        this.decent = true;
      }
    }
  }

  back(){
    this.input.setFocus()
    while(!this.isNumber(this.textArr[this.counter])){
      if(this.counter>3){
        this.counter--
      }
      else{
        return
      }
    }
    this.textArr[this.counter] = 'x'
    this.text = this.textArr.join('')
    if(this.counter>3){
      this.counter--
    }
    console.log(this.counter);
    this.decent = false;
  }

  logEvent($event){
    console.log($event)
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: TermsPage,
      cssClass: 'my-custom-class',
    });
    return await modal.present();
  }

}
