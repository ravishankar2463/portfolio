import { Component, OnInit } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';
import { AnimationItem } from 'lottie-web';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  currentlyOpenToJobs:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  options: AnimationOptions = {
    path: 'assets/58598-humans.json',
  };

  animationCreated(animationItem: AnimationItem): void {
    animationItem.setSpeed(0.6);
    console.log(animationItem);
  }

}
