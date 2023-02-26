import type { GameTagGenres } from "./GameTagGenres";
import type { GameTagPayments } from "./GameTagPayments";
// import { GameTagType } from "./GameTagType";

// export interface GameTag {
//   type: GameTagType;

//   value: string;
// }

export type GameTag = GameTagGenres | GameTagPayments;
