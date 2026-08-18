import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const essays = defineCollection({
  loader: glob({ base: './src/content/essays', pattern: '**/*.{md,mdx}' }),
  schema: ({ image }) => z.object({
    title: z.string(),
    // Lead image. Also used as the social preview for this piece.
    cover: image().optional(),
    coverAlt: z.string().optional(),
    // One line under the title on the homepage. Optional.
    description: z.string().optional(),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    // Set true to keep a piece out of the site until it is ready.
    draft: z.boolean().default(false),
  }),
});

const papers = defineCollection({
  loader: glob({ base: './src/content/papers', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    // e.g. 'Imperial College London' or a conference name.
    venue: z.string().optional(),
    authors: z.string().optional(),
    date: z.coerce.date(),
    // A file you dropped in public/papers/, or any external URL.
    href: z.string(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { essays, papers };
