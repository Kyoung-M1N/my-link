export interface LinkProps {
  id: string;
  title: string;
  url: string;
  faviconUrl?: string;
  order: number;
  createdAt: string;
}

export const DUMMY_LINKS: LinkProps[] = [
  {
    id: 'link-1',
    title: '인스타그램',
    url: 'https://instagram.com',
    faviconUrl: 'https://www.instagram.com/favicon.ico',
    order: 0,
    createdAt: new Date().toISOString(),
  },
  {
    id: 'link-2',
    title: '유튜브',
    url: 'https://youtube.com',
    faviconUrl: 'https://www.youtube.com/favicon.ico',
    order: 1,
    createdAt: new Date().toISOString(),
  },
  {
    id: 'link-3',
    title: '블로그',
    url: 'https://velog.io',
    faviconUrl: 'https://velog.io/favicon.ico',
    order: 2,
    createdAt: new Date().toISOString(),
  },
  {
    id: 'link-4',
    title: '깃허브',
    url: 'https://github.com',
    faviconUrl: 'https://github.com/favicon.ico',
    order: 3,
    createdAt: new Date().toISOString(),
  },
  {
    id: 'link-5',
    title: '포트폴리오',
    url: 'https://portfolio.com',
    faviconUrl: 'https://portfolio.com/favicon.ico',
    order: 4,
    createdAt: new Date().toISOString(),
  },
];
