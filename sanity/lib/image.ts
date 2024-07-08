// import createImageUrlBuilder from '@sanity/image-url'
// import type { Image } from 'sanity'

// import { dataset, projectId } from '../env'

// const imageBuilder = createImageUrlBuilder({
//   projectId: projectId || '',
//   dataset: dataset || '',
// })

// export const urlForImage = (source: Image) => {
//   return imageBuilder?.image(source).auto('format').fit('max').url()
// }

import createImageUrlBuilder from "@sanity/image-url";
import type { Image } from "sanity";

import { dataset, projectId } from "../env";

if (!projectId || !dataset) {
  throw new Error("Sanity projectId and dataset must be defined");
}

const imageBuilder = createImageUrlBuilder({
  projectId,
  dataset,
});

export const urlForImage = (source: Image) => {
  if (!source) {
    console.error("Invalid image source:", source);
    return ""; // Return a placeholder image URL or empty string
  }

  try {
    const url = imageBuilder.image(source).auto("format").fit("max").url();
    return url;
  } catch (error) {
    console.error("Error generating image URL:", error);
    return ""; // Return a placeholder image URL or empty string
  }
};
