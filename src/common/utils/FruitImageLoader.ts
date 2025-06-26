// const fruitImages = import.meta.glob('../../assets/fruits/images/*.avif', {
//   eager: true,
//   import: 'default',
// });

import Annona from '../../assets/fruits/images/Annona.avif';
import Apple from '../../assets/fruits/images/Apple.avif';
import Banana from '../../assets/fruits/images/Banana.avif';
import Blackberry from '../../assets/fruits/images/Blackberry.avif';
import Ceylongooseberry from '../../assets/fruits/images/Ceylongooseberry.avif';
import Cherry from '../../assets/fruits/images/Cherry.avif';
import Cranberry from '../../assets/fruits/images/Cranberry.avif';
import Durian from '../../assets/fruits/images/Durian.avif';
import Feijoa from '../../assets/fruits/images/Feijoa.avif';
import Fig from '../../assets/fruits/images/Fig.avif';
import Gooseberry from '../../assets/fruits/images/Gooseberry.avif';
import Grape from '../../assets/fruits/images/Grape.avif';
import Guava from '../../assets/fruits/images/Guava.avif';
import Jackfruit from '../../assets/fruits/images/Jackfruit.avif';
import Japanesepersimmon from '../../assets/fruits/images/Japanesepersimmon.avif';
import Kiwi from '../../assets/fruits/images/Kiwi.avif';
import Kiwifruit from '../../assets/fruits/images/Kiwifruit.avif';
import Lime from '../../assets/fruits/images/Lime.avif';
import Lingonberry from '../../assets/fruits/images/Lingonberry.avif';
import Lychee from '../../assets/fruits/images/Lychee.avif';
import Mango from '../../assets/fruits/images/Mango.avif';
import Mangosteen from '../../assets/fruits/images/Mangosteen.avif';
import Melon from '../../assets/fruits/images/Melon.avif';
import Papaya from '../../assets/fruits/images/Papaya.avif';
import Passionfruit from '../../assets/fruits/images/Passionfruit.avif';
import Peach from '../../assets/fruits/images/Peach.avif';
import Pear from '../../assets/fruits/images/Pear.avif';
import Persimmon from '../../assets/fruits/images/Persimmon.avif';
import Pineapple from '../../assets/fruits/images/Pineapple.avif';
import Plum from '../../assets/fruits/images/Plum.avif';
import Pomelo from '../../assets/fruits/images/Pomelo.avif';
import Pumpkin from '../../assets/fruits/images/Pumpkin.avif';
import Raspberry from '../../assets/fruits/images/Raspberry.avif';
import Strawberry from '../../assets/fruits/images/Strawberry.avif';
import Tangerine from '../../assets/fruits/images/Tangerine.avif';
import Tomato from '../../assets/fruits/images/Tomato.avif';
import notavailable from '../../assets/fruits/images/notavailable.avif';

const fruitImages: Record<string, string> = {
  'annona': Annona,
  'apple': Apple,
  'banana': Banana,
  'blackberry': Blackberry,
  'ceylongooseberry': Ceylongooseberry,
  'cherry': Cherry,
  'cranberry': Cranberry,
  'durian': Durian,
  'feijoa': Feijoa,
  'fig': Fig,
  'gooseberry': Gooseberry,
  'grape': Grape,
  'guava': Guava,
  'jackfruit': Jackfruit,
  'japanesepersimmon': Japanesepersimmon,
  'kiwi': Kiwi,
  'kiwifruit': Kiwifruit,
  'lime': Lime,
  'lingonberry': Lingonberry,
  'lychee': Lychee,
  'mango': Mango,
  'mangosteen': Mangosteen,
  'melon': Melon,
  'papaya': Papaya,
  'passionfruit': Passionfruit,
  'peach': Peach,
  'pear': Pear,
  'persimmon': Persimmon,
  'pineapple': Pineapple,
  'plum': Plum,
  'pomelo': Pomelo,
  'pumpkin': Pumpkin,
  'raspberry': Raspberry,
  'strawberry': Strawberry,
  'tangerine': Tangerine,
  'tomato': Tomato,
  // Imagen por defecto para frutas no encontradas
  'default': notavailable
};

export const getFruitImageLoader = (fruitName: string):string => {
  const normalized = fruitName
    .toLowerCase()
    .replace(/\s+/g, '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');

  for (const path in fruitImages) {
    if (path.toLowerCase().includes(normalized)) {
      return fruitImages[path] as string;
    }
  }

  return '';
}
