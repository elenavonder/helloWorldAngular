import { Component } from '@angular/core';

//this is an object
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

//objects we make will be classes
export class AppComponent {
  title = 'Bootcamp in Angular';

  //property
  txt:string = "initial value";

  clicked(){
    this.title = "Changed the title message";
  }
}
