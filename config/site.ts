import { Icons } from '@/components/icons';

export const siteConfig = {
  name: 'Sphexa',
  description:
    'French software company passionate about cybersecurity, software engineering, and web development',
  slogan: 'We code with care. We secure with purpose.',
  keywords: [
    'IT',
    'Software development',
    'Web development',
    'Cybersecurity',
    'Software engineering',
    'Web design',
    'Web application',
    'Web development company',
    'Software company',
    'IT company',
    'IT services',
    'IT consulting'
  ],
  authors: [
    {
      name: 'spxnso',
      url: 'https://spxnso.vercel.app'
    }
  ],
  creator: 'spxnso',
  icons: {
    icon: '/favicon/favicon.svg',
    shortcut: '/favicon/favicon.ico',
    apple: '/favicon/apple-touch-icon.png'
  },
  notFound: {
    items: [
      {
        title: 'About',
        description:
          'Ullamco aliqua non occaecat reprehenderit ex aliquip esse aliqua ea.',
        href: '/',
        icon: Icons.About
      },
      {
        title: 'Services',
        description:
          'Ullamco aliqua non occaecat reprehenderit ex aliquip esse aliqua ea.',
        href: '/',
        icon: Icons.Services
      }
    ]
  }
};
