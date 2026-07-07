import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const repository = process.env.GITHUB_REPOSITORY?.split('/')[1];
const isGitHubPagesBuild = Boolean(process.env.GITHUB_ACTIONS && repository);
const isUserOrOrgPage = repository?.endsWith('.github.io');

export default defineConfig({
  site: isGitHubPagesBuild
    ? `https://${process.env.GITHUB_REPOSITORY_OWNER}.github.io`
    : 'https://kunalkarnik.com',
  base: isGitHubPagesBuild && !isUserOrOrgPage ? `/${repository}` : '/',
  output: 'static',
  integrations: [sitemap()]
});
