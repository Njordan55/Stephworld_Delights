import Image from 'next/image';
import {Camera} from 'lucide-react';
import type {AboutPhotograph as Photograph} from '@/config/about';

export default function AboutPhotograph({image, alt, caption, placeholder, eager = false}: {
  image: Photograph | null;
  alt?: string;
  caption?: string;
  placeholder: string;
  eager?: boolean;
}) {
  const crop = image?.crop;
  return (
    <figure className="mx-auto w-full min-w-0 max-w-lg">
      <div className="relative aspect-square overflow-hidden rounded-[var(--swd-radius-default)] border" style={{backgroundColor: 'var(--swd-surface)', borderColor: 'var(--swd-border)'}}>
        {image ? <Image src={image.src} width={image.width} height={image.height} alt={alt ?? ''}
          loading={eager ? 'eager' : 'lazy'}
          sizes={crop ? `(max-width: 767px) ${Math.ceil(image.width / crop.width * 100)}vw, ${Math.ceil(512 * image.width / crop.width)}px` : '(max-width: 767px) 100vw, 512px'}
          className={crop ? 'absolute' : 'h-full w-full object-cover'}
          style={crop ? {width: `${image.width / crop.width * 100}%`, maxWidth: 'none', height: 'auto', left: `${-crop.x / crop.width * 100}%`, top: `${-crop.y / crop.height * 100}%`} : undefined} /> : (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-6 text-center text-sm leading-6">
            <Camera size={32} strokeWidth={1.25} aria-hidden="true" /><p>{placeholder}</p>
          </div>
        )}
      </div>
      {image && caption && <figcaption className="mt-3 text-xs leading-5">{caption}</figcaption>}
    </figure>
  );
}
