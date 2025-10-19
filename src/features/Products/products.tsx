import { useCallback, useMemo, useState } from 'react';
import { Card } from './components';
import { Flex, useInfiniteScroll } from '../../shared';
import './products.css';
import type { ProductsProps } from './types';

export const Products = ({ games }: ProductsProps) => {
  const CHUNK = 36;
  const [visible, setVisible] = useState(CHUNK);

  const canGrow = visible < games.length;

  const grow = useCallback(() => {
    if (canGrow) setVisible((v) => Math.min(v + CHUNK, games.length));
  }, [canGrow, games.length]);

  const sentinelRef = useInfiniteScroll(grow, '450px');

  const items = useMemo(() => games.slice(0, visible), [games, visible]);

  if (!games.length) {
    return (
      <Flex padding={'5px 0 5px 0'} margin={'20px 0 15px 0'}>
        Ничего не нашлось....
      </Flex>
    );
  }

  return (
    <>
      <Flex gap={10} align="center" padding={'5px 0 5px 0'} margin={'20px 0 15px 0'}>
        <img src="/Pragmatic Play.svg" alt="Pragmatic Play" />
        <h1 className="games__tittle">Pragmatic Play</h1>
      </Flex>
      <div className="games__grid">
        {items.map((g) => (
          <Card key={g.gameID} id={g.gameID} name={g.gameName} />
        ))}
      </div>
      {canGrow && <div ref={sentinelRef} style={{ height: 1 }} />}
    </>
  );
};
