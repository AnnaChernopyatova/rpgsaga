import { Hero } from '../Hero';

export default class DummyError extends Error {
  dummy: Hero;

  constructor(message: string, dummy: Hero) {
    super(message);
    Object.setPrototypeOf(this, new.target.prototype);
    this.name = 'DummyError';
    this.dummy = dummy;
  }
}
