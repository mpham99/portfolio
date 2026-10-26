import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  contactInfo = {
    email: 'minhduc99@outlook.com',
    phone: '+1 613-513-3651',
    location: 'Kanata, Ottawa, ON, Canada',
    linkedin: 'https://linkedin.com/in/mpham99/',
    github: 'https://github.com/mpham99',
    twitter: 'https://twitter.com'
  };

  constructor() { }

  ngOnInit(): void {
  }

  openEmail() {
    window.location.href = `mailto:${this.contactInfo.email}`;
  }
}
