import { Component, OnInit } from '@angular/core';
import {gsap} from 'gsap'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  ngOnInit(){

    window.onload = function () {
      const $smallBall = document.querySelector('.cursor__ball--small');
      const $hoverables = document.querySelectorAll('.hoverable');
  
      // Listeners
      document.body.addEventListener('mousemove', onMouseMove);
      for (let i = 0; i < $hoverables.length; i++) {
          // if (window.CP.shouldStopExecution(0)) break;
          $hoverables[i].addEventListener('mouseenter', onMouseHover);
          $hoverables[i].addEventListener('mouseleave', onMouseHoverOut);
      }
  
      // Move the cursor
      // window.CP.exitedLoop(0);
  
      function onMouseMove(e) {
          gsap.to($smallBall, .1, {
              x: e.pageX - 12,
              y: e.pageY - 10
          });
  
      }
  
      // Hover an element
      function onMouseHover() {
          gsap.to($smallBall, .3, {
              scale: 1.5
          });
      }
  
      function onMouseHoverOut() {
          gsap.to($smallBall, .3, {
              scale: 1
          });
      }
    }
    
  }
}
