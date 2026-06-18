import type { SizeGuideRow } from '@/types';

export const sizeGuideData: SizeGuideRow[] = [
  { size: 'XS', chest: { cm: 112, inches: 44 }, length: { cm: 68, inches: 26.8 }, shoulder: { cm: 52, inches: 20.5 }, sleeve: { cm: 22, inches: 8.7 } },
  { size: 'S', chest: { cm: 116, inches: 45.7 }, length: { cm: 70, inches: 27.6 }, shoulder: { cm: 54, inches: 21.3 }, sleeve: { cm: 23, inches: 9.1 } },
  { size: 'M', chest: { cm: 120, inches: 47.2 }, length: { cm: 72, inches: 28.3 }, shoulder: { cm: 56, inches: 22.0 }, sleeve: { cm: 24, inches: 9.4 } },
  { size: 'L', chest: { cm: 124, inches: 48.8 }, length: { cm: 74, inches: 29.1 }, shoulder: { cm: 58, inches: 22.8 }, sleeve: { cm: 25, inches: 9.8 } },
  { size: 'XL', chest: { cm: 128, inches: 50.4 }, length: { cm: 76, inches: 29.9 }, shoulder: { cm: 60, inches: 23.6 }, sleeve: { cm: 26, inches: 10.2 } },
  { size: 'XXL', chest: { cm: 132, inches: 52.0 }, length: { cm: 78, inches: 30.7 }, shoulder: { cm: 62, inches: 24.4 }, sleeve: { cm: 27, inches: 10.6 } },
];

export const howToMeasure = [
  {
    title: 'Chest',
    description: 'Measure around the fullest part of your chest, keeping the tape measure horizontal.',
  },
  {
    title: 'Length',
    description: 'Measure from the highest point of the shoulder to the bottom hem.',
  },
  {
    title: 'Shoulder',
    description: 'Measure from shoulder seam to shoulder seam across the back.',
  },
  {
    title: 'Sleeve',
    description: 'Measure from the shoulder seam to the end of the sleeve cuff.',
  },
];
