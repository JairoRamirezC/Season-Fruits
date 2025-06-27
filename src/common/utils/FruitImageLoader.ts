import Annona from '../../../public/images/Annona.avif';
import Apple from '../../../public/images/images/Apple.avif';
import Banana from '../../../public/images/images/Banana.avif';
import Blackberry from '../../../public/images/images/Blackberry.avif';
import Ceylongooseberry from '../../../public/images/images/Ceylongooseberry.avif';
import Cherry from '../../../public/images/images/Cherry.avif';
import Cranberry from '../../../public/images/images/Cranberry.avif';
import Durian from '../../../public/images/images/Durian.avif';
import Feijoa from '../../../public/images/images/Feijoa.avif';
import Fig from '../../../public/images/images/Fig.avif';
import Gooseberry from '../../../public/images/images/Gooseberry.avif';
import Grape from '../../../public/images/images/Grape.avif';
import Guava from '../../../public/images/images/Guava.avif';
import Jackfruit from '../../../public/images/images/Jackfruit.avif';
import Japanesepersimmon from '../../../public/images/images/Japanesepersimmon.avif';
import Kiwi from '../../../public/images/images/Kiwi.avif';
import Kiwifruit from '../../../public/images/images/Kiwifruit.avif';
import Lime from '../../../public/images/images/Lime.avif';
import Lingonberry from '../../../public/images/images/Lingonberry.avif';
import Lychee from '../../../public/images/images/Lychee.avif';
import Mango from '../../../public/images/images/Mango.avif';
import Mangosteen from '../../../public/images/images/Mangosteen.avif';
import Melon from '../../../public/images/images/Melon.avif';
import Papaya from '../../../public/images/images/Papaya.avif';
import Passionfruit from '../../../public/images/images/Passionfruit.avif';
import Peach from '../../../public/images/images/Peach.avif';
import Pear from '../../../public/images/images/Pear.avif';
import Persimmon from '../../../public/images/images/Persimmon.avif';
import Pineapple from '../../../public/images/images/Pineapple.avif';
import Plum from '../../../public/images/images/Plum.avif';
import Pomelo from '../../../public/images/images/Pomelo.avif';
import Pumpkin from '../../../public/images/images/Pumpkin.avif';
import Raspberry from '../../../public/images/images/Raspberry.avif';
import Strawberry from '../../../public/images/images/Strawberry.avif';
import Tangerine from '../../../public/images/images/Tangerine.avif';
import Tomato from '../../../public/images/images/Tomato.avif';
import notavailable from '../../../public/images/images/notavailable.avif';

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