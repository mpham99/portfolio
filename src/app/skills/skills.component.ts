import { Component, OnInit } from '@angular/core';

export interface SkillCategory {
  name: string;
  icon: string;
  skills: string[];
  color: string;
}

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  skillCategories: SkillCategory[] = [
    {
      name: 'Languages',
      icon: '💻',
      color: '#EF4444',
      skills: ['Java', 'Python', 'TypeScript', 'JavaScript', 'SQL', 'HTML/CSS', 'PowerShell']
    },
    {
      name: 'Frameworks & Libraries',
      icon: '🏗️',
      color: '#F97316',
      skills: ['Angular', 'Spring Boot', 'REST APIs', 'Power Apps', 'Bootstrap']
    },
    {
      name: 'Databases',
      icon: '🗄️',
      color: '#FBBF24',
      skills: ['Oracle SQL', 'MySQL', 'ETQ Reliance', 'Documentum']
    },
    {
      name: 'Tools & Technologies',
      icon: '⚙️',
      color: '#06B6D4',
      skills: ['Git', 'Docker', 'OpenShift', 'Bamboo', 'GitLab', 'JIRA', 'Jenkins', 'Adobe Sign', 'Power Automate', 'AI Copilot Studio']
    },
    {
      name: 'Systems & Platforms',
      icon: '🖥️',
      color: '#10B981',
      skills: ['Linux/Unix', 'Windows', 'CentOS', 'Ubuntu', 'VMware vSphere', 'Microsoft Azure', 'OpenText xECM']
    },
    {
      name: 'Methodologies',
      icon: '📋',
      color: '#8B5CF6',
      skills: ['Agile', 'CI/CD', 'SDLC', 'System Integration', 'Technical Support']
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
