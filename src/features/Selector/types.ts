import type { Game } from '../../services/games/types';

export interface SelectorProps {
  games: Array<Game>;
  value: string;
  onChange: (next: string) => void;
}
