import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: "./views/MainAppComponent.html",
  styleUrls: ['./styles/hero-app.component.css']
})
export class AppComponent
{ 
    title: string;

    constructor()
    {
        this.title = "ultra-64";
    }

}

