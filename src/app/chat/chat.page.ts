import { Component, OnInit } from '@angular/core';
import { webSocket } from 'rxjs/webSocket';
import { ApiCallerService } from '../api-caller.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {

  userinfo;
  tmp;

  myId;

  allmessages = [];

  

  constructor(public api: ApiCallerService) { 
    this.api.myjwt =  sessionStorage.getItem('token');
    this.userinfo  =  JSON.parse(sessionStorage.getItem('user'));
    this.myId = this.userinfo.user.id;
    //this.userinfo.houses[0].id;
    //this.tmp = this.userinfo.substring(this.userinfo.indexOf('"houseId":'), this.userinfo.length);
    //console.log(tmp.substring(10, tmp.indexOf(',"name"')));
    //this.tmp = this.tmp.substring(10, this.tmp.indexOf(',"name"'));
    sessionStorage.setItem('houseId', this.userinfo.houses[0].houseId);
    this.connectToWebsocket();
  }

  connectToWebsocket(){
    var ws = webSocket('ws://185.22.64.115:4001/api/ws/messages?key='+this.api.myjwt+'&houseId='+this.userinfo.houses[0].houseId);

    ws.subscribe(
      msg => {
        var obj = JSON.parse(JSON.stringify(msg))
        //console.log(obj)
        if(obj.payload_messages){
          this.allmessages = obj.payload_messages;
          console.log(this.allmessages);
          
        }else if(obj.insert_message){
          console.log(obj.insert_message)
          
          this.allmessages.unshift(obj.insert_message);
        }
      }, // Called whenever there is a message from the server.

      err => console.log(err), // Called if at any point WebSocket API signals some kind of error.

      () => {
        
        setInterval(this.connectToWebsocket, 5000)
      } // Called when connection is closed (for whatever reason).
    );
  }

  ngOnInit() { }

}
