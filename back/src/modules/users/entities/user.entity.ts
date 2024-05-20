import { randomUUID } from 'crypto';

export class User {
  readonly id: string;
  avatar: string;
  name: string;
  email: string;
  password: string;

  constructor() {
    this.id = randomUUID();
  }
}
