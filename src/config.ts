// Everything you are likely to edit lives here.

export const site = {
  name: 'Philipp Bogdan',
  // Shown under your name on the homepage. One entry per paragraph.
  // Empty: every route into the site already says what he studies.
  bio: [] as string[],
  // Used for <title>, RSS and social previews.
  description: 'Essays and papers by Philipp Bogdan.',
  // Add or remove freely. Leave the list empty to hide the footer links.
  links: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/philipp-bogdan/' },
    { label: 'X', href: 'https://x.com/philbog' },
    { label: 'GitHub', href: 'https://github.com/philippbogdan' },
    { label: 'RSS', href: '/rss.xml' },
    // { label: 'Email', href: 'mailto:you@example.com' },
  ],
} as const;
