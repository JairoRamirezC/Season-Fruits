const availableImages = [
  'annona',
  'apple',
  'banana',
  'blackberry',
  'ceylongooseberry',
  'cherry',
  'cranberry',
  'durian',
  'feijoa',
  'fig',
  'gooseberry',
  'grape',
  'guava',
  'jackfruit',
  'japanesepersimmon',
  'kiwi',
  'kiwifruit',
  'lime',
  'lingonberry',
  'lychee',
  'mango',
  'mangosteen',
  'melon',
  'papaya',
  'passionfruit',
  'peach',
  'pear',
  'persimmon',
  'pineapple',
  'plum',
  'pomelo',
  'pumpkin',
  'raspberry',
  'strawberry',
  'tangerine',
  'tomato',
];


export const getFruitImageLoader = (fruitName: string): string => {
  const normalized = fruitName
    .toLowerCase()
    .replace(/\s+/g, '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');

  const match = availableImages.find(name => name === normalized);
  
  if (match) {
    return `../../../public/images/fruits/${match}.avif`;
  }

  return '../../../public/images/fruits/notavailable.avif'; // ruta de imagen por defecto
};
