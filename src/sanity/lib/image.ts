import createImageUrlBuilder from '@sanity/image-url';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { dataset, projectId } from '../env';

// Create a URL builder instance
const builder = createImageUrlBuilder({
  projectId: projectId || '', // Ensure projectId is a non-empty string
  dataset: dataset || '', // Ensure dataset is a non-empty string
});

/**
 * Generates the image URL for a given source.
 */
export const urlFor = (source: SanityImageSource) => {
  return builder.image(source);
};
