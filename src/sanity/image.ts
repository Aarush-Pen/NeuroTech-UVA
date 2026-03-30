import imageUrlBuilder from '@sanity/image-url';
import { sanityClient } from './client';

const builder = imageUrlBuilder(sanityClient);

export function urlFor(source: { asset: { _id: string }; crop?: any; hotspot?: any }) {
  return builder.image(source);
}
