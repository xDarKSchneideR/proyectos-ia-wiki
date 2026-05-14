// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://proyectos-ia-wiki.pages.dev',
  integrations: [
    starlight({
      title: 'Aprendiendo VibeCoding IA',
      defaultLocale: 'root',
      locales: {
        root: {
          label: 'Español',
          lang: 'es',
        },
        en: {
          label: 'English',
          lang: 'en',
        },
      },
      sidebar: [
        {
          label: 'PWAs',
          translations: {
            en: 'PWAs',
          },
          autogenerate: { directory: 'pwas' },
        },
        {
          label: 'Full-Stack',
          translations: {
            en: 'Full-Stack',
          },
          autogenerate: { directory: 'fullstack' },
        },
        {
          label: 'Herramientas',
          translations: {
            en: 'Tools',
          },
          autogenerate: { directory: 'herramientas' },
        },
        {
          label: 'Guía PWA',
          translations: {
            en: 'PWA Guide',
          },
          autogenerate: { directory: 'guia-pwa' },
        },
      ],
    }),
  ],
});
