import { Component } from '@angular/core';
import { MenuController, ModalController } from '@ionic/angular';
import { ProfilePage } from './profile/profile.page';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  public appPages = [
    { title: 'Профиль', url: 'profile', icon: 'settings-outline', badge: 0 },
  ];
  
  constructor(public menu: MenuController, public modal: ModalController) {}

  async openPage(p) {
    var component;
    switch (p) {
      case 0: component = ProfilePage
        break;
    }
    this.menu.close();
    const modal = await this.modal.create({
      component: component,
      swipeToClose: true,
    });
    return await modal.present();
  }
}
