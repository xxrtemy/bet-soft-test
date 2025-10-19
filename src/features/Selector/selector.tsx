import { useEffect, useMemo, useRef, useState } from 'react';

import type { SelectorProps } from './types';
import { getUniqueGameTypes } from '../../shared';
import './selector.css';

export const Selector = ({ games, value, onChange }: SelectorProps) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLButtonElement>(null);

  const options = useMemo(() => {
    return getUniqueGameTypes(games);
  }, [games]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return (
    <div className="select__wrapper">
      <span className="select__label">{'Game Type'}</span>
      <div className="select">
        <button ref={ref} className="select__button" onClick={() => setOpen(!open)}>
          {value || 'All'}
          <span aria-hidden>
            <img src="/Arrow.svg" alt="arrow" />
          </span>
        </button>
        {open && (
          <ul className="select__list">
            <li onClick={() => (onChange('all'), setOpen(false))}>All</li>
            {options.map((option: string) => (
              <li key={option} onClick={() => (onChange(option), setOpen(false))}>
                {option}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
