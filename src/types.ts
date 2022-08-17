export interface Snippet {
  prefix: string;
  body: string;
}

export interface SelectStore {
  [prefix: string]: number;
}
