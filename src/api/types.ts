export interface Favor {
  readonly id?: number;
  title: string;
  by_user: string;
  description: string;
  favos_price: number;
  location: string;
  datetime: string;
  open_slots: number;
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
  img: string;
}

export interface Leader {
  username: string;
  level: number;
  avatar: string;
  trophy?: string;
}
