import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInput, ModalController } from '@ionic/angular';
import { TermsPage } from '../terms/terms.page';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  keyboard = [1,2,3,4,5,6,7,8,9,null,0]
  text = "+7 (xxx) xxx xxxx"
  textArr = this.text.split('')
  counter = 3
  @ViewChild(IonInput) input

  constructor(private modalController: ModalController) {
  }

  ngOnInit() {
    console.log(this.textArr.length)
  }

  isNumber(char) {
    return /^\d$/.test(char);
  }

  login(){}

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
      if(this.counter<this.textArr.length-1){
        this.counter++
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
    console.log(this.counter)
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
