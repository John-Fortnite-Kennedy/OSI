import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.page.html',
  styleUrls: ['./services.page.scss'],
})
export class ServicesPage implements OnInit {

  services = [
    {
      title: "Клининг",
      phone: "+7 (700) 000 0000",
      isWhatsApp: true
    },
    { 
      title: "Лифт",
      phone: "+7 (700) 000 0001",
      isWhatsApp: false
    },
    { 
      title: "Охрана",
      phone: "+7 (700) 000 0002",
      isWhatsApp: true
    }
  ];

  constructor() { }

  ngOnInit() { }

  openWhatsApp() {
    alert("Whatsapp");
  }

  callService() {
    alert("Звонок");
  }

  removeService(key) {
    console.log(key);
    this.services.splice(key,1);
  }

  addService() {

  }

}
