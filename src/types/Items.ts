export interface ItemImage {
  full: string;
  group: string;
  sprite: string;
  x: number;
  y: number;
}

export interface Item {
  name: string;
  description: string;
  colloq: string;
  plaintext: string;
  from: string[];
  into: string[];
  image: ItemImage;
  gold: {
    base: number;
    total: number;
    sell: number;
    purchasable: boolean;
  };
  tags: string[];
  maps: Record<string, boolean>;
  stats: Record<string, string>;
  depth: number;
}
