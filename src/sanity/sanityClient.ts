// src/lib/sanityClient.ts
import { createClient } from '@sanity/client';

export const client = createClient({
  projectId: '0t5kzyxt', // replace with your Sanity project ID
  dataset: 'production', // or your dataset name
  apiVersion: '2024-04-01',
  useCdn: false,
  token: import.meta.env.VITE_SANITY_WRITE_TOKEN, // store this token in .env
});
