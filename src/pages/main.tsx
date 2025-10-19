import { useMemo, useState } from 'react';
import { Search, Selector, Products } from '../features';
import { useGetListQuery } from '../services';
import { Flex } from '../shared';

export const Main = () => {
  const { data, error } = useGetListQuery();
  const [type, setType] = useState('all');
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    const searchTerm = query.trim().toLowerCase();

    return (
      data?.result.filter((game) => {
        const matchType = type === 'all' || game.gameTypeID === type;
        const matchName = !searchTerm || game.gameName.toLowerCase().includes(searchTerm);
        return matchType && matchName;
      }) || []
    );
  }, [data?.result, type, query]);

  if (error) {
    return <div>Ошибочка...</div>;
  }

  return (
    <>
      {data?.result && (
        <>
          <Flex justify="space-between" gap={10}>
            <Selector games={data.result} value={type} onChange={setType} />
            <Search onSearch={(q) => setQuery(q)} />
          </Flex>
          <Products games={filtered} />
        </>
      )}
    </>
  );
};
