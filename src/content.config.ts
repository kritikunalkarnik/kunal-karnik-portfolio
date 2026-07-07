import { defineCollection, z } from 'astro:content';

const portfolio = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    industry: z.string(),
    result: z.string(),
    image: z.string(),
    date: z.date(),
    featured: z.boolean().default(false),
    stack: z.array(z.string()),
    facts: z.array(z.object({ label: z.string(), value: z.string() }))
  })
});

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.string(),
    date: z.date(),
    author: z.string(),
    image: z.string(),
    tags: z.array(z.string())
  })
});

export const collections = { portfolio, blog };
