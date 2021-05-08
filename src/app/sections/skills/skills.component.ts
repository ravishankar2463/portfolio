import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  constructor() { }

  gridColumns:number = 4;
  skillsArray = [
                  {'title':'Python',
                    'description' : "This is the description for python"},
                  {'title':'Java',
                    'description' : "This is the description for Java"},
                  {'title':'Angular',
                    'description' : "This is the description for Angular"},
                  {'title':'Html',
                    'description' : "This is the description for HTML"},
                  {'title':'Css',
                    'description' : "This is the description for CSS"},
                  {'title':'JavaScript',
                    'description' : "This is the description for Javascript"}
                ];

  

  ngOnInit(){
    window.onload = this.shuffle;
  }

  shuffle(){
    let max = 8;
    let min =-8;

    var cards = document.getElementsByClassName("card");
    let globalStyles = '';

    function css(style) {
      globalStyles += style;
    }


    // if(screen.width > 640)
    if(screen.width > 0){
      if(cards.length > 0){
        for(let i=0; i<cards.length; i++){    
          // generating a random number
          let a = Math.floor(Math.random() * (max - min + 1)) + min;

          if(a == 0){
            a = Math.floor(Math.random() * (max - min + 1)) + min;
          }

          // display a random number
          // console.log(`Random value between ${min} and ${max} is ${a}`);

          css( 
            '.card-'+i+'{'+
              'transform-origin: 50% 0%;' +
              'transform: rotate('+a+'deg);'+
            '}'
          );
        }
      }
    }

    var style = document.getElementById('global-styles');
    style.innerHTML = globalStyles;
  }

}
