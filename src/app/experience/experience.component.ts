import { Component } from '@angular/core';

export interface Experience {
  company: string;
  title: string;
  period: string;
  location: string;
  type: 'full-time' | 'co-op' | 'contract';
  responsibilities: string[];
  technologies: string[];
  current?: boolean;
}

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {
  experiences: Experience[] = [
    {
      company: 'Canadian Blood Services',
      title: 'System Analyst / Web Developer',
      period: 'September 2021 - Present',
      location: 'Ottawa, ON, Canada',
      type: 'full-time',
      current: true,
      technologies: ['Java', 'Angular', 'Spring Boot', 'Oracle DB', 'Documentum', 'xECM', 'Power Apps', 'Adobe Sign'],
      responsibilities: [
        'Participate in OpenText xECM deployment to replace Documentum, including system planning, content migration, and custom integrations',
        'Maintain and improve OpenText Documentum using Java and DFS library, enhancing system reliability',
        'Develop full-stack Angular and Spring Boot web applications with Oracle DB for internal stakeholders',
        'Build Java-based REST API integration between ETQ Reliance and Documentum for automated data sync',
        'Design web/mobile tools with Power Apps and AI Copilot Studio to boost employee productivity',
        'Lead e-signature deployment and configure Adobe Sign workflows with stakeholders',
        'Resolve system and hardware issues, delivering technical documentation'
      ]
    },
    {
      company: 'Ciena',
      title: 'Technician II',
      period: 'February 2021 - September 2021',
      location: 'Ottawa, ON, Canada',
      type: 'full-time',
      technologies: ['Python', 'Shell', 'Linux', 'WaveserverOS', 'QC', 'JIRA'],
      responsibilities: [
        'Performed manual testing and developed automated testing scripts using Shell and Python',
        'Upgraded and installed software for WaveserverOS (Linux kernel) and provided support for network lab equipment',
        'Collaborated with software designers in Agile development to deliver new capabilities and test coverage',
        'Troubleshot hardware and software integration, installation, and performance issues',
        'Raised JIRA tickets for bugs and enhancements, managed test cases using QC'
      ]
    },
    {
      company: 'Canadian Blood Services',
      title: 'Enterprise Software Developer (Co-op)',
      period: 'May 2020 - August 2020',
      location: 'Ottawa, ON, Canada',
      type: 'co-op',
      technologies: ['Angular', 'Spring Boot', 'Oracle SQL', 'Docker', 'OpenShift', 'Bamboo', 'GitLab'],
      responsibilities: [
        'Developed and maintained full-stack applications (Angular, Spring Boot, Oracle SQL)',
        'Implemented CI/CD pipelines using GitLab, Bamboo, OpenShift, and Docker for automated deployments',
        'Collaborated with Business Analysts and BI teams to align software development with business goals',
        'Engaged in full Agile SDLC to deliver reliable, scalable internal applications'
      ]
    },
    {
      company: 'Rianta Solutions',
      title: 'IT/Network Specialist (Co-op)',
      period: 'January 2019 - August 2019',
      location: 'Ottawa, ON, Canada',
      type: 'co-op',
      technologies: ['Shell Scripts', 'CentOS', 'Ubuntu', 'Puppet', 'Foreman', 'VMware vSphere', 'PowerShell'],
      responsibilities: [
        'Served as Tier-1 IT support, resolving user tickets and technical issues efficiently',
        'Automated server tasks using shell scripts on CentOS and Ubuntu enterprise systems',
        'Deployed Puppet and Foreman to automate 80% of server provisioning on VMware vSphere'
      ]
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  getTypeLabel(type: string): string {
    switch (type) {
      case 'full-time':
        return 'Full-Time';
      case 'co-op':
        return 'Co-op';
      default:
        return 'Contract';
    }
  }
}

