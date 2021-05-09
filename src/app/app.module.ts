import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {LottieModule} from 'ngx-lottie';
import player from 'lottie-web';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './sections/landing/landing.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutComponent } from './sections/about/about.component';
import { SkillsComponent } from './sections/skills/skills.component';
import { FlexLayoutModule } from '@angular/flex-layout';

export function playerFactory() {
  return player;
}

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    NavbarComponent,
    AboutComponent,
    SkillsComponent
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
