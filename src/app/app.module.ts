import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {LottieModule} from 'ngx-lottie';
import player from 'lottie-web/build/player/lottie_light';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './sections/landing/landing.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutComponent } from './sections/about/about.component';
import { SkillsComponent } from './sections/skills/skills.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ContactComponent } from './sections/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';

export function playerFactory() {
  return player;
}

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    NavbarComponent,
    AboutComponent,
    SkillsComponent,
    ContactComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LottieModule.forRoot({ 
                          player: playerFactory,
                          useCache: true, }),
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
