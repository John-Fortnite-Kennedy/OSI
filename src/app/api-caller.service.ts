import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { webSocket } from 'rxjs/webSocket';

@Injectable({
  providedIn: 'root'
})
export class ApiCallerService {

  myjwt: any;
  router: any;

  constructor(public http: HttpClient) {

  }

  const_url = "https://barystech.kz/api" //"https://saktan.kz/api"

  ngOnInit(){}

  connectToWebsocket(){
    var ws = webSocket('ws://185.22.64.115:4001/api/ws/online');
    clearInterval();
    ws.subscribe(
      msg => {
        var obj = JSON.parse(JSON.stringify(msg))
        console.log(obj)
        // if(obj.payload){
        //   this.currentRequests = obj.payload;
        //   console.log(this.currentRequests);
        //   for(var i = 0; i < this.currentRequests.length; i++){  
        //     this.filter(this.currentRequests[i]);
        //   }
        // }else if(obj.insert){
        //   console.log(obj.insert)
        //   this.filter(obj.insert);
        //   this.currentRequests.unshift(obj.insert);
        // }else if(obj.update){
        //   this.filter(obj.update);
        //   var index = this.currentRequests.findIndex(function(el) {
        //     return el.id == obj.update.id
        //   });
        //   this.currentRequests.splice(index, 1)
        //   this.currentRequests.unshift(obj.update);
        //   this.currentRequests.sort(function(a, b) {
        //     if (a.id < b.id) return 1;
        //     if (a.id > b.id) return -1;
        //     return 0;
        //   })     
        // }
      }, // Called whenever there is a message from the server.

      err => console.log(err), // Called if at any point WebSocket API signals some kind of error.

      () => {
        console.log("again");
        setInterval(this.connectToWebsocket, 5000)
        
      } // Called when connection is closed (for whatever reason).
    );
  }

  sendPostRequest(data: any, url: string) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Accept': 'application/json',
        })
      };

    return this.http.post(this.const_url+url, data, httpOptions)

  }

  sendPostRequestWithAuth(data: any, url: string) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Accept': 'application/json',
        'Akis-Jwt-Token': this.myjwt
        })
      };

    return this.http.post(this.const_url+url, data, httpOptions)
  }

  sendPatchRequest(data: any, url: string) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Accept': 'application/json',
        })
      };

    return this.http.patch(this.const_url+url, data, httpOptions)

  }

  sendPatchRequestWithAuth(data: any, url: string) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Accept': 'application/json',
        'Akis-Jwt-Token': this.myjwt
        })
      };

    return this.http.patch(this.const_url+url, data, httpOptions)
  }


  sendGetRequest(url: string) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Accept': 'application/json',
        })
      };

    return this.http.get(this.const_url+url, httpOptions)
  }


  sendGetRequestWithAuth(url: string) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Accept': 'application/json',
        'Akis-Jwt-Token': this.myjwt
        })
      };

    return this.http.get(this.const_url+url, httpOptions)
  }

  // getRequest(url: string): Promise<any> {
  //   return new Promise<any>(
  //     function (resolve, reject) {
  //       const request = new XMLHttpRequest();
  //       request.onload = function () {
  //         if (this.status === 200) {
  //           resolve(this.response);
  //         } else {
  //           reject(new Error(this.statusText));
  //         }
  //       };
  //       request.onerror = function () {
  //         reject(new Error('XMLHttpRequest Error: ' + this.statusText));
  //       };
  //       request.open('GET', url);
  //       request.send();
  //     })
  //   }

  errorHandler(errorcode: number){
    // if (errorcode == 500) {
    //   return "Произошла серверная ошибка!"
    // }
    // if (errorcode == 404){
    //   return "Не найдено!"
    // }
    // if (errorcode == 400){
    //   return "Неправильный запрос!"
    // }
  }

  apiErrorHandlingManager(error: any) {
    if (error.status == 401 || error.status == 403 || error.status == 405) {
      sessionStorage.removeItem("manager_access_data");
      console.log(error.status)
      this.router.navigateByUrl('/gate');
    }
  }
  apiErrorHandlingUser(error: any) {
    if (error.status == 401 || error.status == 403 || error.status == 405) {
      sessionStorage.removeItem("user_access_data");
      console.log(error.status)
      this.router.navigateByUrl('/auth');
    }
  }

}
