// TODO: locales, lol

import { Icons } from '@/components/icons';

export const landingPageConfig = {
  navbar: {
    items: [
      {
        title: 'Home',
        href: '/'
      },
      {
        title: 'About',
        href: '/about'
      },
      {
        title: 'Services',
        href: '/services'
      },
      {
        title: 'Team',
        href: '/team'
      },

      {
        title: 'Projects',
        href: '/projects'
      },
      {
        title: 'Blog',
        href: '/blog'
      },
      {
        title: 'Contact',
        href: '/contact'
      }
    ]
  },
  services: [
    {
      icon: Icons.WebDevelopment,
      title: 'Web Development',
      description: 'We create stunning and responsive websites.',
      href: '/services/web-development'
    },
    {
      icon: Icons.AppDevelopment,
      title: 'App Development',
      description: 'We create custom software solutions.',
      href: '/services/app-development'
    }
  ],
  legal: [
    {
      title: 'Terms of Service',
      href: '/terms'
    }
  ],
  social: [
    {
      title: 'GitHub',
      icon: Icons.Github,
      href: 'https://github.com/Sphexa-EURL'
    }
  ],
  language: {
    defaultCountry: 'GB',
    countries: [
      {
        name: 'English',
        code: 'GB'
      },
      {
        name: 'France',
        code: 'FR'
      }
    ]
  }
};
