import type {StaticImageData} from 'next/image';
import type messages from '../../messages/en.json';
import {aboutPreviewContent} from './about-preview';

type AboutKey = keyof typeof messages.About;
export type AboutText = {key: AboutKey; text?: string};
export type AboutPhotograph = {
  src: StaticImageData | string;
  width: number;
  height: number;
  crop?: {x: number; y: number; width: number; height: number};
  alt: AboutText;
  caption?: AboutText;
};
export type AboutContent = {
  introduction: AboutText;
  brandImage: AboutPhotograph | null;
  story: {paragraphs: readonly AboutText[]; image: AboutPhotograph | null};
  creations: {introduction: AboutText; productIds: readonly string[]};
  // Include only owner-approved values; an empty array renders a labelled placeholder.
  values: readonly {id: string; title: AboutText; description: AboutText}[];
  contact: AboutText;
};

const previewImage = aboutPreviewContent.image;

// Future published content can replace this record using active-locale text/media.
// Founder information and commitments remain empty until approved by the owner.
export const aboutContent: AboutContent = {
  introduction: {key: 'description'},
  brandImage: previewImage ? {
    src: previewImage.src, width: previewImage.width, height: previewImage.height,
    crop: previewImage.crop, alt: {key: 'brandPhotoAlt'}, caption: {key: 'brandPhotoCaption'}
  } : null,
  story: {paragraphs: [], image: null},
  creations: {introduction: {key: 'creationsDescription'}, productIds: ['red-rose-cake', 'cupcake-assortment', 'personalised-pink-cake']},
  values: [],
  contact: {key: 'contactDescription'}
};
