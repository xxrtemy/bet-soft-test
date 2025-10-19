import type { Game } from '../../services/games/types';
/**
 * Возвращает список уникальных типов игр.
 *
 * @param games — массив игр
 * @returns массив уникальных идентификаторов типа игры
 */
export const getUniqueGameTypes = (games: Game[]): string[] => {
  return [...new Set(games.map((item) => item.gameTypeID))];
};
