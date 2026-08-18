// Everything you are likely to edit lives here.

export const site = {
  name: 'Philipp Bogdan',
  // Shown under your name on the homepage. One entry per paragraph.
  bio: [
    'I read Computing at Imperial College London.',
    'This is where I keep my writing: essays, and the papers I have worked on.',
  ],
  // Used for <title>, RSS and social previews.
  description: 'Essays and papers by Philipp Bogdan.',
  // Add or remove freely. Leave the list empty to hide the footer links.
  links: [
    { label: 'GitHub', href: 'https://github.com/philippbogdan' },
    { label: 'X', href: 'https://x.com/' },
    // { label: 'Email', href: 'mailto:you@example.com' },
  ],
} as const;
