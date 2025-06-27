const images = import.meta.glob('/src/assets/fruits/images/*.avif', {
  eager: true,
  import: 'default',
});

const fruitImages: Record<string, string> = {};

Object.entries(images).forEach(([path, url]) => {
  const filename = path.split('/').pop() || '';
  const fruitName = filename.split('.')[0] // Annona.avif => Annona
    .toLowerCase()
    .replace(/\s+/g, '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');

  fruitImages[fruitName] = url as string;
});

export const getFruitImageLoader = (fruitName: string): string => {
  const normalized = fruitName
    .toLowerCase()
    .replace(/\s+/g, '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');

  return fruitImages[normalized] || fruitImages['notavailable'] || '';
};