export interface Links {
  self: string;
  last?: string;
  first?: string;
  next?: string;
}

export type WithId<T> = T & { id: string };
