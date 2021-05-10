import { Component, OnInit, NgZone } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';
import { AnimationItem } from 'lottie-web';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  currentlyOpenToJobs:boolean = false;

  constructor(private ngZone: NgZone) {}

  private animationItem: AnimationItem;

  ngOnInit(): void {
  }

  options: AnimationOptions = {
    path: 'assets/58598-humans.json',
  };

  animationCreated(animationItem: AnimationItem): void {
    this.animationItem = animationItem;
    this.animationItem.setSpeed(0.6);
    console.log(animationItem);
  }

  stop(): void {
    this.ngZone.runOutsideAngular(() => this.animationItem.stop());
  }

  play(): void {
    this.ngZone.runOutsideAngular(() => this.animationItem.play());
  }

}
