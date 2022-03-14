import { Hero } from './Hero';

export default class SerializerHeroList {
  serializeList(heroList: Hero[]) {
    const serializedHeroes: string[] = [];
    for (const hero of heroList) {
      const heroSerialized = JSON.stringify(hero);
      serializedHeroes.push(heroSerialized);
    }
    return serializedHeroes;
  }
}
