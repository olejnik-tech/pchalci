import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit{

  ngAfterViewInit(): void {
    throw new Error("Method not implemented.");
  }

  title = 'Pchálci';

  scroll(el: HTMLElement) {
    el.scrollIntoView({behavior: 'smooth'});
  }
}


