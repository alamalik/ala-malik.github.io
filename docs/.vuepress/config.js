import { defaultTheme } from 'vuepress'

export default {
  lang: 'en-US',
  title: 'Alaa Malik Portfolio Docs',
  description: 'Case studies and project documentation',

  theme: defaultTheme({
    logo: '/logo.png',
    navbar: [
      { text: 'Home', link: '/' },
      { text: 'Projects', link: '/projects/' },
      { text: 'GitHub', link: 'https://github.com/alamalik' },
    ],
    sidebar: {
      '/projects/': [
        {
          text: 'Projects',
          children: ['/projects/stop-food-waste.md', '/projects/pet-shop.md'],
        },
      ],
    },
  }),
}
