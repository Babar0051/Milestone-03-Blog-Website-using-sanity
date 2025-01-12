import createImageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { dataset, projectId } from "../env";

if (!projectId || !dataset) {
  throw new Error("Sanity project ID or dataset is missing in the environment.");
}

const builder = createImageUrlBuilder({ projectId, dataset });

export const urlFor = (source: SanityImageSource) => builder.image(source);
