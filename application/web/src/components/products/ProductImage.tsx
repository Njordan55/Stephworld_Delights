import Image from 'next/image';
import type {ProductPresentation} from '@/config/products';

export default function ProductImage({image, alt, enlarged = false}: {
  image: NonNullable<ProductPresentation['image']>;
  alt: string;
  enlarged?: boolean;
}) {
  const crop = image.crop;
  const frameSize = enlarged ? '(max-width: 1023px) 100vw, 50vw' : '(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 34vw';
  const factor = crop ? image.width / crop.width : 1;
  return <Image src={image.src} width={image.width} height={image.height} alt={alt}
    loading={enlarged ? 'eager' : 'lazy'}
    sizes={crop ? `(max-width: 767px) ${Math.ceil(factor * 100)}vw, (max-width: 1023px) ${Math.ceil(factor * (enlarged ? 100 : 50))}vw, ${Math.ceil(factor * (enlarged ? 50 : 34))}vw` : frameSize}
    className={crop ? 'absolute' : `h-full w-full ${enlarged ? 'object-contain' : 'object-cover'}`}
    style={crop ? {width: `${factor * 100}%`, maxWidth: 'none', height: 'auto', left: `${-crop.x / crop.width * 100}%`, top: `${-crop.y / crop.height * 100}%`} : undefined} />;
}
