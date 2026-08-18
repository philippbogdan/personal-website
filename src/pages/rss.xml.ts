import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';
import { site } from '../config';

export async function GET(context: APIContext) {
  const essays = (await getCollection('essays'))
    .filter((e) => !e.data.draft)
    .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());

  return rss({
    title: site.name,
    description: site.description,
    site: context.site!,
    items: essays.map((e) => ({
      title: e.data.title,
      description: e.data.description,
      pubDate: e.data.date,
      link: `/essays/${e.id}/`,
    })),
  });
}
