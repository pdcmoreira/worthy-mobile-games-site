import type { GameTag } from "./GameTag";

export interface Game {
  issueId: number;

  storeId: string;

  iconUrl: string;

  name: string;

  likes: number;

  tags: Array<GameTag>;
}
