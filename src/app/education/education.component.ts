import { Component } from '@angular/core';

export interface Education {
  institution: string;
  degree: string;
  program: string;
  url?: string;
  location: string;
  highlights?: string[];
}

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent {
  education: Education[] = [
    {
      institution: 'McMaster University',
      degree: "Bachelor's",
      program: 'Software Engineering Technology',
      url: 'https://www.eng.mcmaster.ca/sept/degree-options/software-engineering-technology/',
      location: 'Hamilton, ON',
      highlights: ['Comprehensive Software Engineering curriculum', 'Full-stack development focus', 'System design and architecture']
    },
    {
      institution: 'Algonquin College',
      degree: "Associate's",
      program: 'Computer Engineering Technology - Computing Science (with Co-op)',
      url: 'https://www.algonquincollege.com/sat/program/computer-engineering-technology-computing-science/',
      location: 'Ottawa, ON',
      highlights: ['Cooperative education program', 'Hands-on technical training', 'Industry experience integration']
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
