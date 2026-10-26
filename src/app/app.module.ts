import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TypingAnimationModule } from 'angular-typing-animation';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AboutMeComponent } from './about-me/about-me.component';
import { AboutMeTerminalComponent } from './about-me/about-me-terminal/about-me-terminal.component';
import { PersonalProjectsComponent } from './personal-projects/personal-projects.component';
import { HeroComponent } from './hero/hero.component';
import { ExperienceComponent } from './experience/experience.component';
import { SkillsComponent } from './skills/skills.component';
import { EducationComponent } from './education/education.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutMeComponent,
    AboutMeTerminalComponent,
    PersonalProjectsComponent,
    HeroComponent,
    ExperienceComponent,
    SkillsComponent,
    EducationComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    TypingAnimationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

