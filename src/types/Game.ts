import type { Tag } from "./Tag";

export interface Game {
  issueId: number;

  storeId: string;

  iconUrl: string;

  name: string;

  likes: number;

  tags: Tag[];
}
