import { Component, OnInit } from '@angular/core';
import VanillaTilt from 'vanilla-tilt';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.tilt()
  }

  tilt(){
    const contact_card = document.getElementById("contact-card");
    console.log(contact_card);
    VanillaTilt.init(contact_card, {
        max: 5,
        speed: 300,
        scale: 1.05,
        // speed: 1000,    // Speed of the enter/exit transition
        transition: true,   // Set a transition on enter/exit.
    });
  }
}
