import type { CardProps } from './types';
import './card.css';

export const Card = ({ name, id }: CardProps) => {
  const src = `/pics/game_pic/square/200/${id}.png`;

  return (
    <div className="game__card" title={name}>
      <div className="game__img__wrapper">
        <img className="game__img" src={src} alt={name} />
      </div>
      <p className="game__title">{name}</p>
    </div>
  );
};
