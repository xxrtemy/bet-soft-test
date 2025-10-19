export interface Game {
  gameID: string;
  gameName: string;
  gameTypeID: string;
  technology: string;
  platform: string;
  firstSeenAt: string;
}

export interface GamesResponse {
  result: Game[];
}
