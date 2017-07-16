import { Component } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  username: string; //updated from ngForm and ngModel = "username"
  status: string[] = [];
  score: number;

  constructor(private _httpService: HttpService){}
  getScore(){
    this._httpService.retrieveScore(this.username)
    .then(user => {this.score = user.followers + user.public_repos;
    if (this.score < 20) {
      this.status[0] = 'red';
      this.status[1] = "needs work!"
    }
    else {
      this.status[0] = "blue";
      this.status[1] = "github elite!"
    }
  
  })
  .catch(err => console.log(err))
  }
}


