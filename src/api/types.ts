export interface Favor {
  readonly id?: number;
  title: string;
  byUser: string;
  description: string;
  price: number;
  location: string;
  datetime: string;
  slots: number;
  created_at: string;
}

export interface User {
  readonly id?: string;
  username: string;
  fullname: string;
  avatar: string;
  xp: number;
}

export interface Achivement {
  readonly id?: number;
  name: string;
  description: string;
  gain: number;
}
